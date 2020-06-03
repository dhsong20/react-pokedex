import React from "react"
import ContentLoader from "react-content-loader" 

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="26" y="15" rx="5" ry="5" width="175" height="99" />
  </ContentLoader>
)

export default MyLoader