import { TextInput } from '../../utils/inputs';

const page1 = () => {
  const { setFieldValue } = useFormikContext();
  const setFile = useCallback((event) => {
    setFieldValue('listingImage', event.currentTarget.files[0]);
  }, []);

  return (
    <>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='building_num'>
            Building No.
          </label>
          <TextInput
            name='building_num'
            className='form-control'
            maxLength='4'
          />
        </div>

        <div className='form-group col-sm-8 text-left'>
          <label className='label-text' htmlFor='street'>
            Street
          </label>
          <TextInput name='street' className='form-control' maxLength='20' />
        </div>
      </div>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-6 text-left'>
          <label className='label-text' htmlFor='city'>
            City
          </label>
          <TextInput name='city' className='form-control' maxLength='20' />
        </div>
        <div className='form-group col-sm-2 text-left'>
          <label className='label-text' htmlFor='state'>
            State
          </label>
          <TextInput name='state' className='form-control' maxLength='2' />
        </div>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='zip_code'>
            Zip
          </label>
          <TextInput name='zip_code' className='form-control' maxLength='5' />

          <label className='label-text' htmlFor='unit_type'>
            Unit Type
          </label>
          <Select
            name='unit_type'
            className='form-control border border drop-text'
          >
            <option value=''>Pick</option>
            <option value='house'>House</option>
            <option value='appartment'>Apartment</option>
            <option value='townhouse'>Townhouse</option>
          </Select>
        </div>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='offer_type'>
            Offer Type
          </label>
          <Select name='offer_type' className='form-control border drop-text'>
            <option value=''>Pick</option>
            <option value='buy'>Buy</option>
            <option value='rent'>Rent</option>
          </Select>
        </div>
        <div className='form-group col-sm-2 text-left'>
          <label className='label-text' htmlFor='bedrooms'>
            Bedrooms
          </label>
          <Select name='bedrooms' className='form-control border drop-text'>
            <option value=''>Pick</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
          </Select>
        </div>
        <div className='form-group col-sm-2 text-left'>
          <label className='label-text' htmlFor='bathrooms'>
            Bathrooms
          </label>
          <Select name='bathrooms' className='form-control border drop-text'>
            <option value=''>Pick</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </Select>
        </div>
      </div>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-10 text-left'>
          <label className='label-text' htmlFor='description'>
            Description
          </label>
          <TextInput
            name='description'
            className='form-control'
            maxLength='500'
          />
          <label className='label-text' htmlFor='cost'>
            Cost
          </label>
          <TextInput name='cost' className='form-control' maxLength='10' />
        </div>
        <div className='form-group col-sm-3 text-left'>
          <label className='label-text' htmlFor='sq_footage'>
            Sq. Footage
          </label>
          <TextInput
            name='sq_footage'
            className='form-control'
            maxLength='10'
          />
        </div>
        <div className='form-group col-sm-4 text-left'>
          <label className='label-text' htmlFor='lease_length'>
            Lease Length
          </label>
          <Select name='lease_length' className='form-control border drop-text'>
            <option value=''>Pick</option>
            <option value='1'>Monthly</option>
            <option value='4'>Quarterly</option>
            <option value='6'>Semi-Annualy</option>
            <option value='12'>Yearly</option>
          </Select>
        </div>
      </div>
      <div className='form-row justify-content-center'>
        <div className='form-group col-sm-10 text-left'>
          <label className='label-text' htmlFor='listingImage'>
            Upload an Image
          </label>
          <File name='listingImage' type='file' onChange={setFile} />
          
        </div>
      </div>
      <div id="googleMap" style="width:100%;height:400px;"></div>



  var geocoder;
  var map;
  var address = document.getElementById("city").value;
  console.log(address);
 if(address) {
    function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
      zoom: 8,
      center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("googleMap"), myOptions);
    if (geocoder) {
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

            var infowindow = new google.maps.InfoWindow(
                { content: '<b>'+address+'</b>',
                  size: new google.maps.Size(150,50)
                });

            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map, 
                title:address
            }); 
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
            });

          } else {
            console.log("No results found");
          }
        } else {
          console.log("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }
 }
    </>
  );
};

export default page1;
