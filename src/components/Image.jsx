function Image ({ pdata, imgSrc, altSrc} ){
    return(<div>
        <p>{ pdata}</p>
        <img src= {imgSrc} alt= {altSrc} />
    </div>
    )
}
export default Image;