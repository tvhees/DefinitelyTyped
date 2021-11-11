import BigCommerce = require("node-bigcommerce");

const bigCommerce = new BigCommerce({});

bigCommerce.verify('');
bigCommerce.authorize({
    code: '',
    context: '',
    scope: ''
}).then(result => {
    console.log(`Received access token: ${result.access_token}`);
});

const request = bigCommerce.createAPIRequest();
request.run('', '', {});

bigCommerce.request('', '', {});
bigCommerce.get('');
bigCommerce.post('', {});
bigCommerce.put('', {});
bigCommerce.delete('');