const bcrypt = require('bcrypt');

async function generateHash() {
  const password = 'MondoBitWill!';
  const saltRounds = 10;
  
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log('Generated hash for password "MondoBitWill!":', hash);
  } catch (error) {
    console.error('Error generating hash:', error);
  }
}

generateHash(); 