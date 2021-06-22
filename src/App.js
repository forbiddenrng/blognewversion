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
      {
        place: "Mallorca", continent: "Europe", description: `Hi guys! I don't know how about you, but I love travelling. Today I'm writing to tell you about my trip to Mallorca.   
      I went there with my family for a week during the last holidays. Firstly, I must say that we took luggage full of food because we supposed that everything cost an arm and a leg there. But at the airport, it turned out that our baggage was too heavy and, to avoid the excess luggage charge, we repacked it to our hand luggage. Finally, with my overhead compartment full of convenience food, we took off.   
      I customised our itinerary, and we went sightseeing a lot. The most remarkable place I've visited was Cap de Formentor. We got there by the narrow mountain road. The driver had to be very focused in order not to have a head-on collision. At the top, we admired stunning views. The landscape was mesmerising. I was astonished because I've never seen such a picturesque place. I was over the moon.  
      What's more, my aunt, who lives there, took us to the best local restaurant. I ordered paella, which is seafood with rice and a diversity of spices. I recommend this dish from traditional cuisine. All evening was eminent.  
      Also, I want to add that it was an adventure holiday for me. Besides enjoying sunbathing and being a typical holidaymaker, I've tried parasailing. It was a lifetime experience! I soared through the air at a considerable height. I was filled in with pure exhilaration. For sure, it was an unforgettable feeling.  
      That's all for today. Have you ever been to Mallorca? If not, I recommend visiting this destination. I am looking forward to your comments. See you!`, src: [...imagesArray.mallorca]
      },
      {
        place: 'Sweden', continent: 'Europe', description: `Hi everyone! I would like to tell you about my trip to Sweden.

      This year, my family and I decided to spend our holidays differently than usual. We generally went to the warm golden beaches of the Mediterranean and sunbathed in the sunshine. However, this year we were opting to spend our holidays actively. We aimed to visit Sweden by bike. We also decided not to create a detailed itinerary but to plan the trip on an ongoing basis.
      
      On the first Friday of July, we commuted to Gdynia, from where we took the ferry to Karlskrona. The next day we reached our destination. Before we set off on our bicycle trip, we secured our luggage on the carriers. Then we went on tour. During our excursion, we admired the stunning views of southern Sweden. However, not only did we be impressed by the extraordinariness of nature, but also the remarkable Swedish-style housing estate drawn our attention.
      
      While the earlier outing was easy, the return home caused us a lot of trouble. Initially, we had trouble finding our way to the port. If the departure of the ferry had not been delayed, we would have been late. Additionally, my sister almost fell overboard and miraculously avoided the accident. Moreover, my parents lost their boarding passes, so they couldn't enter their cabin. However, despite the unpleasantness, we arrived home safely.
      
      Never have I been on a combination of a voyage and a bicycle excursion before, and to be honest, it was an interesting experience. Therefore, I encourage you to spend your holiday in a way that you have never done before.`, src: [...imagesArray.sweden]
      },
      {
        place: 'Turkey', continent: 'Asia', description: `Hi everyone! Guess what!   

      Last summer my family decided to go on a trip to Turkey, exactly to Alanya for 7 days. We were very excited because it was our first time visiting that country.   
      
      At first, we had to go to the Warsaw Chopin Airport. We checked in, our luggage was taken, and we were ready to go. Unfortunately, our plane had some technical problems so we were forced to wait and we took off behind schedule.   
      
      Finally, after three hours we reached the destination. We checked in in a 4-star Hotel and started our vacation. We had a full board, suite and there were three swimming pools with slides. They were awesome!   
      
      We spent most of the time in the hotel. We had a lot of attractions, for example, aerobic or acrobatic performances. After dinner, we would go to the town and observe residents’ usual life. I love the specific vibe of this town because wherever you looked, you could see lots of small shops with clothes and with local food. My favourite delicacy was Lokum. It is sugar with starch gel.  If I lived there, I would eat it every day!  
      
      It was the best trip of my life!`, src: [...imagesArray.turkey]
      },
      {
        place: 'Croatia', continent: 'Europe', description: `Hi everyone,  

      I am writing this post to share with all of you my recent travel experience. To those who didn’t know, I have always dreamt about going to Croatia, and so my dream came true!  
      
      My journey began on the 19th of August. We headed to Rogoznica, a small but cozy town located in the South West of the country. A holiday resort ten minutes from the centre was booked by my parents. We gathered all unnecessary stuff and set off for our beach holidays.  
      
      No one expected that it would take us 24 hours straight to get there. But when we arrived the view was breathtaking. In the first seconds, I realized it was definitely worth the effort. You could see palm trees all over the town, the sun was gently heating our skins, and I swear I have never ever seen such a beautiful sky.   
      
      We had no intention of wasting any of our precious time, so even though it was the first day, we found a tour guide who took us on an orientation trip. He showed us every bit of mysterious and stunning views this town had to offer us. It turned out he kept the cherry on top for the next day.  
      
      As the sun rose on the second day, we were invited to see around a peculiar and amazing island. We crossed the sea on a sailing boat on which we were able to admire the charms of the town from another perspective. On this day, we also had a chance to go fishing and what I loved the most, diving. Adventure holidays are what I love the most, so every other day was different in its own way.  
      
      What I expected it to be before my arrival? Actually, everything that happened. I had never had such a good rest. I was amused with everything, and for sure, if I were asked where to go next holidays, I would pick Croatia again.   
      
      Share and comment, love you all! Till the next time, bye!`, src: [...imagesArray.crotia]
      },
      {
        place: 'Grand Canyon', continent: 'North America', description: `Hi guys! 
      I am writing this post to tell you all about my trip to the Grand Canyon. 
      From the very beginning of my trip, I had to face my biggest nightmare -packing. In order to get back to Poland, I had to take a plane, so I did my best to avoid excess luggage charges. We set off from Palestine, Texas, and it took us 3 days to finally reach our destination. Meanwhile, we stopped at Amarillo and Albuquerque to get some rest and sightseeing. As we crossed the border of Arizona, I got a feeling of excitement and fulfilment because seeing the Grand Canyon had always been my dream.  
      We checked into our hotel room and went to sleep early to be ready for a whole day of to-die-for views. Unfortunately, it turned out that my companion was more of a holidaymaker rather than a backpacking lover. Therefore, I am planning on coming back there with a group of my adventurous friends to spend a few days hiking and camping. 
      Besides this little disadvantage, this was the best trip of my life. My dreams finally came true. 
      While being on the top of the Canyon, I got emotional, and I cried my heart. I recommend this destination to everyone who loves nature and physical activity.  
       
      That’s all for today. I am looking forward to your comments.
      `, src: [...imagesArray.grandcanyon]
      },
      {
        place: 'Vietnam', continent: 'Asia', description: `A year ago, during winter break, I flew with my family to Vietnam. This was definitely one of the best travels but also experiences I’ve ever had in my whole life. And here’s why.   

      First of all, in Vietnam, I saw the most picturesque and stunning views. Rice fields in the mountains near the bamboo forest were really peaceful and worthwhile. Another seascape I would never forget is when we were kayaking in a bay surrounded by mogotes covered with tropical plants. But don’t forget to use insect repellent while going on hiking in this part of the world.   
      
      Now onto Vietnamese cuisine. Obviously, it is delicious. There is a variety of fresh products depending on which part of the country you’re in. Mouth-watering seafood on the coast, silky tofu in the mountains and of course omnipresent pho soup, spring rolls and ripe fruit. Just keep in mind that sanitary standards in Vietnam are very distinct from what we are used to in Europe, and eating on the street and sitting on a very small plastic chair or eating in a very cramped place is ordinary and common.   
      
      We spent most of our time there in the capital- Hanoi. And because of the upcoming Chinese New Year, the whole city was decorated with traditional ornaments. We were lucky enough to see the New Year’s Eve celebration and beautiful fireworks. There is just one thing you have to remember about being a pedestrian in Hanoi. There is no such thing as a crosswalk. You simply have to go with the flow and avoid cars while crossing the road.   
      
      Summing up, I enjoyed my travel very much. Now I would like to visit also other Asian countries. I can recommend going there to everyone. I hope with those depictions and little tips, you’d feel encouraged to visit Vietnam.`, src: [...imagesArray.vietnam]
      },
      {
        place: 'Italy', continent: "Europe", description: `Hi everyone!  

      Today, I’d like to write about the best holidays I have ever had. It was after my graduation from middle school. I had been dreaming about doing something unusual and memorable. Unexpectedly, my best friend came up with an idea to visit her aunt who lives in Italy. So we decided to collect enough money and go there for three weeks.  
      
      The trip was something more similar to beach holidays than sightseeing, but I loved it so much, and I had a good rest. The place of our accommodation turned out to be a charming village located on a picturesque island called Sardinia. We resided alone in a huge, old Italian house. It was the first time when we were somewhere without parents, so we had to become more independent, starting from cooking and cleaning the house by ourselves. It was such great fun, but the fact that we were living there also had some disadvantages. For example, one day, there was a dangerous storm. We were forced to stay the whole day at home. During this time, we noticed that the roof and windows were leaking. We had to use every pot which we found to stop the flooding water. It cost us to stay the whole night being stressed and without sleep. Meantime we needed to clean up everything and check if the electrical system was still working. Despite this trouble which we had to put up with we were delighted because my friend’s aunt has a sports complex. It gave us an opportunity to try some extreme sports like kite-surfing, windsurfing, surfing etc. At first, I was a little scared because before our trip I had heard about some accidents caused by these activities, but finally, I didn’t get cold feet. During these sports, I was so excited, and I could feel free as a bird. The accompanying thrill was unforgettable. Now I can admit that I miss that pleasant feeling. Moreover, I met there a lot of wonderful people who were filled with passion for these sports and wanted to share with others which I admired a lot. Also, in return for our invitation, we were working in this sports club for the first week, so I had a chance to learn some basic phrases in Italian and learn how Italian daily life looks like.  
      
      That trip gave me a lot to think about. That’s why now I truly believe that travelling broadens our minds and sometimes it is a good idea to leave our daily life and explore the rest of the world.  `, src: [...imagesArray.italy]
      },
      {
        place: 'Crotia', continent: 'Europe', description: `Journey with surprises- Croatia  

      My adventures with travels around Europe began 7 years ago. Norway is the first country which I have visited. However, the most terrific travel was to Croatia. There were also a few surprises during this travel, but I will write about them later.  
      
      
      My family and I were travelling by car. Our first direction was Bosnia and Herzegovina, which is a small country located on Balkan Peninsula. We spent there about three days. Our first visited place was Kravica waterfalls. I was tickled pink because I was allowed to swim there. We also visited Medjugorie. Our next stop was Croatia. One day before our departure, my mum got an email. It turned out our accommodation booking was cancelled, but it didn't stop us from continuing our journey. We arrived in Croatia without any problems, and we managed to find accommodation. On the first day in Croatia, we went to see the colosseum in Pula. I recommend everybody visiting this place. Tickets were free, and the colosseum was very similar to Colosseum in Roma. Then we were sightseeing in the city, and finally, we went to the beach. People say that the sea in Croatia is warm and the sky is blue. It is definitely true. One day we decided to buy a cruise. The sky wasn’t blue, but the captain promised us that the weather would be better. In the begging everything was alright. We admired the stunning views from the deck. Suddenly, it started raining. The drizzle turned into torrential rain. Waves rocked our boat heavily. I was so scared. When I heard the thunder, I started crying. My parents and the others didn’t know what to do. Everybody was trying not to fall overboard. The captain was smoking a cigar, and he seemed to be nervous. Waves were getting higher and higher. Suddenly, the boat listed and every plate fell down from tables. People wanted to wear life jackets, but the crew didn’t give permission. Finally, we reached the shore safely. We were glad that the boat ride ended. The rest of our days in Croatia we spent at the beach.  After two weeks we came back home.  
      
      The whole journey was amazing, but I must admit that the adventure at the boat ride was the most dangerous situation in my life. What can I say more? Croatia is definitely worthwhile and beautiful. You must see this country by yourself and visit the Colosseum in Pula.`, src: [...imagesArray.crotiaTwo]
      },
      {
        place: 'France', continent: "Europe", description: `Hi everyone! 
      Last year I have been to France and I wanted to share my experiences with you.  If it had not been for my mother I am pretty sure I would not consider choosing this destination. Little did I know that this trip will turn out to be one of my favourites. Unfortunately, at first It seemed like a disaster. After getting off the plane we spent over two hours looking for our luggage, which as we later found out got lost while being transported from the plane to the airport. Fortunately the rest of our trip went just as we planned it. We ate some delicious croissants and a lot of different dishes from French cuisine. We were staying in Paris for one week, so we decided to make the most of this time. We went sightseeing every single day and we were admiring the architecture of France. Every single building there, at least these located in a city centre, seems really planned and beautifully made with all of these details.  People in Paris were also really decent and kind. This is a big city so there are a lot of people of different nationalities and cultures, which I loved. Summing up, I really hope one day I will be able to come back to France and maybe see a different part of this country.
      `, src: [...imagesArray.france]
      },
      {
        place: "Norway", continent: "Europe", description: `Hello Everyone!  

      I'm writing to describe my feelings after my travel to Norway. It was such an inspiring time.   
      
      I had never been travelling by plane before. Staying in the queue to having our luggage X-rayed was a bite stressful, but the view from the window while flying at an altitude of a few thousand meters was a great reward.   
      
      After landing in Oslo and spending there the whole day, we went to our destination. When we arrived, I was charmed. I was staying in a hut next to the forest.  On the loft were two comfortable bedrooms. On the ground there was a bit cluttered living room, equipped kitchen, larder, laundry room, and cosy porch. My mom said that it had been created to drink tea with mooses. The mountainous landscape with a small navy blue lake is believed to be the most picturesque view I have ever seen.  
      
      The next four days we spent exploring the local forest, meeting neighbours, shopping and mountain’s trips. In Jotunheimen we saw a glacier and lot’s of waterfalls. We even met reindeer breeders during traversing the winding roads, where every attempt to overtake other car was reckless. From time to time, we stopped to see runic stones. But the most breathtaking experience was still ahead of us. The day before homecoming, we took part in the sightseeing cruise on the same fjord, which was the inspiration for ”Frozen” animators. If I hadn’t seen that place, I wouldn’t have believed that so stunning views exist.  
      
      After that unusual adventure, we spent the evening with neighbours playing basketball and having a barbecue. While I was sitting on the hammock with my friend, we noticed that we had our lawn mowed by unexpected guests. There were three mooses fifteen meters from us. They must have come to say goodbye.  
      
      The holidays in touch with nature and picturesque views were so soothing. It enables me a real rest.`},
      {
        place: "England", continent: "Europe", description: `Hello everyone!  

      Today I would like to share with you something about my school trip to England. It was an unforgettable adventure which I will remember till the end of my life.   
      
      It was 3 years ago when I went to England with my previous class. Our destination was London. I was very excited about that trip because it was my biggest dream to visit this city.   
      
      We had to be at the airport early in the morning in order to check in. We had our luggage X-rayed and proceeded to our gate. After all the procedures, we finally took off. When we landed, the weather was awful. It was cloudy, rainy and cold. We weren’t expecting that kind of weather in London because it was in May. Our teacher who lived there 10 years was shocked too. But it didn’t really spoil our plans.  
      
      It took us about 3 hours to get to our B&B from the airport by taxi and check in. Although the weather wasn’t well, we went for a walk. Of course, I had my waterproof jacket, but it didn’t help me to stay dry. All of my clothes were wet, even my new trainers. All evening we were drying our clothes with a dryer. That was really funny!  
      
      Apart from that, I visited all the landmarks in London. We were on London Eye, and the views were terrific! We were walking a lot, but it was worth seeing a lot of corners of the city. We also visited The Madame Tussauds and Natural History Museum. It was very important for me to see the Greenwich meridian. We also went shopping in Primark where I bought lots of new clothes.  
      
      I really enjoyed these 5 days in London, especially because I was with my friends. I think it was my best school trip ever and if I could, I would go there once more.`
      },
      {
        place: "Italy", continent: "Europe", description: `Last summer I was in Italy with my family. We came there to relax after the hard school year. We chose Italy because of the food. The most famous and delicious Italian snack is bruschetta. It is some kind of sandwich which is crispy. It’s served as a toast with fresh tomatoes, olive oil and herbs. In Italy, tomatoes are tender and scrumptious. I was eating them all the time! 

      The first place which we visited was Milano. We arrived there by plane and stayed for four days. We saw Duomo St. Maria Nascente. The Cathedral was huge and stunning. There were many gorgeous sculptures and paintings. Most of them were masterpieces.  
      
      We also visited many parks. Nature was engaging and beautiful. The weather was perfect for us. We were going for long walks every day. I spent a lot of time outside reading books. The weather and the surrounding nature made reading books even more enjoyable. People were kind and helpful. They were always smiling and asking how we were. I felt like we were in a different reality.   
      
      I am really looking forward to visiting Italy again. I remember those holidays with a smile, and I also miss that climate, atmosphere and surrounding peace. It was a memorable trip. It was an unforgettable time.`},
      {
        place: "Spain", continent: "Europe", description: `I want to tell you about my trip to Spain where we visited Valencia and Andalucía. Our rented villa was located in Torrevieja, about 50km from Alicante. It’s a small village, so all we were doing was chilling at the beach. The beaches were nearly empty and quite decent looking, which made us enjoy them even more. Quite an exception if you live on the Polish coast. Of course, that is how we spent only three days of the whole trip because then we visited more interesting places.   

        Moving forward, on day 4, we got in the car and drove all the way to Alhambra in Andalucía. There is an old, fortified palace where the last Muslims in Spain were hiding back in the 15th century. The whole palace is located at the top of the hill, making it hard for intruders to break in. Besides its defensive values, Alhambra is really beautiful on the inside. For instance, it has a stunning garden where everyone can find a bit of peace. I did like it a lot.  
        
        On the other day, instead of going west, we directed our car north to Valencia, where we saw the biggest oceanarium in Europe as well as the local zoo. The oceanarium was so huge that we only visited a quarter of it. There were tons of amazing fish and sea animals such as sharks, jellyfish or stingrays. Apparently, the best attraction of them was the dolphin show where the dolphins performed some acrobatics and tricks. It was an amazing experience. In the second part of the day, we went to the zoo, and I have to say the best exposition there was at the very beginning. I’m talking about the lemur enclosure where you were walking on the path, and lemurs were jumping all around you. It was something magical in the fact that you were this close to these quite exotic animals. The whole zoo seemed to show the animals real close to you. The last thing I want to mention about Valencia is the food. We tried famous paella, which is a meal based on rice and seafood seasoned with saffron. It turned out to be just okay, nothing fancy but what did steal my heart was churros. Many people think that it is a Mexican dessert when the truth is that churros (in the form known today) are from Spain. I do love them so much and do recommend them strongly.   
        
        That is all I wanted to share about my Spanish vacation. It is a warm memory for me, and I hope you enjoyed reading about it as well. `, src: [...imagesArray.spain]
      },
      { place: 'Croatia', continent: "Europe", description: `Five years ago I travelled to Croatia. We went on one of the Croatian islands, and we were there for around two weeks. One day we went on a beach to chill out in the sun and water, but a few hours later, we were hungry so we mobilized ourselves to go and look for some food. After few minutes of walking, we found a well-looking restaurant so we decided to eat there. Everyone ordered something different, but I went for pancakes with fresh fruit and sweet melted chocolate. My dish came after around 15 minutes. It looked delicious and mouth-watering. The fruit were so appealing, and they had a beautiful bright and juicy colour. The taste was very sweet and fresh, and I think that I have never eaten as good fruit as them in my life. The chocolate was sweet but not too much, and it was melted a bit but not burned. The pancakes weren't soggy or too tough. Quite the opposite, they were a little bit crunchy and soft as a cloud. If I could go back there now, I would totally go and eat them again and again. So if any of you ever come across that place, I would recommend pancakes in a small restaurant in a small city near the sea in Croatia.` },
      {
        place: 'Norway', continent: 'Europe', description: `From Poland to Norway  

      I, with my family and acquaintances, went to the port of Gdynia to take a ship to Sweden. When we arrived there, we were driving the whole day to our home in Norway. We were staying in a small town - Vagsli.  
      
      There were so many beautiful places in Norway that it's hard for me to describe them all. The first place we visited was a glacier. Driving up this glacier by car was one of the most stressful situations in my life. It was very high, the road was very narrow, and there was a chasm behind it.   
      
      After spending a few days in our beautiful house, we went south to see one of the greatest attractions in Norway, but in the meantime, we spent a night in a really beautiful place. 
      
      Preikestolen   
      
      It is one of the most popular places in Norway. Preikestolen is a Norwegian name, and it is commonly called a "shelf". Getting to the destination isn't too long, but it takes a lot of strength. Unfortunately, when we wanted to start climbing, we were caught in the rain, and we had to eat lunch in quite interesting circumstances.  
      
      Gaustatoppen  
      
      Our next stop was the Norwegian peak – Gaustatoppen. It was much more difficult than the aforementioned Preikestolen. Reaching this top is very difficult but rewarding. The views from the top were worth seeing.  
      
      Our trip was not only about trips to the mountains, but we also went to visit one of the largest cities in Norway - Bergen. There are no ugly places in Norway so, as you can guess, it was another beautiful place. There were a lot of tourists there, but it did not prevent us from exploring the city.  
      
      These are just a few of the many truly amazing places in Norway. It is worth adding that this is a country that can be visited by car. You have to look out of the window all the time so as not to miss the beautiful views. I remember when we entered Norway, and we started to admire them, and my dad said, "Keep calm, it's nothing amazing, the most beautiful views are yet to come," and he was right. It was amazing how many beautiful places you could see along the way.  
      
      Food in Norway   
      
      My dad had already visited Norway several times on a business trip, so he knew how expensive the country was. When we left Gdynia, we had two cars fully packed with food. I remember that we went to a little city and we bought there three ice creams and cola, and we paid about 50 zł for it. One of the things we bought most often was bread. There was the best bread I had ever eaten, and when we bought this bread in a local shop. It had been eaten before we got home. After arriving in Norway, it is obligatory to try the local bread.  
      
      Being in Norway, we could not eat in restaurants often because we were constantly travelling and we rarely visited big cities. But it was not a problem for us because we preferred to eat lunch outside, for example, having a picnic or a barbecue by the lake. I am personally the biggest fan of Chinese soup, brought straight from Poland. Whenever there was an opportunity, I ate it, and I think I have never eaten it in a more beautiful place.   
      
      I think Norway is the best place I have ever been to,  and I highly recommend it to everyone. I will always remember the place, and I hope to be able to go there in the coming holidays.
      `, src: [...imagesArray.norway]
      },
      {
        place: "Croatia", continent: "Europe", description: `Today, I am writing about my favourite Mediterranean country – Croatia – the land of beautiful long beaches, fresh air breeze and crystal-clear seawater.   

      First of all, its capital is Zagreb. Secondly, Croatia is composed of many islands like Brać, Hvar, Vis and more. On all of the islands, you can visit many picturesque places like Roman churches or old towns with historical past. There is also a lot to do for water sports fans. You can dive with marine life, go kitesurfing or windsurfing or just relax and swim in the sea of your dreams.  
      
      In Croatia, it is always warm, so ice cream stalls are practically everywhere. And when it comes to food, this country always offers fresh seafood. In almost every restaurant, you can order various species of fish, shrimps or mussels. There are many olive orchards in there, so you can taste them with natural olive oil. When you are in Croatia, you must try tropical fruit, e.g. mango, watermelon or pineapple.  
      
      When you are going for a walk, passing through cobbled streets, except for sightseeing, you can easily encounter a wild cat or even a group of three or four. The inhabitants usually give food to them so they can survive in the hot climate.  
      
      One of the greatest must-sees in Croatia is Plitvice Lakes National Park. There are numerous waterfalls and turquoise lakes there, rare animals and the smell of many exotic flowers make you feel nature with every sense.  
      
      I think the experience of being in Croatia is one of the most unique and unforgettable you could ever imagine. I recommend going there for longer than a week because it may not be enough to enjoy everything there.`},
      {
        place: 'Sandomierz', continent: "Europe", description: `Place: Sandomierz  

      Sandomierz is a small city located in the south of Poland. It’s one of the oldest cities in Poland with a rich history. I go there regularly because it’s where my family comes from. Sandomierz has many places that are worth seeing. One of them is the Castle. It’s built near the Vistula River on a scarp. This stronghold was erected in the 14th century by King Casimir the Great. The second place that is a must-see is The Church of St. James. It’s an example of early Dominican architecture in Poland. It’s the oldest church in Sandomierz, and it’s almost one thousand years old, which makes it one of the oldest churches in Poland. In my view, Opatowska Gate is also a place worth visiting. On top of the gate, there is a beautiful view of the Old Town. In Sandomierz, people still cook traditional Polish cuisine. On Christmas Eve, all dishes like dumplings, borsch, fish are prepared using rapeseed oil. That makes this region specific because it’s not popular in other Polish cities. This city is mainly known for the TV series “Ojciec Mateusz”. There are special souvenir shops dedicated to the main character. If you are interested in history and Polish culture, you should visit Sandomierz. There are dozens of fascinating places and monuments that are definitely worth seeing.   `, src: [...imagesArray.sandomierz]
      },
      {
        place: 'Croatia', continent: "Europe", description: `Hi everyone,  

      At first, sorry I haven’t written anything, but I was in Croatia, and today I want to tell you something about it. It was one of the best trips I’ve ever been on, but the way to get to Croatia wasn’t easy. I had to do a coronavirus test, which isn’t very pleasant. When I got my negative result, I could finally start planning everything. The cheapest option was to go there by car. I was going to Kastela (a city in Croatia, my trip destination) for something like 30 hours!! Have you ever driven 30 hours with one break only? It was horrible, but now I know that it was worth it.  
      
      Anyway, after this very, very long trip, when I literally fell out of the car, I saw something gorgeous. This view was eye-catching and amazing, but I had to find my hotel and take a nap. When I got up and ate breakfast, I started sightseeing. The first point on my tour list was Split – one of the biggest cities in the south of Croatia.  
      
      When the taxi driver told me that we are in port in Split, I saw a beautiful landscape. This place looks like paradise for a sailor — a lot of expensive yachts, a huge marina and a crowd of pretty girls. There I met my old friend, Michał. He told me that he was working for a businessman who was the owner of the marina. After quite nice small talk, he took me to the restaurant. There he ordered special food which is available only in Croatia. When we got our meal, he told me that it is his own recipe. It looked like normal Polish dumplings, but when I tried it, I felt pizza flavour. Michał told me that that was pizza closed in dumpling cake. He invented it with his two favourite dishes – Hawaiian pizza and dumplings with meat. This little idea became one of the best dishes I’ve ever eaten! After lunch, I came back to Kastela and took a walk with Michał, who came with me from Split. He offered that he can become my tour guide for this week. I told him this was that a fantastic idea.  
      
      That was a short story about my best trip, and I’m sure I will remember it for a very, very long time. That’s all for today. Please like and comment on my blog, it’s important to me. I will add some pictures from my trip below. For more, you have to wait. See ya!`, src: [...imagesArray.croatiaThree]
      },
      {
        place: "Italy", continent: "Europe", description: `A few years ago, I travelled to a small town in Italy (near the Swiss border), Livigno. I came there on a ski holiday, and I consider it as my favourite place to spend winter in. It lays in a valley, surrounded by mountains – the sights are just beautiful. It’s quite hard to get in or out – there are only 4 roads. Two of them are only open during summer. Another one is a tunnel that connects the valley with Switzerland. It’s not wide enough to be open for both directions at the same time, so you can only use it at certain hours. The fourth road leads through the mountains and is hard to keep in good condition because of frequent and heavy snowfall. Both of them can be closed due to avalanches – it isn’t dangerous for tourists because the weather conditions are constantly being monitored.  

      Most of the slopes are connected, so you don’t even have to take your skis off to move to another place. Thanks to that, it’s way harder to get bored of skiing in a certain spot. If you’re not fond of skiing, you can always try other sports, like cross-country skiing or snowshoeing. There are also a lot of opportunities to free ski.  
      
      In one place, there is a reindeer farm. It’s not very big, but it still brings smiles on everyone’s faces.  
      
      Italian cuisine is my favourite one. The best dish, in my opinion, is lasagne. It brings together the famous pasta, delicious cheese and tomato sauce, which keeps it fresh. We also can’t forget about the dessert – tiramisu. It contains mouth-watering mascarpone cream, biscuits and coffee. Thanks to the last ingredient (and dark cocoa that lays on top of the cake), the overall taste is not sickly-sweet, rather scrumptious.   
      
      An interesting thing about this town is that it was basically closed from the outer world until 1960’, so the government made it a duty-free zone in order to make people want to live there.   
      
      It is definitely a place I would recommend everyone to go to for their winter holidays. The views are breath-taking, and the slopes are great`, src: [...imagesArray.italyTwo]
      },
      {
        place: "Poland", continent: "Europe", description: `Today I want to tell you something about Poland. In words of introduction, I can say that Poland is located in central Europe by the Baltic sea. The weather in Poland is quite okay because we don't have hot summers and frosty winters. This place is diverse geographically-there is a beautiful beach, plains, fields, lakes on the north and mountains in the south.  

      There aren't many dishes worth trying in Polish cuisine. The most popular ones everyone knows in Poland are dumplings. They are really scrumptious! They can be made of cottage cheese, meat, cabbage and mushrooms and even with fruit. The most popular soup is chicken soup and borscht. The last one is made from beetroot, and not everyone likes it, but I'm pretty sure you will like the first one. It is difficult to describe the taste, but I can tell you that it is savoury and delicious.  
      
      Now something more interesting. This country is good for tourists who want to explore some old buildings and for people who just want to relax or spend time outside. We have a lot of breathtaking cities, for example, Kraków. I don't have many photos from places I want to tell you about, but you can see some from Kraków. 
      
      As you can see the buildings are of old architecture. Everything looks like small castles. There are paved streets where sometimes horses ride. A bit like in a fairy tale. Imagine that you wake up looking out the window, and you see the colourful old town where everything is perfect, people are talking to each other, horses are pulling some carriages. You can feel happiness in the air!  
      
      Near Kraków, there is a salt mine, "Wieliczka."   
      
      I don't like going to museums, but I really enjoyed this trip. This is definitely the place for people who like to walk a lot because firstly you have to go 380 stairs downstairs and then there is a 3,5km track, but it's worth it. You will hear how important salt was for the Polish economy, how it was mined, how the mine was made, you will see chapels there. It's incredible how huge it is.  
      
      I was also in glassworks in Krosno. You can see various glass masterpieces there. Everything is handmade! I was there with the whole group at sports camp, and we could see how the glass was created in such kind of shapes. One of us could even try to do it. It looked really difficult. I don't think I would be able to do anything with it. `, src: [...imagesArray.poland]
      },
      {
        place: "Santorini", continent: "Europe", description: `GREEK ISLAND- SANTORINI  
      1. GENERAL INFORMATION  
      
      Santorini is a beautiful small, volcanic Greek Island located in the Mediterranean Sea. The area of this island is 76.19 km2. Santorini is located in the Mediterranean climate zone. It is an island where we can be bothered by the wind because it is a windy island. Most tourists come here in summer, although the season begins in April and lasts more or less until September.  
      
      2. Beaches  
      
      There are plenty of beautiful and diverse beaches in Santorini. Some of them are secret and, therefore, more unique. The most populated beaches on this island are the Red, White and Black beaches. To get to the Red Beach, we have two options: buy a boat ride (it is quite time-consuming) or walk on a dangerous, steep slope (the signs alerting you to the possibility of losing your life are scary). However, you can reach the White Beach only by water transport, it is located in a remote area, so there are fewer sunbathers on this beach and more beautiful views.  
      
      3. recommended places  
      
      I am sure that you have seen photos of beautiful white buildings with blue roofs and accents (e.g. in the form of window frames) on the slopes by the water in captivating colour. Santorini is a place where such beautiful houses can be found at every step. The most beautiful places that are worth paying attention to during your stay are the capital of this island, Fira, and Oia, where everyone is waiting for beautiful and atmospheric sunsets.  
      
      4. food  
      
      The regional cuisine of Santorini fits perfectly into my preferences. There is a wide variety when it comes to food. We can find there delicious seafood (served not only in elegant restaurants but also in food trucks), equally tasty gyros, tzatziki with bread for an appetizer, cold and delicate Greek yoghurts, to which we choose toppings at the counter (e.g. fruit, cookies or also chocolate sauces). On hot days, this form of dessert was even better and more refreshing than ordinary ice cream. `, src: [...imagesArray.santorini]
      },
      {
        place: "Dominican Republic ", continent: "North America", description: `The Dominican Republic  

      The Dominican Republic is located in the Caribbean Sea and shares one island with Haiti. The capital of the Dominican Republic is Santo Domingo, but today I will tell you mostly about Punta Cana, its surroundings and its neighbouring islands.  
      
      This country is a perfect place to relax, explore, experience a bit of entertainment and different culture. People are very helpful and kind. The cuisine is quite varied because you can eat a steak straight from America, delicious seafood, fish or exotic, mouth-watering fruit. In addition, you can drink there freshly made local coffee and cocoa, which is delicious.  
      
      In Punta Cana, there are beautiful beaches with millions of palm trees that are very eye-catching. If that was not enough for someone, you could go to Saona Island. You will not find so many palm trees anywhere. The sand there is white, and the water is crystal turquoise.   
      
      There is another island noteworthy, Samana Island. There you can take a walk in the jungle, take a bath in the waterfall and go to the beach.  
      
      Next to it is smaller, but not worse, Bacardi Island. I had never seen such a wonderful colour of water anywhere, and I tasted Pina Colada straight from a pineapple there.   
      
      It is also worth taking a Jeep trip to Salvaleon De Higuey, where you can swim in the cenote, see local performances, taste pineapple wine and see what the real life of residents looks like.  
      
      What caught my attention is that the airport in Punta Cana is thatched, there are yellow American buses with locals and tourists in the streets, and you can try crisps in a variety of strange flavours. I had the opportunity to try the lime flavour, and they were quite specific.  
      
      What I was able to tell is only 1% of the wonderful places that can be seen in this country. I highly recommend the Dominican Republic because everyone will find something for themselves there.   `, src: [...imagesArray.dominicanRepublic]
      },
      {
        place: "Lviv", continent: "Europe", description: `One of my most cherished memories was waking up on a plane while descending to Lviv international airport. The fields around the city looked like mountains because of the really low clouds. 

      Only once we got really close to the city we could start seeing little hamlets and later giant communist blocks. We got out of the enormous, brand new airport and were welcomed by a familiar sight, old commie blocks wherever we looked. The contrast was amazing, a colossal new airport and old Krushchevkas right across the street. We had to find a way to get to our hotel. We decided to take a tram and oh, was I excited about this. In Poland nowadays, we mostly have modern public transport, but in Lviv, they haven't modernised it all yet. The tram we were travelling on was the legendary KTM-5, which served all over The Soviet Union. It was loud, it smelled really bad, the interior was really dirty, but I enjoyed using it, it was exciting.   
      
      When we got out of the tram, we were astounded by the city centre's architecture. You had these beautiful tenement houses with golden ornaments, with communist "squares" wedged in between them. We decided to get some breakfast because we arrived really early (it was about 8 am by the time we got out of the train). We ate in a small café, the food was alright, but the view there was astonishing, well at least to me : ). `, src: [...imagesArray.lviv]
      },
      { place: "Spain", continent: "Europe", description: `Spain is a country in Southwestern Europe with some territory across the Atlantic Ocean.  The capital and the biggest city of Spain is Madrid. It is located in the centre of the country. Spain also has fourteen islands. The biggest is Majorca, it is 3600 square kilometres and has a lot of nice beaches to stay at. The weather there is very nice almost all year round, the average temperature is about 30 Celsius, sometimes even 40, and on average there are fewer than 60 rainy days per year. There are a lot of places that are worth seeing, but my favourite ones are: Sagrada Familia, it is one of the biggest churches in the world, and Park Güell. There is also a lot of museums and aquariums, like the Museum of Picasso or the aquarium in Valencia. Spanish cuisine is heavily based on seafood, which is available in the waters around the country. Spanish cuisine divides into three main parts: Mediterranean Spain, Inner Spain and Atlantic Spain. My personal favourite dish there is seafood paella, which is made on a special pan with rice and other ingredients like shrimps and squids. I would recommend this destination to people who like seafood and relax in the sun. `, src: [...imagesArray.spainTwo] },
      {
        place: 'Dubai', continent: 'Asia', description: `Dubai. When you think of that name, what thoughts come to your mind? An ultra-luxurious lifestyle, a great number of gigantic skyscrapers or a massive oil producer? Well, all of them describe this city perfectly. Furthermore, there are plenty of other facts that Dubai is admired and famous for.  

      Dubai is UAE’s largest city with a total metropolitan area population of 5.6m citizens. The entire country’s capital is located in Abu Dhabi. Dubai is the capital of the Emirate of Dubai, considered as the most liberal and pro-western place in the Middle East.  It’s one of the world’s fastest-growing cities. Along with findings oil deposits in the late 60s, the city started to develop very rapidly. Though the rise of the city was initially based on the oil industry, with passing years, its contribution decreased significantly, as today it represents less than 5% of its total GDP. The authorities put the emphasis on financial services and tourism, and these have created Dubai so unique.   
      
      Iconic transportation  
      
      When you arrive for the first time at Dubai Int’l Airport, the world’s 3rd busiest airport, you will see a huge number of Airbuses A380. Emirates, which is considered the best airline in the world, operates almost half of the global fleet of this world’s biggest passenger plane. That makes a tremendous impression, doesn’t it?  
      
      8-line-highways and other large streets of this city are fully filled with top cars. Hundreds and hundreds of Rolls-Royces, Bentleys, Lamborghinis or Ferraris that you will never see anywhere else. During my first hours in that city, I saw more of these luxurious masterpieces than through my whole life. On top of everything, Dubai Police is known for its special vehicles such as Bugatti Veyron (!).  
      
      Yet, there is another field of transportation that Dubai leads in. The Dubai Metro. Trains actually go all the way long on the ground, but what is unique is the fact they are completely automatic and driverless. Wow!  
      
      Overwhelming architecture and fascinating tourist attractions  
      
      What really makes Dubai distinctive is its architecture. As for January 2021, there were 215 skyscrapers with a total height of over 150m (world’s 4th), and another 46 were being built (world’s 2nd). However, there is one building that is more impressive than others. The Burj Khalifa- towering over the city super- tall skyscraper. With a total height of 828m and 163 floors, it’s the tallest construction ever made by a human being. In the interior, there are apartments, restaurants, hotels, and on the 144th floor, there is the At the Top Sky Observatory. Located in Dubai Downtown, it is adjacent to The Dubai Mall, the world’s biggest mall by total area. It includes over 1,200 shops and is visited annually by 84m customers. In front of the mall, there is a fountain system, The Dubai Fountain, that is able to shoot water up to 152m. If you are into shopping, there is another special mall in Dubai. The Mall of the Emirates. Almost 700 retail outlets and Ski Dubai… an indoor ski resort with 2,200 m2 of the ski area. That’s truly unbelievable.  
      
      Beating records and being at the top is Dubai’s flagship motto. Achieving this couldn’t be possible without being the most luxurious. The Burj Al-Arab- considered to be famous as the world’s only 7-star hotel is located on an artificial island. It was designed to look like a ship’s sail. And it does so. Talking about hotels, I have to mention Atlantis The Palm, which is another showcase of this magnificent city. Built on an artificial island, The Palm Jumeirah, that looks like a real palm. The whole resort also includes an aquapark and a shopping centre. Connection with that island is provided by either a monorail or a partly underwater highway.   
      
      Another district that is worth visiting is Dubai Marina. The place where thousands of yachts are parked in an artificial canal is able to home over 120,000 people in residential towers. You feel as if you were in a weird combination of Venice and Manhattan.   
      
      Last but not least. The Dubai Frame. Frankly, when I saw it for the first time, I had no idea what it could be, for the reason that it wasn’t finished yet. Nowadays, I know it is the world’s biggest frame (150m x 96m) and a real architectural masterpiece, just like the rest of Dubai.   
      
      Unique culture   
      
      Unlike other Arabic cities, Dubai is an extremely ethnically-diverse place. As of 2013, only approximately 15% of its population was made up of UAE’s nationals, with Indians and Pakistani as leading ethnic groups. Westerners make up about 10-15%, and ca. 5% of all are Chinese. This causes the interweaving of cultures from all around the globe. The same is true about Dubai’s cuisine. We can find there lots of top-quality Michelin-star Italian or French restaurants, as well as cheap Chinese or Indian street food. Traditional Arabic food we can simply recognize by the smell. A variety of spices, such as cinnamon, cardamom, cumin, saffron or turmeric, makes it so special. An aroma of them that is present in lots of shops is just incredible.   
      
      Yet the best way to buy them is a traditional Arabic marketplace, called souk. There is plenty of different traditional merchandise, e.g. food, clothes, spices or even gold (Golden Souk). The most famous one is located in Deira. This district of Dubai is absolutely different from the rest of ‘known Dubai’. It used to be its main trade centre, but with time it lost its importance and now is rather considered as a poorer part of the city. We can find them very interesting Old Town of Dubai and some museums. However, visiting it was a really eye-opening experience and I strongly recommend you go there. This shows the unknown truth about that city.  
      
      Scheduled for October 2020, Dubai EXPO was supposed to be the first World EXPO to take place in the Middle East. Unfortunately, due to the COVID-19 pandemic, the whole event was cancelled and is likely to take place in October 2021.  
      
      The trip to Dubai was the best trip of my entire life. I strongly recommend you visiting this absolutely fantastic city. `},
      {
        place: "San Marino", continent: "Europe", description: `San Marino  

      In the summer of 2019, I was on my holidays in northern Italy. There were about 50 kilometres to San Marino, so we decided to spend the whole day there, and I think that it was a great choice. We needed to wake up earlier than usually– at 8 o'clock. The way from our hotel was quite pleasant and delightful. On the left side, we could see vineyards and on the right side rise up the Apennines. Closer to our destination, the mountains got higher. When we arrived, we had a little difficulty with finding a parking space. It was 10 o'clock, so if you would like to visit San Marino, remember to set off earlier than we did. Alright, now I can tell you something more about this place. San Marino is one of the smallest countries in the world, and its area is only 61.2 km2. They have their own flag, emblem and anthem. They live off the tourism.   
      
      Our tour of this beautiful place started at 575 m above sea level. Our destination was the peak of Monte Titano. In the beginning, you can feel its atmosphere – narrow streets, many people, 25 degrees heat and breathtaking landscape. It was truly amazing! On both sides of the streets, there were many shops with souvenirs, jewellery, clothes and some restaurants. If we got higher, there were fewer shops and more monuments to admire. On the peak, there was the most awaited part of the tour. Now we were 150m above sea level higher than we had been at the beginning: many viewpoints, the big abyss on the left side and the Apennines on the right side. The central point of San Marino is a bridge above the abyss from which you can see the medieval tower – Guaita and view of everything that is around this country. I could see the Adriatic Sea and the Italian city Rimini because the weather was quite good. It is definitely worth seeing with your own eyes because it can't be described.   
      
      People in San Marino are different, but I noticed that they are all helpful, modest and pleasant. The funny thing is that we met a Pole in a shop. We wanted to buy Amaretto because it is a dainty of this region. He advised us which was the fake and which was the true Amaretto made in San Marino. He said that he had emigrated from Poland 25 years before with his girlfriend. He was only 19! They wanted to have a better life than in communistic Poland. He planned to come back to his homeland after a few years, but he liked to live there, and he decided to settle down. He also told us that he often missed Poland and in retirement, he would like to visit our country. It was a great surprise, and I think I will remember it for the rest of my life.   
      
      Even though San Marino is a small country, it has a lot to offer. I totally recommend visiting this place. If you are somewhere near, it is necessary to drop by. In my opinion, the coolest thing is that you can see everything in just one day, and you will be probably impressed like I am to this day. `, src: [...imagesArray.sanMarino]
      }
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
          {travelSection.length ? travelSection : <p className="error">We haven't been there yet :(</p>}
        </section>
        <footer className="footer">
          Blog Mat Geo Ang

        </footer>
      </div>
    );
  }
}

export default App;
