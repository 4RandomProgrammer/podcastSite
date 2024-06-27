import { FaInstagram, FaYoutube, FaHome } from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import DinamicList from "../DinamicLists/DinamicLists.jsx";


const Footer = () => {
    const socialMediaElements = [
        <><a className='flex' href="https://www.instagram.com/setudopassaoquefica/" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" />@setudopassaoqfica</a></>, 
        <a className='flex' href="https://www.youtube.com/@setudopassaoquefica2934" target="_blank" rel="noopener noreferrer"><FaYoutube className="icon" />setudopassaoquefica</a>
    ]
    const contactElements = [<span className="flex"><MdEmail className="icon" />teste@teste.com</span>, <span className="flex"><FaHome className="icon"/>Rua Mundo Transcendente, 1960</span>, <span className="flex"> <BsFillTelephoneInboundFill className="icon"/>(11) 11111-1111</span>]
    return (
        <footer className='bg-yellow-400 p-10' >
            <div className="p-4 border-b-2 border-b-black">
                <h4 className="text-3xl mb-6">Se tudo passa, o que fica?</h4>
                <div className="flex space-x-16 mb-6">
                    <p className="w-2/5">Já se perguntou sobre o verdadeiro sentido da vida? Será que ela é realmente passageira? Somos um grupo de jovens questiionadores que busca as respostas para essas perguntas! Entre nesse bate papo diferente com pessoas que investigam os mistérios da vida e  procuram aprender e se aperfeiçoar. Estes estudantes de logosofia se propõem a extrair o verdadeiro valor das experiências do dia a dia. Afinal, se tudo passa, o que fica?</p>
                    <div>
                        <DinamicList title={'Redes Sociais'} elements={socialMediaElements} />
                    </div>
                    <div>
                        <DinamicList title={'Contato'} elements={contactElements}/>
                    </div>
                </div>
            </div>
           
      </footer>
    )
}

export default Footer;