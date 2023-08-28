// components/SocialIconsBox.tsx
import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaEnvelope, FaFacebookSquare } from 'react-icons/fa';

interface SocialIconsBoxProps {
    socialLinks: {
        github?: string;
        instagram?: string;
        facebook?: string;
        linkedin?: string;
        email?: string;
    };
}

const SocialIconsBox: React.FC<SocialIconsBoxProps> = ({ socialLinks }) => {
    return (
        <div className="text-gray-500 bg-stone-200 rounded-lg shadow-md p-4 pl-4">
            <div>
            <p>Aqui tienes mis redes para comunicarte o para enterarte de que estoy haciendo</p>
            </div>

            <div className="flex space-x-4">
            
            {socialLinks.github && (
                <div >
                    <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className=' flex items-center space-x-2 my-5'>
                        <FaGithub className="text-slate-600 hover:text-blue-800 " />
                        <p className="text-slate-600 hover:text-slate-800 align-middle">GitHub</p>
                    </a>
                </div>
            )}
            {socialLinks.instagram && (
                <div >
                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 my-5'>
                        <FaInstagram className="text-rose-600 hover:text-blue-800 " />
                        <p className="text-rose-600 hover:text-rose-800 align-middle">Instagram</p>
                    </a>
                </div>
            )}
            {socialLinks.facebook && (
                <div >
                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 my-5'>
                        <FaFacebookSquare className="text-blue-600 hover:text-blue-800 " />
                        <p className="text-blue-600 hover:text-blue-800 align-middle">Facebook</p>
                    </a>
                </div>

            )}
            {socialLinks.linkedin && (
                <div >
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className='flex items-center space-x-2 my-5'>
                        <FaLinkedin className="text-blue-600 hover:text-blue-800 " />
                        <p className="text-blue-600 hover:text-blue-800 align-middle">LinkedIn</p>
                    </a>
                </div>
            )}

            {socialLinks.email && (

                <a href={`mailto:${socialLinks.email}`} target="_blank"  rel="noopener noreferrer"  className="flex items-center space-x-2 my-5">
                    <FaEnvelope className="text-rose-600 hover:text-blue-800"></FaEnvelope>
                    <p className="text-rose-600 hover:text-rose-800 align-middle">Enviar E-mail</p>
                </a>
            )}
        </div>
        </div>
        
    );
};

export default SocialIconsBox;
