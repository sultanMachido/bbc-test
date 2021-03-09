import React,{Component} from 'react';
import NavigationBar from '../Components/NavBar/NavBar';
import Section from '../Components/Section/Section';
import './DisplayPage.css';
import image from '../header_image.webp';
import Infographic from '../Components/Infographic/Infographic';




class DisplayPage extends Component {


    render(){
        return(
            <div>
                   <NavigationBar />
                   
                   <Section>
                       <h1 className="HeaderText">Delhi smog: How many cigarettes did you smoke this week?</h1>
                       <img src={image} alt="image showing smog in India" className="HeaderImage"/>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p style={{fontWeight:'700',color:'#737373',lineHeight:'1.5',fontSize:'1.06667rem'}}>By me!</p>
                       <p style={{fontWeight:'400',lineHeight:'1.5',fontSize:'1.06667rem'}}>20 November 2017</p>
                       <a href="http://www.bbc.co.uk/news/world/asia/india" style={{fontWeight:'700',color:'#737373',lineHeight:'1.5',fontSize:'1.06667rem'}}>India</a>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px',textAlign:'center'}}>
                        <q className="Quote">Breathing in Delhi is close to smoking more than a dozen cigarettes a day on an average</q> 
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">Breathing in Delhi is close to smoking more than a dozen cigarettes a day on an average. Click on your city to find out how many cigarettes you are smoking</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">On November 7, Indian capital, Delhi woke up to a blanket of thick grey smog.  The toxic haze was so severe that politicians announced plans to close schools.  United Airlines shut all of its flights from the US to Delhi. Visibility was poor as pollution levels reached 30 times the World Health Organization's recommended limit in some areas.</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">According to the data from the System of Air Quality Weather Forecasting and Research website, the levels of tiny particulate matter (known as PM 2.5) that enter deep into the lungs reached as high as 700 micrograms per cubic metre in some areas of Delhi on November 6th. The air quality standard for PM 2.5 is 15 µg/m3 and anything above 81 µg/m3 falls under poor air quality standard.</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">Some reports claimed that New Delhi's air quality was so severe it was equivalent to smoking 45 cigarettes a day. We looked at the data to see if this was true.</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">Click on your city to find out how many cigarettes you have effectively smoked because of last week's pollution.</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">1 cigarette is equivalent to an air pollution of 22 μg/m3 (Absolute value: 21.6 μg/m3) for one day.</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">*The map highlights the state the city can be found.</p>
                   </Section>

                    <Infographic />

                    <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">A report by Berkeley Earth showed that in China, 1.6 million people die every year from an average exposure of 52 μg/m3 of PM2.5. To kill 1.6 million people would require, assuming 1.36 x9^6 deaths per cigarette, 1.1 trillion cigarettes. Since the population of China is 1.35 billion, that comes to 764 cigarettes every year per person, or about 2.4 cigarettes per day.</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">Put another way, one cigarette is equivalent to an air pollution of 22 μg/m3 (Absolute value: 21.6 μg/m3) for one day.</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">The average PM2.5 in Beijing over the year is about 85 μg/m3, equivalent to about 4 cigarettes per day. Similarly, if the air pollution in New Delhi, India, is 546 μg/m3, it is equivalent to about 25 cigarettes each day.</p>
                   </Section>

                   <Section styles={{width:'70%',display:'block',margin:"10px auto",padding:'5px'}}>
                       <p className="ArticleParagraph">We took the PM 2.5 data of 33 cities in India every day for one week. We calculated the mean of 6 days PM 2.5 data of each city and divided it by 21.6 μg/m3 to get the number of cigarettes. It is also imperative to say the numbers shown is the assumption that you ideally spent most of your time breathing air from outside.</p>
                   </Section>
            </div>
        )
    }
}



export default DisplayPage