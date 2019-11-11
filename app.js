var users = [
    {
        id: 1,
        name: "Bob",
        address: "Manilla",
        age: 27
    },
    {
        id: 2,
        name: "Harry",
        address: "Baguio",
        age: 32
    }
];

$.each(users, function(i, user) {
    appendToUsrTable(user);
});


function appendToUsrTable(user) {
    
    $("#userTable > tbody:last-child").append(`
        <tr id="user-${user.id}">
            <td class="userData" name="name">${user.name}</td>
            <td class="userData" name="address">${user.address}</td>
            <td class="userData" name="address">${user.age}</td>
            <td align="center">
                <button class="btn btn-success form-control" onClick="editUser(${user.id})" data-toggle="modal" data-target="#myModal">EDIT</button>
            </td>
            <td align="center">
                <button class="btn btn-danger form-control" onClick="deleteUser(${user.id})">DELETE</button>
            </td>
        </tr>
`)
    
}