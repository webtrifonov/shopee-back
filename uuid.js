const { v4: uuidv4 } = require('uuid');
for (let i = 0; i < 10; i++) {
  console.log(uuidv4());
}
const bcrypt = require('bcrypt');

// пароль пользователя
const passwordFromUser = "123456";

// создаем соль
const salt = bcrypt.genSaltSync(10);

// шифруем пароль
const passwordToSave = bcrypt.hashSync(passwordFromUser, salt)

// выводим результат
console.log(salt);
console.log(passwordFromUser);
console.log(passwordToSave);

