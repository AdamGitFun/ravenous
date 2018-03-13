const apiKey = 'HQtL3W6w7k4R1o6kXVPrLUIRVSqmXI98HirHi0Gj2baxKgdUms3sl8x6VBS5T2Mnaqr6Z1BE44ncjRkzSMkmMFcRHR-C2_CKVhNwCIVWI9J-yCVdCq1K3ll3BbSmWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}', {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then( response => {
      return response.json;
    }).then( jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category:business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));



      }
    });

  }

};

export default Yelp;
