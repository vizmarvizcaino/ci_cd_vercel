import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'


const HeaderSocial = () => {
  return (
    <>
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/vismar-viscaino-iguaran-5324a9a8/" target='_blank' rel="noreferrer" > <BsLinkedin />  </a>
        <a href="https://github.com/vizmarvizcaino" target='_blank' rel="noreferrer" > <FaGithub /> </a>
        <a href="https://www.facebook.com/vizmar.vizcaino" target='_blank' rel="noreferrer" > <GrFacebook /> </a>
      </div>
    </>
  )
}
export default HeaderSocial