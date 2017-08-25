function search(query, cb) {
  return fetch(`http://es.backpackbang.com:9200/products/amazon/_search?q=${query}`, {
    accept: "application/json"
  }).then(cb);
}



const api = { search };
export default api;
