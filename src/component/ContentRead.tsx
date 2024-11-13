import React from 'react'
import "./css/ContentRead.css"

type Props = {}

const ContentRead = (props: Props) => {
  return (
    <>
        <div className="row c-read" >
        <div className="col-12 col-sm-6 col-md-3 col-lg-3" >
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="icons-main" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 7.25a.75.75 0 0 0-1.5 0v5.5c0 .27.144.518.378.651l3.5 2a.75.75 0 0 0 .744-1.302L12.5 12.315V7.25Z"></path><path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1ZM2.5 12a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5A9.5 9.5 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12Z"></path></svg>  
            <p className='c-heading'>10 minute Free medicine now </p>
           <p className='c-content'> Get your order devlivered to you doorstep at the earilest from medicine cart pickup stores near you.</p>
            
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-3" >
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="icons-main"xmlns="http://www.w3.org/2000/svg"><path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"></path></svg>
                 <p className='c-heading'>Best Prices & Offers</p>
           <p className='c-content'> cheaper prices then your local electronic shop,great cashback offers to top it off, Get best pricess & offers</p>
            
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-3" >
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" className="icons-main"  xmlns="http://www.w3.org/2000/svg"><path d="M223.68,66.15,135.68,18h0a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32h0l80.34,44L128,120,47.66,76ZM40,90l80,43.78v85.79L40,175.82Zm96,129.57V133.82L216,90v85.78Z"></path></svg>
            <p className='c-heading'>Wide Assortment</p>
           <p className='c-content'> Choices from 5000+ products across medicine,personal care,free services ,1-years warrentys.</p>
            
        </div>
        <div className="col-12 col-sm-6 col-md-3 col-lg-3" >
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="icons-main"  xmlns="http://www.w3.org/2000/svg"><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"></path></svg>
            <p className='c-heading' >Easy Returns </p>
           <p className='c-content'> Not satisfed with a ? Return it at the doorstep & get a refund within hours. No questions asked Policy.</p>
            
        </div>

        </div>
    </>
  )
}

export default ContentRead