const util = require('util');
const crypto = require('crypto');

const pbkdf2 = util.promisify(crypto.pbkdf2);
const randomBytes = util.promisify(crypto.randomBytes);

const geratePassword = async text => {
    const ALGO = 'sha512';
    const KEY_LEN = 64;
    const salt = await randomBytes(32);
    const iter = Math.floor(Math.random() * 20000) + 200000;
    const digest = await pbkdf2(text, salt, iter, KEY_LEN, ALGO);
    return `${ALGO}:${salt.toString('base64')}:${iter}:${KEY_LEN}:${digest.toString('base64')}`;
};

(async () => {
    const hashed = await geratePassword('1234');
    console.log(hashed);
})();