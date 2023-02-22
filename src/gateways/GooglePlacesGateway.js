const axios = require("axios");

export const getRestaurants = async (req, res, next) => {
    // const config = {
    //     method: 'get',
    //     url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=${process.env.MAPS_KEY}`,
    //     headers: { }
    //   };
      
    //   axios(config)
    //   .then(function (response) {
    //     console.log(response.data)
    //     res.send(response.data);
    //     return JSON.stringify(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });


    const request = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
        params: {
            location : '32.986060,-96.765250',
            radius: '1500',
            type: 'restaurant',
            key: process.env.MAPS_KEY,
        }
    })
    console.log(request, "new type")
    res.send(request.data);
};
