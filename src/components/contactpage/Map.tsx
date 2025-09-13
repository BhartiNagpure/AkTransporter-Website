import React from 'react'

function Map() {
  return (
    <div>
         {/* Google Map */}
            <div className="max-w-7xl flex-1  mx-auto px-6 lg:px-12 mt-12 lg:mt-16">
                <iframe
                    title="AK Transporter Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.781892246534!2d79.0287300750835!3d21.12125998055141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c00885f437c7%3A0xc1fed1fad861054c!2sA.K.%20Transport%20Co.!5e0!3m2!1sen!2sin!4v1757334278582!5m2!1sen!2sin"
                    className="w-full h-[500px] rounded-2xl shadow-lg border-0"
                    loading="lazy"
                ></iframe>
            </div>
    </div>
  )
}

export default Map