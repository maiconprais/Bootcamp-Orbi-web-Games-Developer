function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Maicon' ,'Admin');
usuarios.set('Paula' ,'Admin');
usuarios.set('Joege' ,'User');
usuarios.set('Natália' ,'Admin');

console.log(getAdmins(usuarios));