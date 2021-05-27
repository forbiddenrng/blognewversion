import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import About from './components/About'
import Travel from './components/Travel'
import imagesArray from './images'
import background from './img/two.jpg'

class App extends Component {
  state = {
    inputValue: "",
    selectValue: "All",
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }
  handleSelect = (e) => {
    this.setState({
      selectValue: e.target.value,
    })
  }
  
  render() {
    const travels = [
      // { author: 'Antek Gawron', place: 'Gdynia', continent: "Europe", description: 'to jest wersja po polsku - test', src: [...imagesArray.gawronA] },
      // { author: 'Antek Gawron', place: 'Sandomierz', continent: "Asia", description: 'this is an english version - test Sandomierz', src: [...imagesArray.gawronA] },
      { place:"Mallorca", continent: "Europe", description: `Hi guys! I don't know how about you, but I love travelling. Today I'm writing to tell you about my trip to Mallorca.   
      I went there with my family for a week during the last holidays. Firstly, I must say that we took luggage full of food because we supposed that everything cost an arm and a leg there. But at the airport, it turned out that our baggage was too heavy and, to avoid the excess luggage charge, we repacked it to our hand luggage. Finally, with my overhead compartment full of convenience food, we took off.   
      I customised our itinerary, and we went sightseeing a lot. The most remarkable place I've visited was Cap de Formentor. We got there by the narrow mountain road. The driver had to be very focused in order not to have a head-on collision. At the top, we admired stunning views. The landscape was mesmerising. I was astonished because I've never seen such a picturesque place. I was over the moon.  
      What's more, my aunt, who lives there, took us to the best local restaurant. I ordered paella, which is seafood with rice and a diversity of spices. I recommend this dish from traditional cuisine. All evening was eminent.  
      Also, I want to add that it was an adventure holiday for me. Besides enjoying sunbathing and being a typical holidaymaker, I've tried parasailing. It was a lifetime experience! I soared through the air at a considerable height. I was filled in with pure exhilaration. For sure, it was an unforgettable feeling.  
      That's all for today. Have you ever been to Mallorca? If not, I recommend visiting this destination. I am looking forward to your comments. See you!`, src: [...imagesArray.mallorca] },
      { place: 'Sweden', continent: 'Europe', description: `Hi everyone! I would like to tell you about my trip to Sweden.

      This year, my family and I decided to spend our holidays differently than usual. We generally went to the warm golden beaches of the Mediterranean and sunbathed in the sunshine. However, this year we were opting to spend our holidays actively. We aimed to visit Sweden by bike. We also decided not to create a detailed itinerary but to plan the trip on an ongoing basis.
      
      On the first Friday of July, we commuted to Gdynia, from where we took the ferry to Karlskrona. The next day we reached our destination. Before we set off on our bicycle trip, we secured our luggage on the carriers. Then we went on tour. During our excursion, we admired the stunning views of southern Sweden. However, not only did we be impressed by the extraordinariness of nature, but also the remarkable Swedish-style housing estate drawn our attention.
      
      While the earlier outing was easy, the return home caused us a lot of trouble. Initially, we had trouble finding our way to the port. If the departure of the ferry had not been delayed, we would have been late. Additionally, my sister almost fell overboard and miraculously avoided the accident. Moreover, my parents lost their boarding passes, so they couldn't enter their cabin. However, despite the unpleasantness, we arrived home safely.
      
      Never have I been on a combination of a voyage and a bicycle excursion before, and to be honest, it was an interesting experience. Therefore, I encourage you to spend your holiday in a way that you have never done before.`, src: [...imagesArray.sweden]},
      { place: 'Turkey', continent: 'Asia', description: `Hi everyone! Guess what!   

      Last summer my family decided to go on a trip to Turkey, exactly to Alanya for 7 days. We were very excited because it was our first time visiting that country.   
      
      At first, we had to go to the Warsaw Chopin Airport. We checked in, our luggage was taken, and we were ready to go. Unfortunately, our plane had some technical problems so we were forced to wait and we took off behind schedule.   
      
      Finally, after three hours we reached the destination. We checked in in a 4-star Hotel and started our vacation. We had a full board, suite and there were three swimming pools with slides. They were awesome!   
      
      We spent most of the time in the hotel. We had a lot of attractions, for example, aerobic or acrobatic performances. After dinner, we would go to the town and observe residents’ usual life. I love the specific vibe of this town because wherever you looked, you could see lots of small shops with clothes and with local food. My favourite delicacy was Lokum. It is sugar with starch gel.  If I lived there, I would eat it every day!  
      
      It was the best trip of my life!`, src: [...imagesArray.turkey]},
      { place: 'Croatia', continent: 'Europe', description: `Hi everyone,  

      I am writing this post to share with all of you my recent travel experience. To those who didn’t know, I have always dreamt about going to Croatia, and so my dream came true!  
      
      My journey began on the 19th of August. We headed to Rogoznica, a small but cozy town located in the South West of the country. A holiday resort ten minutes from the centre was booked by my parents. We gathered all unnecessary stuff and set off for our beach holidays.  
      
      No one expected that it would take us 24 hours straight to get there. But when we arrived the view was breathtaking. In the first seconds, I realized it was definitely worth the effort. You could see palm trees all over the town, the sun was gently heating our skins, and I swear I have never ever seen such a beautiful sky.   
      
      We had no intention of wasting any of our precious time, so even though it was the first day, we found a tour guide who took us on an orientation trip. He showed us every bit of mysterious and stunning views this town had to offer us. It turned out he kept the cherry on top for the next day.  
      
      As the sun rose on the second day, we were invited to see around a peculiar and amazing island. We crossed the sea on a sailing boat on which we were able to admire the charms of the town from another perspective. On this day, we also had a chance to go fishing and what I loved the most, diving. Adventure holidays are what I love the most, so every other day was different in its own way.  
      
      What I expected it to be before my arrival? Actually, everything that happened. I had never had such a good rest. I was amused with everything, and for sure, if I were asked where to go next holidays, I would pick Croatia again.   
      
      Share and comment, love you all! Till the next time, bye!`, src: [...imagesArray.crotia]},
      { place: 'Grand Canyon', continent: 'North America', description: `Hi guys! 
      I am writing this post to tell you all about my trip to the Grand Canyon. 
      From the very beginning of my trip, I had to face my biggest nightmare -packing. In order to get back to Poland, I had to take a plane, so I did my best to avoid excess luggage charges. We set off from Palestine, Texas, and it took us 3 days to finally reach our destination. Meanwhile, we stopped at Amarillo and Albuquerque to get some rest and sightseeing. As we crossed the border of Arizona, I got a feeling of excitement and fulfilment because seeing the Grand Canyon had always been my dream.  
      We checked into our hotel room and went to sleep early to be ready for a whole day of to-die-for views. Unfortunately, it turned out that my companion was more of a holidaymaker rather than a backpacking lover. Therefore, I am planning on coming back there with a group of my adventurous friends to spend a few days hiking and camping. 
      Besides this little disadvantage, this was the best trip of my life. My dreams finally came true. 
      While being on the top of the Canyon, I got emotional, and I cried my heart. I recommend this destination to everyone who loves nature and physical activity.  
       
      That’s all for today. I am looking forward to your comments.
      `, src: [...imagesArray.grandcanyon]},
      { place: 'Vietnam', continent: 'Asia', description: `A year ago, during winter break, I flew with my family to Vietnam. This was definitely one of the best travels but also experiences I’ve ever had in my whole life. And here’s why.   

      First of all, in Vietnam, I saw the most picturesque and stunning views. Rice fields in the mountains near the bamboo forest were really peaceful and worthwhile. Another seascape I would never forget is when we were kayaking in a bay surrounded by mogotes covered with tropical plants. But don’t forget to use insect repellent while going on hiking in this part of the world.   
      
      Now onto Vietnamese cuisine. Obviously, it is delicious. There is a variety of fresh products depending on which part of the country you’re in. Mouth-watering seafood on the coast, silky tofu in the mountains and of course omnipresent pho soup, spring rolls and ripe fruit. Just keep in mind that sanitary standards in Vietnam are very distinct from what we are used to in Europe, and eating on the street and sitting on a very small plastic chair or eating in a very cramped place is ordinary and common.   
      
      We spent most of our time there in the capital- Hanoi. And because of the upcoming Chinese New Year, the whole city was decorated with traditional ornaments. We were lucky enough to see the New Year’s Eve celebration and beautiful fireworks. There is just one thing you have to remember about being a pedestrian in Hanoi. There is no such thing as a crosswalk. You simply have to go with the flow and avoid cars while crossing the road.   
      
      Summing up, I enjoyed my travel very much. Now I would like to visit also other Asian countries. I can recommend going there to everyone. I hope with those depictions and little tips, you’d feel encouraged to visit Vietnam.`, src: [...imagesArray.vietnam]},
      { place: 'Italy', continent: "Europe", description: `Hi everyone!  

      Today, I’d like to write about the best holidays I have ever had. It was after my graduation from middle school. I had been dreaming about doing something unusual and memorable. Unexpectedly, my best friend came up with an idea to visit her aunt who lives in Italy. So we decided to collect enough money and go there for three weeks.  
      
      The trip was something more similar to beach holidays than sightseeing, but I loved it so much, and I had a good rest. The place of our accommodation turned out to be a charming village located on a picturesque island called Sardinia. We resided alone in a huge, old Italian house. It was the first time when we were somewhere without parents, so we had to become more independent, starting from cooking and cleaning the house by ourselves. It was such great fun, but the fact that we were living there also had some disadvantages. For example, one day, there was a dangerous storm. We were forced to stay the whole day at home. During this time, we noticed that the roof and windows were leaking. We had to use every pot which we found to stop the flooding water. It cost us to stay the whole night being stressed and without sleep. Meantime we needed to clean up everything and check if the electrical system was still working. Despite this trouble which we had to put up with we were delighted because my friend’s aunt has a sports complex. It gave us an opportunity to try some extreme sports like kite-surfing, windsurfing, surfing etc. At first, I was a little scared because before our trip I had heard about some accidents caused by these activities, but finally, I didn’t get cold feet. During these sports, I was so excited, and I could feel free as a bird. The accompanying thrill was unforgettable. Now I can admit that I miss that pleasant feeling. Moreover, I met there a lot of wonderful people who were filled with passion for these sports and wanted to share with others which I admired a lot. Also, in return for our invitation, we were working in this sports club for the first week, so I had a chance to learn some basic phrases in Italian and learn how Italian daily life looks like.  
      
      That trip gave me a lot to think about. That’s why now I truly believe that travelling broadens our minds and sometimes it is a good idea to leave our daily life and explore the rest of the world.  `, src: [...imagesArray.italy]},
      {place: 'Crotia', continent: 'Europe', description: `Journey with surprises- Croatia  

      My adventures with travels around Europe began 7 years ago. Norway is the first country which I have visited. However, the most terrific travel was to Croatia. There were also a few surprises during this travel, but I will write about them later.  
      
      
      My family and I were travelling by car. Our first direction was Bosnia and Herzegovina, which is a small country located on Balkan Peninsula. We spent there about three days. Our first visited place was Kravica waterfalls. I was tickled pink because I was allowed to swim there. We also visited Medjugorie. Our next stop was Croatia. One day before our departure, my mum got an email. It turned out our accommodation booking was cancelled, but it didn't stop us from continuing our journey. We arrived in Croatia without any problems, and we managed to find accommodation. On the first day in Croatia, we went to see the colosseum in Pula. I recommend everybody visiting this place. Tickets were free, and the colosseum was very similar to Colosseum in Roma. Then we were sightseeing in the city, and finally, we went to the beach. People say that the sea in Croatia is warm and the sky is blue. It is definitely true. One day we decided to buy a cruise. The sky wasn’t blue, but the captain promised us that the weather would be better. In the begging everything was alright. We admired the stunning views from the deck. Suddenly, it started raining. The drizzle turned into torrential rain. Waves rocked our boat heavily. I was so scared. When I heard the thunder, I started crying. My parents and the others didn’t know what to do. Everybody was trying not to fall overboard. The captain was smoking a cigar, and he seemed to be nervous. Waves were getting higher and higher. Suddenly, the boat listed and every plate fell down from tables. People wanted to wear life jackets, but the crew didn’t give permission. Finally, we reached the shore safely. We were glad that the boat ride ended. The rest of our days in Croatia we spent at the beach.  After two weeks we came back home.  
      
      The whole journey was amazing, but I must admit that the adventure at the boat ride was the most dangerous situation in my life. What can I say more? Croatia is definitely worthwhile and beautiful. You must see this country by yourself and visit the Colosseum in Pula.`, src: [...imagesArray.crotiaTwo]},
      {place: 'France', continent: "Europe", description: `Hi everyone! 
      Last year I have been to France and I wanted to share my experiences with you.  If it had not been for my mother I am pretty sure I would not consider choosing this destination. Little did I know that this trip will turn out to be one of my favourites. Unfortunately, at first It seemed like a disaster. After getting off the plane we spent over two hours looking for our luggage, which as we later found out got lost while being transported from the plane to the airport. Fortunately the rest of our trip went just as we planned it. We ate some delicious croissants and a lot of different dishes from French cuisine. We were staying in Paris for one week, so we decided to make the most of this time. We went sightseeing every single day and we were admiring the architecture of France. Every single building there, at least these located in a city centre, seems really planned and beautifully made with all of these details.  People in Paris were also really decent and kind. This is a big city so there are a lot of people of different nationalities and cultures, which I loved. Summing up, I really hope one day I will be able to come back to France and maybe see a different part of this country.
      `, src: [...imagesArray.france]},
      {place: "Norway", continent: "Europe", description: `Hello Everyone!  

      I'm writing to describe my feelings after my travel to Norway. It was such an inspiring time.   
      
      I had never been travelling by plane before. Staying in the queue to having our luggage X-rayed was a bite stressful, but the view from the window while flying at an altitude of a few thousand meters was a great reward.   
      
      After landing in Oslo and spending there the whole day, we went to our destination. When we arrived, I was charmed. I was staying in a hut next to the forest.  On the loft were two comfortable bedrooms. On the ground there was a bit cluttered living room, equipped kitchen, larder, laundry room, and cosy porch. My mom said that it had been created to drink tea with mooses. The mountainous landscape with a small navy blue lake is believed to be the most picturesque view I have ever seen.  
      
      The next four days we spent exploring the local forest, meeting neighbours, shopping and mountain’s trips. In Jotunheimen we saw a glacier and lot’s of waterfalls. We even met reindeer breeders during traversing the winding roads, where every attempt to overtake other car was reckless. From time to time, we stopped to see runic stones. But the most breathtaking experience was still ahead of us. The day before homecoming, we took part in the sightseeing cruise on the same fjord, which was the inspiration for ”Frozen” animators. If I hadn’t seen that place, I wouldn’t have believed that so stunning views exist.  
      
      After that unusual adventure, we spent the evening with neighbours playing basketball and having a barbecue. While I was sitting on the hammock with my friend, we noticed that we had our lawn mowed by unexpected guests. There were three mooses fifteen meters from us. They must have come to say goodbye.  
      
      The holidays in touch with nature and picturesque views were so soothing. It enables me a real rest.`},
      {place: "England", continent:"Europe", description: `Hello everyone!  

      Today I would like to share with you something about my school trip to England. It was an unforgettable adventure which I will remember till the end of my life.   
      
      It was 3 years ago when I went to England with my previous class. Our destination was London. I was very excited about that trip because it was my biggest dream to visit this city.   
      
      We had to be at the airport early in the morning in order to check in. We had our luggage X-rayed and proceeded to our gate. After all the procedures, we finally took off. When we landed, the weather was awful. It was cloudy, rainy and cold. We weren’t expecting that kind of weather in London because it was in May. Our teacher who lived there 10 years was shocked too. But it didn’t really spoil our plans.  
      
      It took us about 3 hours to get to our B&B from the airport by taxi and check in. Although the weather wasn’t well, we went for a walk. Of course, I had my waterproof jacket, but it didn’t help me to stay dry. All of my clothes were wet, even my new trainers. All evening we were drying our clothes with a dryer. That was really funny!  
      
      Apart from that, I visited all the landmarks in London. We were on London Eye, and the views were terrific! We were walking a lot, but it was worth seeing a lot of corners of the city. We also visited The Madame Tussauds and Natural History Museum. It was very important for me to see the Greenwich meridian. We also went shopping in Primark where I bought lots of new clothes.  
      
      I really enjoyed these 5 days in London, especially because I was with my friends. I think it was my best school trip ever and if I could, I would go there once more.`}
    ]
    // const travelsToDisplay = travels.filter(travel => {
    //   return travel.place.toLocaleLowerCase().includes(this.state.inputValue.toLocaleLowerCase())
    // })
    // console.log(travelsToDisplay)
    // const travelSection = travelsToDisplay.map((travel, index) => {
    //   return <Travel data={travel} key={index} />
    // })
    let travelsToDisplay = [...travels];
    if (this.state.selectValue !== "All") {
      travelsToDisplay = travels.filter(travel => {
        return travel.continent === this.state.selectValue;
      })
    }

    const travelSection = travelsToDisplay.map((travel, index) => {
      return <Travel data={travel} key={index} />
    })
    return (
      <div className="App">
        <Header img={background} change={this.changeState} />
        <About />
        <div className="browser">
          <h2>Our travels</h2>
          <div className="select_container">
            {/* <input value={this.state.inputValue} onChange={this.handleInputChange} type="text" placeholder="Search..." /> */}
            {/* <select name="country_select" id="country_select">
              <option value="Polska">Polska</option>
              <option value="Chorwacja">Chorwacja</option>
              <option value="Hiszpania">Hiszpania</option>
              <option value="Włochy">Włochy</option>
              <option value="Szwecja">Szwecja</option>
              <option value="Francja">Francja</option>
              <option value="Norwegia">Norwegia</option>
              <option value="Wielka Brytania">Wielka Brytania</option>
              <option value="Polska">Polska</option>
              <option value="Ukraina">Ukraina</option>
              <option value="San Marino">San Marino</option>
              <option value="Portugalia">Portugalia</option>
              <option value="Wietnam">Wietnam</option>
              <option value="Turcja">Turcja</option>
              <option value="Zjednoczone Emiraty Arabskie">Zjednoczone Emiraty Arabskie</option>
              <option value="USA">USA</option>
              <option value="Republika Dominikany">Republika Dominikany</option>
              <option value="Egipt">Egipt</option>
            </select> */}
            <select name="continent_select" id="continent_select" calue={this.state.selectValue} onChange={this.handleSelect}>
              <option value="All">All</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>
        <section className="travels">
          {/* <Travel img={travels[0].src} /> */}
          {travelSection.length ? travelSection : <p className="error">We haven't been here yet :(</p>}
        </section>
        <footer className="footer">
          Blog 2D
            
        </footer>
      </div>
    );
  }
}

export default App;
