import React from 'react';
import { Table, Button } from "flowbite-react";

const AdoptionRequest = () => {
    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    <Table.HeadCell>User name</Table.HeadCell>
                    <Table.HeadCell>Email</Table.HeadCell>
                    <Table.HeadCell>Phone number</Table.HeadCell>
                    <Table.HeadCell>Location</Table.HeadCell>
                    <Table.HeadCell>
                        Action
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'Apple MacBook Pro 17"'}
                        </Table.Cell>
                        <Table.Cell>Sliver</Table.Cell>
                        <Table.Cell>Laptop</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell>
                            <Button.Group outline className=''>
                                <Button gradientMonochrome="success">Accept</Button>
                               
                                <Button gradientMonochrome="failure">Reject</Button>
                            </Button.Group>
                        </Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>
        </div>
    );
};

export default AdoptionRequest;