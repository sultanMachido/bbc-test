import React,{Component} from 'react';
import NavigationBar from '../Components/NavBar/NavBar';
import Section from '../Components/Section/Section';
import './DisplayPage.css';
import image from '../header_image.webp';
import Infographic from '../Components/Infographic/Infographic';
import { withTranslation } from 'react-i18next';




class DisplayPage extends Component {


    render(){

        //returns function that translates the text on the page
        const { t,i18n } = this.props;

        return(
            <div>
                   <NavigationBar />
                   
                   <Section>
                       <h1 className="HeaderText">{t('pageTitle')}</h1>
                       <img src={image} alt="image showing smog in India" className="HeaderImage"/>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p style={{fontWeight:'700',color:'#737373',lineHeight:'1.5',fontSize:'1.06667rem'}}>{t('author')}</p>
                       <p style={{fontWeight:'400',lineHeight:'1.5',fontSize:'1.06667rem'}}>{t('publicationDate')}</p>
                       <a href="http://www.bbc.co.uk/news/world/asia/india" style={{fontWeight:'700',color:'#737373',lineHeight:'1.5',fontSize:'1.06667rem'}}>India</a>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px',textAlign:'center'}}>
                        <q className="Quote">{t('quote')}</q> 
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">{t('p1')}</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">{t('p2')}</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">{t('p3')}</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">{t('p4')}</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">{t('p5')}</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">{t('p6')}</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">{t('p7')}</p>
                   </Section>

                    <Infographic />

                    <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">{t('p8')}</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">{t('p9')}</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">{t('p10')}</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">{t('p11')}</p>
                   </Section>

                   <div className ="TranslateButton">
                       <button 
                          style={{width:'100px',height:'50px',backgroundColor:'blue',color:'white',border:'none'}}
                          onClick={() => i18n.changeLanguage('en')}
                        >English</button>
                       <button 
                         style={{width:'100px',height:'50px',backgroundColor:'red',color:'white',border:'none'}}
                         onClick={() => i18n.changeLanguage('hi')}
                         >Hindi</button>
                   </div>
            </div>
        )
    }
}



export default withTranslation()(DisplayPage)