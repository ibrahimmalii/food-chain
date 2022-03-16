const PhotosGallary = props => {
    // console.log(props.productId)
    return(
        <div className="container ">
            {props.productId && props.productId.data[0].files.map(res =>{
                return(
                    <div className='m-5 text-center' style={{borderRadius: '10px' , overflow: 'hidden' }}>
                    
                    <img
                      src={"http://localhost:8000" + res.file_path}
                      alt="fruit"
                      width="80%"
                      height="300px"
                    />
                    </div>
                )
            })}
        </div>
    )
}

export default PhotosGallary;