const customerData = [

    {
        "firstname": "John",
        "lastname": "Doe",
        "customerid": "123456",
        "registration-date": "2023-01-15"
    },
    {
        "firstname": "Alice",
        "lastname": "Smith",
        "customerid": "789012",
        "registration-date": "2022-11-30"
    },
    {
        "firstname": "Michael",
        "lastname": "Johnson",
        "customerid": "345678",
        "registration-date": "2023-05-20"
    },
    {
        "firstname": "Sarah",
        "lastname": "Wilson",
        "customerid": "901234",
        "registration-date": "2023-03-10"
    }
];

export function showCustomer(customerid, firstname, lastname)
{
    console.log(customerData)
}

export function createCusomer(customerId,firstname, lastname ){
    let newCustomer = {customerid, firstname, lastname};
    customerData.push(newCustomer);
}