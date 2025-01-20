import { CardElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';
import toast from 'react-hot-toast';

const CheckoutForm = ({ closeModal, recomendedDonation, donation }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState('')
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { amount: 50 })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const amount = e.target.amount.value;
        setLoading(true)
        const res = await axiosSecure.post('/create-payment-intent', { amount: amount })
        const client = (res.data.clientSecret)

        if (!stripe || !elements) {
            setLoading(false)
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) return
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
            setLoading(false)
        }
        else {
            console.log("payment success", paymentMethod);
            setError('')
        }
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(client, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'annonymous',
                    name: user?.displayName || 'annonymous'
                }
            }
        })
        if (confirmError) {
            console.log(confirmError);
            setLoading(false)
        }
        else {
            console.log(paymentIntent, "Payment intent");
            if (paymentIntent.status === 'succeeded') {
                console.log("abdul Hasib");
                const payment = {
                    name: user.displayName,
                    email: user.email,
                    transactionId: paymentIntent.id,
                    amount: amount,
                    date: new Date(),
                    statuse: 'success',
                    donationId: donation._id,

                }
                const response = await axiosSecure.post('/payment-success', payment)
                console.log(response);
                // ref
                closeModal(false)
                recomendedDonation(true)
                localStorage.setItem('recomDonation', true)
                setLoading(false)
                toast.success("Payment successfully done.", transactionId)

            }
        }

    }

    return (
        <form onSubmit={handleSubmit} className='space-y-3'>
            <div>
                <Label htmlFor="amount" value="Donation Amount*" />
                <TextInput
                    id="amount"
                    name="amount"
                    type="number"
                    placeholder="Enter donation amount"
                    required
                    className="w-full mb-4"
                />
            </div>
            <div >

            <CardElement  />
            </div>

            {
                loading? <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>:
            <button type="submit" disabled={!stripe || !clientSecret} class="text-gray-900 mt-2 bg-[#F7BE38] disabled: hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2">
                Pay
            </button>
            }
            {/* <button className='btn btn-primary mt-5' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button> */}
            <p className='text-red-600'>{error}</p>

            {
                transactionId && <p className='text-green-500'>{transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;