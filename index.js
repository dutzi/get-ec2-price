const fetch = require('node-fetch');

module.exports = async function (instanceType) {
  const res = await fetch(
    'https://a0.p.awsstatic.com/pricing/1.0/ec2/region/us-east-1/ondemand/linux/index.json'
  ).then((res) => res.json());

  const entry = res.prices.find(
    (entry) => entry.attributes['aws:ec2:instanceType'] === instanceType
  );

  if (!entry || !entry.price || !entry.price.USD) {
    return null;
  }

  return Number(entry.price.USD);
};
