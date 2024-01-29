import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="536" y="147" rx="3" ry="3" width="67" height="11" /> 
    <rect x="503" y="158" rx="3" ry="3" width="140" height="11" /> 
    <rect x="577" y="158" rx="3" ry="3" width="53" height="11" /> 
    <rect x="548" y="142" rx="3" ry="3" width="72" height="11" /> 
    <rect x="506" y="146" rx="3" ry="3" width="100" height="11" /> 
    <rect x="574" y="147" rx="3" ry="3" width="37" height="11" /> 
    <rect x="487" y="144" rx="3" ry="3" width="140" height="11" /> 
    <rect x="509" y="151" rx="3" ry="3" width="173" height="11" /> 
    <circle cx="576" cy="155" r="10" /> 
    <circle cx="138" cy="138" r="138" /> 
    <circle cx="576" cy="533" r="9" /> 
    <rect x="0" y="291" rx="10" ry="10" width="280" height="25" /> 
    <rect x="0" y="335" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="441" rx="10" ry="10" width="95" height="32" /> 
    <rect x="140" y="441" rx="20" ry="20" width="134" height="32" />
  </ContentLoader>
)

export default Skeleton;