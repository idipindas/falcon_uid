import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'

const ContactForm = () => {
  return (
    <div className="relative w-full overflow-hidden py-16 md:py-24 ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/jjjj.avif"
          alt="Background"
          layout="fill"
          objectFit="fill"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          {/* Form */}
          <div className="w-full max-w-md">
            <form className="space-y-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-white">Get in Touch</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition duration-200 text-white placeholder-white placeholder-opacity-70"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition duration-200 text-white placeholder-white placeholder-opacity-70"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full px-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md focus:ring-2 focus:ring-white focus:border-transparent transition duration-200 text-white placeholder-white placeholder-opacity-70"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div>
                <Button type="submit" width='w-full' height='h-12' className="text-lg font-semibold bg-white bg-opacity-20 hover:bg-opacity-30 text-white border border-white border-opacity-50">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm