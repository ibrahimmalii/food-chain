import Urls from '../../Urls';

const PhotosGallary = (props) => {
  return (
    <div>
      <h3 className='mt-5'>Gallery</h3>
      <div
        className='container mb-5 mt-5'
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {props.productId &&
          props.productId.data[0].files.map((res) => {
            return (
              <div>
                <div
                  className=' m-1'
                  style={{
                    height: '400px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={Urls.domainUrl + res.file_path}
                    alt='fruit'
                    height='100%'
                    style={{
                      borderRadius: '20px',
                      boxShadow: '0 0 2px rgb(0 0 0 / 60%)',
                    }}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PhotosGallary;
