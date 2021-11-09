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

const verifyPassword = async(password, hashedPassword) => {
    const [algo, encoded_salt, iter_str, key_len_str, encoded_digest] = hashedPassword.split(':');
    const salt = Buffer.from(encoded_salt, 'base64');
    const iter = parseInt(iter_str, 10);
    const key_len = parseInt(key_len_str, 10);
    const stored_digest = Buffer.from(encoded_digest, 'base64');
    const digest = await pbkdf2(password, salt, iter, key_len, algo);
    return Buffer.compare(stored_digest, digest) === 0;
}

(async () => {
    const hashed = await geratePassword('1234');
    const result1 = await verifyPassword('1234', hashed);
    const result2 = await verifyPassword('1235', hashed);
    console.log(result1);
    console.log(result2);
})();