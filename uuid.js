const { v4: uuidv4 } = require('uuid');
for (let i = 0; i < 10; i++) {
  console.info(uuidv4());
}
const bcrypt = require('bcryptjs');

// пароль пользователя
const passwordFromUser = "Qwerty123!@#";
const passwordFromDB = "2$ldhslfihsjhglhjh-h,bvmhcgvg";

// шифруем пароль
const hashedPassword = bcrypt.hashSync(passwordFromUser, 10);
console.info(hashedPassword);
// сравниваем
bcrypt.compareSync(passwordFromUser, passwordFromDB);

