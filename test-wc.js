const url = 'https://greenyellow-llama-986693.hostingersite.com/wp-json/wc/v3/products';
const key = 'ck_b83870711797b8c1ae25828ea74c5dd71b7b05df';
const secret = 'cs_9886c8f345bdb1c4a813786468186d94bcd241a0';

async function test() {
  const response = await fetch(url, {
    headers: {
      'Authorization': 'Basic ' + Buffer.from(key + ':' + secret).toString('base64')
    }
  });
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2).slice(0, 500));
}

test();
