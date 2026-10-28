const scenariosData = {
  en: {
    "8-12": {
           easy: [
        {
          author: "Funny Animals",
          handle: "@funny_animals",
          verified: false,
          text: "A video shows a dog talking like a human.",
          answer: "fake",
          explanation: "Videos can be edited or made for fun. Look for reliable evidence before believing what you see."
        },
        {
          author: "School News",
          handle: "@school_news",
          verified: true,
          text: "Your school announces a holiday on its official page.",
          answer: "real",
          explanation: "An announcement on the school's genuine official page is a good source. Check that the page really belongs to your school."
        },
        {
          author: "Free Game Coins",
          handle: "@free_game_coins",
          verified: false,
          text: "A website says you can get free game coins by sharing your password.",
          answer: "fake",
          explanation: "Never share your password to get a reward. Unknown websites may try to steal your game account."
        },
        {
          author: "Plant World",
          handle: "@plant_world",
          verified: false,
          text: "A post says plants need sunlight and water to grow.",
          answer: "real",
          explanation: "Plants need water and light to grow. You can learn more from a trusted science book or educational website."
        },
        {
          author: "Dinosaur News",
          handle: "@dinosaur_news",
          verified: false,
          text: "A post says dinosaurs are living in the city today.",
          answer: "fake",
          explanation: "Non-bird dinosaurs became extinct millions of years ago. Check surprising claims with reliable science sources."
        },
        {
          author: "Weather Watch",
          handle: "@weather_watch",
          verified: true,
          text: "A trusted weather service says it will rain tomorrow.",
          answer: "real",
          explanation: "A trusted weather service is a suitable place to check forecasts. Remember that weather predictions can change."
        },
        {
          author: "Candy Secrets",
          handle: "@candy_secrets",
          verified: false,
          text: "A message says eating candy makes you smarter in one day.",
          answer: "fake",
          explanation: "There is no good evidence that candy makes someone smarter in one day. Check health claims with reliable sources."
        },
        {
          author: "Bee Helpers",
          handle: "@bee_helpers",
          verified: false,
          text: "A post says bees help many flowers grow by carrying pollen.",
          answer: "real",
          explanation: "Bees carry pollen between flowers, helping many plants reproduce. This is a well-known science fact."
        },
        {
          author: "Lucky Winner",
          handle: "@lucky_winner",
          verified: false,
          text: "A stranger online says you won a prize you never entered for.",
          answer: "fake",
          explanation: "Unexpected prize messages can be scams. Do not click unknown links or share private information."
        },
        {
          author: "Space Kids",
          handle: "@space_kids",
          verified: false,
          text: "A post says Earth travels around the Sun.",
          answer: "real",
          explanation: "Earth travels around the Sun. You can confirm this in a trusted science book or educational website."
        },
        {
          author: "Goldfish Facts",
          handle: "@goldfish_facts",
          verified: false,
          text: "A post says goldfish can live without water.",
          answer: "fake",
          explanation: "Goldfish are fish and need water to survive. Check animal facts using reliable educational sources."
        },
        {
          author: "Healthy Habits",
          handle: "@healthy_habits",
          verified: false,
          text: "A post says washing your hands helps remove germs.",
          answer: "real",
          explanation: "Washing your hands with soap and water helps remove germs and lower the chance of getting sick."
        },
        {
          author: "Amazing Cats",
          handle: "@amazing_cats",
          verified: false,
          text: "A picture shows a cat with five wings and claims it is a real animal.",
          answer: "fake",
          explanation: "The picture may have been edited or created digitally. Look for reliable evidence before believing unusual images."
        },
        {
          author: "Healthy Living",
          handle: "@healthy_living",
          verified: false,
          text: "A post says drinking water helps your body stay healthy.",
          answer: "real",
          explanation: "Water helps your body work properly. Trusted health and science sources can explain why staying hydrated matters."
        },
        {
          author: "School Bus to Mars",
          handle: "@space_travel",
          verified: false,
          text: "A message says you can travel to Mars by school bus tomorrow.",
          answer: "fake",
          explanation: "School buses cannot travel to Mars. Check extraordinary claims with reliable science sources."
        },
        {
          author: "Moon Facts",
          handle: "@moon_facts",
          verified: false,
          text: "A post says the Moon is a natural satellite of Earth.",
          answer: "real",
          explanation: "The Moon is Earth's natural satellite. You can confirm this fact using a trusted science resource."
        },
        {
          author: "Fame in One Day",
          handle: "@instant_fame",
          verified: false,
          text: "A website promises you will become famous after drawing one picture.",
          answer: "fake",
          explanation: "A website cannot guarantee that you will become famous. Be careful with promises that sound too good to be true."
        },
        {
          author: "Active Kids",
          handle: "@active_kids",
          verified: false,
          text: "A post says exercise helps keep your body strong and healthy.",
          answer: "real",
          explanation: "Regular physical activity supports health and helps build strong muscles and bones."
        },
        {
          author: "Magic Ice Cream",
          handle: "@magic_ice_cream",
          verified: false,
          text: "A post says ice cream never melts, even in a hot oven.",
          answer: "fake",
          explanation: "Ice cream melts when it gets warm. Videos and posts can be edited, so check surprising claims carefully."
        },
        {
          author: "Bird Watch",
          handle: "@bird_watch",
          verified: false,
          text: "A post says some birds build nests to lay their eggs.",
          answer: "real",
          explanation: "Many birds build nests where they lay their eggs. You can learn about different birds from trusted nature resources."
        }
      ], 

      medium: [
  {
    author: "Amazing Science",
    handle: "@amazing_science",
    verified: true,
    text: "A popular science page says a glass of water left in sunlight can become hot.",
    answer: "real",
    explanation: "Sunlight can warm water. But a verified badge alone does not prove every post is correct, so check the information and source."
  },
  {
    author: "School Surprise",
    handle: "@school_surprise",
    verified: false,
    text: "A screenshot says school is cancelled tomorrow, but the school website says nothing about it.",
    answer: "fake",
    explanation: "A screenshot can be old or edited. Check the school's official page or ask a teacher before believing it."
  },
  {
    author: "Wildlife Clips",
    handle: "@wildlife_clips",
    verified: false,
    text: "A video shows a bear riding a bicycle, and the caption says it happened in a nearby park.",
    answer: "fake",
    explanation: "A video may be edited or taken from somewhere else. Look for the original video and reliable reports before trusting the caption."
  },
  {
    author: "Space Today",
    handle: "@space_today",
    verified: true,
    text: "A space agency shares a photo of a planet, but the colors were changed to show details that are hard to see.",
    answer: "real",
    explanation: "Scientists sometimes use changed colors to make details easier to study. The image should explain how it was processed."
  },
  {
    author: "The Prize Box",
    handle: "@the_prize_box",
    verified: false,
    text: "A message says you won a tablet, but you must enter your parent's bank details to claim it.",
    answer: "fake",
    explanation: "This is a warning sign of a scam. Never enter private or payment information on an unknown website."
  },
  {
    author: "Animal Helpers",
    handle: "@animal_helpers",
    verified: false,
    text: "A post says touching every baby bird you find will help it survive.",
    answer: "fake",
    explanation: "Touching a baby bird is not automatically helpful. If you find one, ask a trusted adult or a wildlife rescue service what to do."
  },
  {
    author: "History Corner",
    handle: "@history_corner",
    verified: false,
    text: "A museum website says an ancient object is more than 2,000 years old and explains how experts studied it.",
    answer: "real",
    explanation: "Museums may use research and scientific methods to estimate an object's age. Check whether the museum and its explanation are trustworthy."
  },
  {
    author: "Magic Homework",
    handle: "@magic_homework",
    verified: false,
    text: "An app promises to give every child full marks without reading or understanding the questions.",
    answer: "fake",
    explanation: "No app can honestly guarantee full marks on every assignment. Be careful when a claim promises perfect results without effort."
  },
  {
    author: "Ocean Watch",
    handle: "@ocean_watch",
    verified: false,
    text: "A post says plastic waste can harm sea animals if they swallow it.",
    answer: "real",
    explanation: "Sea animals can mistake plastic for food or become trapped in it. Reliable environmental sources explain these risks."
  },
  {
    author: "Famous Inventor",
    handle: "@famous_inventor",
    verified: false,
    text: "A picture shows a famous inventor holding a smartphone, and the caption says the photo is from 1800.",
    answer: "fake",
    explanation: "Smartphones did not exist in 1800. The picture may be edited, so compare it with trustworthy historical information."
  },
  {
    author: "Healthy Kids",
    handle: "@healthy_kids",
    verified: true,
    text: "A health website says children need different amounts of sleep as they grow older.",
    answer: "real",
    explanation: "Sleep needs change with age. Check whether the advice comes from a reliable health organization."
  },
  {
    author: "Secret Game Trick",
    handle: "@secret_game_trick",
    verified: false,
    text: "A player says a secret code will unlock every paid item in a game, but nobody can show proof.",
    answer: "fake",
    explanation: "A claim without reliable proof should not be trusted. Check the game's official website and never share your password."
  },
  {
    author: "Weather Photos",
    handle: "@weather_photos",
    verified: false,
    text: "A photo shows a huge storm, but the person posting it does not say where or when it happened.",
    answer: "fake",
    explanation: "The storm might be real, but the post does not prove it happened nearby or today. Check the original source, date, and location."
  },
  {
    author: "Math Club",
    handle: "@math_club",
    verified: false,
    text: "A post says that if you multiply any number by zero, the answer is zero.",
    answer: "real",
    explanation: "This is a basic math rule. You can test it with different numbers and confirm it in a trusted math resource."
  },
  {
    author: "Amazing Food",
    handle: "@amazing_food",
    verified: false,
    text: "A video claims a normal banana becomes poisonous just because it touches a metal spoon.",
    answer: "fake",
    explanation: "The claim gives no reliable reason for the banana to become poisonous. Check food-safety information from trusted sources."
  },
  {
    author: "Local Animal Center",
    handle: "@local_animal_center",
    verified: false,
    text: "An animal center posts a notice asking people to bring clean towels for rescued animals.",
    answer: "real",
    explanation: "This could be a genuine request, but check the center's official contact details before donating anything."
  },
  {
    author: "Instant Millionaire",
    handle: "@instant_millionaire",
    verified: false,
    text: "A website says every child who shares its link with ten friends will receive a huge amount of money.",
    answer: "fake",
    explanation: "Promises of easy money in exchange for sharing links are suspicious. Do not spread the message without checking it."
  },
  {
    author: "Plant Detectives",
    handle: "@plant_detectives",
    verified: false,
    text: "A post says two plants of the same type can grow differently because they get different amounts of light and water.",
    answer: "real",
    explanation: "Growing conditions affect plants. This is a reasonable science claim, and trusted plant-care or science resources can confirm it."
  },
  {
    author: "The Old Map",
    handle: "@the_old_map",
    verified: false,
    text: "A post shows an old map and claims it proves a hidden city exists, but gives no location or other evidence.",
    answer: "fake",
    explanation: "An old map alone may not prove the claim. Look for the map's origin and independent evidence from reliable sources."
  },
  {
    author: "Digital Art Lab",
    handle: "@digital_art_lab",
    verified: false,
    text: "An image shows a purple elephant, and the artist clearly labels it as digital artwork.",
    answer: "real",
    explanation: "The artwork really exists, but that does not mean purple elephants exist in real life. Check exactly what the post claims."
  }
],

   hard: [
  {
    author: "Art Club",
    handle: "@art_club",
    verified: false,
    text: "A child wins an art contest. A post says the child copied the picture, but shows no proof.",
    answer: "fake",
    explanation: "The post has no proof. Do not believe a claim about someone just because you read it online."
  },
  {
    author: "School News",
    handle: "@school_news",
    verified: false,
    text: "A wallet is lost at school. A post blames a child just because they were near the classroom door.",
    answer: "fake",
    explanation: "Being near the door does not prove the child took the wallet. We need facts, not guesses."
  },
  {
    author: "Pet Care",
    handle: "@pet_care",
    verified: false,
    text: "A video shows a happy dog. The post says the dog never needs to visit a vet.",
    answer: "fake",
    explanation: "A happy dog may still be sick. One video cannot tell us everything about an animal's health."
  },
  {
    author: "Magic Tricks",
    handle: "@magic_tricks",
    verified: false,
    text: "A magician makes a coin disappear and says science proves that coins can vanish.",
    answer: "fake",
    explanation: "A magic trick is made to surprise us. It is not proof that a coin can really disappear."
  },
  {
    author: "Junior Chef",
    handle: "@junior_chef",
    verified: false,
    text: "A cooking video says a cake recipe always works, but the cook changes the amounts each time.",
    answer: "fake",
    explanation: "Changing the amounts can change the cake. The video does not prove that the recipe always works."
  },
  {
    author: "Football Fans",
    handle: "@football_fans",
    verified: true,
    text: "A famous football player likes a game. A post says this proves the game makes children smarter.",
    answer: "fake",
    explanation: "A famous person cannot prove that a game makes us smarter. We need facts and research."
  },
  {
    author: "School Garden",
    handle: "@school_garden",
    verified: false,
    text: "Two plants get different amounts of water. A child says this proves that music helps plants grow.",
    answer: "fake",
    explanation: "The plants got different amounts of water. This test cannot prove that music helps plants grow."
  },
  {
    author: "Book Lovers",
    handle: "@book_lovers",
    verified: false,
    text: "A book is based on a true story. A post says every event in the book really happened.",
    answer: "fake",
    explanation: "A story can use real events and add made-up parts. Check the facts before believing every detail."
  },
  {
    author: "Space Kids",
    handle: "@space_kids",
    verified: false,
    text: "A child sees the Moon during the day and says all pictures of the Moon at night are fake.",
    answer: "fake",
    explanation: "We can see the Moon during the day and at night. Seeing it in the day does not make other pictures fake."
  },
  {
    author: "Online Quiz",
    handle: "@online_quiz",
    verified: false,
    text: "A quiz says five correct answers prove that a child is the smartest student in school.",
    answer: "fake",
    explanation: "Five questions cannot measure everything a child knows. A short quiz cannot prove who is the smartest."
  },
  {
    author: "Green Team",
    handle: "@green_team",
    verified: false,
    text: "A bottle has a green label and a tree picture. The company says this proves the bottle is good for Earth.",
    answer: "fake",
    explanation: "A green label does not prove that a product helps Earth. We need more facts about the bottle."
  },
  {
    author: "Birthday News",
    handle: "@birthday_news",
    verified: false,
    text: "A message says a party starts at 4 PM, but the invitation says 6 PM.",
    answer: "fake",
    explanation: "The two messages do not match. Ask the person who planned the party before deciding."
  },
  {
    author: "Animal Quiz",
    handle: "@animal_quiz",
    verified: false,
    text: "A quiz says bats are blind because they use sound to find their way.",
    answer: "fake",
    explanation: "Bats can see. Many bats also use sound to help them find things in the dark."
  },
  {
    author: "Toy Reviews",
    handle: "@toy_reviews",
    verified: false,
    text: "An adult builds a toy very quickly. A post says every child will find the toy easy to build.",
    answer: "fake",
    explanation: "One adult's experience does not prove that every child will find it easy. People have different skills."
  },
  {
    author: "Treasure Hunters",
    handle: "@treasure_hunters",
    verified: false,
    text: "A map has a red X in a park. A post says real treasure is buried there but shows no proof.",
    answer: "fake",
    explanation: "A red X does not prove that treasure is there. We need real proof before believing the claim."
  },
  {
    author: "Music Kids",
    handle: "@music_kids",
    verified: false,
    text: "A post says one song will help every child remember a whole lesson perfectly.",
    answer: "fake",
    explanation: "Music may help some people study, but it cannot promise perfect memory for everyone."
  },
  {
    author: "Lost and Found",
    handle: "@lost_and_found",
    verified: false,
    text: "A blue pencil case is found. A post says it belongs to a child just because that child likes blue.",
    answer: "fake",
    explanation: "Liking blue does not prove who owns the pencil case. Look for a name or ask a teacher."
  },
  {
    author: "Weather Kids",
    handle: "@weather_kids",
    verified: false,
    text: "A child guesses that it will rain. It rains once, so the child says all their guesses are always right.",
    answer: "fake",
    explanation: "One right guess does not mean every guess will be right. We need to check many guesses."
  },
  {
    author: "Dinosaur Museum",
    handle: "@dinosaur_museum",
    verified: false,
    text: "A museum uses copies of some dinosaur bones. A post says this proves the whole dinosaur is fake.",
    answer: "fake",
    explanation: "Museums sometimes use copies to protect real bones. This does not mean the dinosaur was not real."
  },
  {
    author: "Online Challenges",
    handle: "@online_challenges",
    verified: false,
    text: "A website tells children to hide an online challenge from their parents to prove they are brave.",
    answer: "fake",
    explanation: "This is a warning sign. Never do something unsafe just because a website tells you to keep it secret."
  }
],


    },
    "13-17": {
     easy: [
  {
    author: "Health Check",
    handle: "@health_check",
    verified: true,
    text: "A post says a drink is healthy because it has the word 'natural' on the label.",
    answer: "fake",
    explanation: "The word 'natural' does not prove that a drink is healthy. Check its ingredients and reliable health information."
  },
  {
    author: "Study Smarter",
    handle: "@study_smarter",
    verified: false,
    text: "A student studies for one hour using a new app and gets a high mark. They claim the app always improves grades.",
    answer: "fake",
    explanation: "One result does not prove the app caused the high mark. The student may have improved for other reasons."
  },
  {
    author: "Money Tips",
    handle: "@money_tips",
    verified: false,
    text: "A website promises to double your money in three days with no risk.",
    answer: "fake",
    explanation: "Fast, guaranteed money with no risk is a warning sign. Check who runs the website and never trust promises without proof."
  },
  {
    author: "Climate Facts",
    handle: "@climate_facts",
    verified: false,
    text: "A post says global warming is not real because one winter was colder than usual.",
    answer: "fake",
    explanation: "One cold winter does not show the long-term climate trend. Weather changes from day to day, while climate is studied over many years."
  },
  {
    author: "Movie Updates",
    handle: "@movie_updates",
    verified: false,
    text: "A poster says a famous actor will join a new movie, but the studio has not announced it.",
    answer: "fake",
    explanation: "A poster can be made by a fan. Check the movie studio's official announcements before believing the news."
  },
  {
    author: "Tech Review",
    handle: "@tech_review",
    verified: true,
    text: "A phone review gives a high score but says the reviewer received the phone for free from the company.",
    answer: "real",
    explanation: "The review can be real, but the free phone is important information. Consider possible bias and compare other reviews."
  },
  {
    author: "Breaking News",
    handle: "@breaking_news",
    verified: false,
    text: "A headline says a new law has passed, but the article only says that people are discussing the idea.",
    answer: "fake",
    explanation: "Discussing a law does not mean it has passed. Read the full article and check official information."
  },
  {
    author: "Fitness World",
    handle: "@fitness_world",
    verified: false,
    text: "A post says a famous athlete uses a certain shoe, so the shoe must be the best for everyone.",
    answer: "fake",
    explanation: "One athlete's choice does not prove that a product is best for everyone. People have different needs."
  },
  {
    author: "History Uncovered",
    handle: "@history_uncovered",
    verified: false,
    text: "A post quotes a famous historical person, but no book, letter, or reliable source is given.",
    answer: "fake",
    explanation: "The quote may be wrongly linked to that person. Look for a reliable source that shows where the words came from."
  },
  {
    author: "Food Watch",
    handle: "@food_watch",
    verified: false,
    text: "A video shows bread with mold and claims that all bread from the same brand is unsafe.",
    answer: "fake",
    explanation: "One piece of bread cannot prove that every product from the brand is unsafe. Check reliable reports and food safety advice."
  },
  {
    author: "Job Offers",
    handle: "@job_offers",
    verified: false,
    text: "An online job asks people to pay a fee before they can learn what the job is.",
    answer: "fake",
    explanation: "Asking for money before giving clear job details can be a scam warning. Check the company through trusted sources."
  },
  {
    author: "Science Daily",
    handle: "@science_daily",
    verified: false,
    text: "A post says a small study of ten people proves that a new method works for everyone.",
    answer: "fake",
    explanation: "A study of ten people is limited. More research may be needed before making a claim about everyone."
  },
  {
    author: "Travel Alerts",
    handle: "@travel_alerts",
    verified: false,
    text: "A travel post says a city is closed to all visitors, but the only evidence is a photo of one closed street.",
    answer: "fake",
    explanation: "One closed street does not prove that a whole city is closed. Check current information from trusted local sources."
  },
  {
    author: "Online Privacy",
    handle: "@online_privacy",
    verified: false,
    text: "A quiz asks for your birthday, school name, and home address before showing your score.",
    answer: "fake",
    explanation: "A simple quiz should not need your home address. Avoid sharing private information with unknown websites."
  },
  {
    author: "Art News",
    handle: "@art_news",
    verified: false,
    text: "A digital picture is shared as a real photograph, but the artist's page says it was made with editing tools.",
    answer: "fake",
    explanation: "The picture exists, but calling it an unedited photograph is misleading. Check the original creator's description."
  },
  {
    author: "Sports Report",
    handle: "@sports_report",
    verified: false,
    text: "A post says a team won a match, but the score shown in the same post proves the other team won.",
    answer: "fake",
    explanation: "The headline and score do not agree. Check the official match result before sharing the post."
  },
  {
    author: "Eco News",
    handle: "@eco_news",
    verified: false,
    text: "A company says its product creates no pollution, but gives no information about how it is made.",
    answer: "fake",
    explanation: "Making a product can also affect the environment. A strong claim needs evidence about more than the final product."
  },
  {
    author: "Language Learning",
    handle: "@language_learning",
    verified: false,
    text: "An app claims users can become fluent in a new language in two days by playing one game.",
    answer: "fake",
    explanation: "Learning a language takes time and practice. A game may help, but it cannot promise fluency in two days."
  },
  {
    author: "Public Opinion",
    handle: "@public_opinion",
    verified: false,
    text: "A poll says 90% of people support an idea, but only 20 people answered it on one small page.",
    answer: "real",
    explanation: "The poll may really show 90% of its 20 answers. But that small group may not represent the views of most people."
  },
  {
    author: "Digital Safety",
    handle: "@digital_safety",
    verified: true,
    text: "A website uses a secure connection, so a post claims every offer on it must be honest.",
    answer: "fake",
    explanation: "A secure connection protects data while it travels. It does not prove that a website or its offers are honest."
  }
],

   medium: [
  {
    author: "The Research Room",
    handle: "@research_room",
    verified: false,
    text: "A report says students who listen to music get higher grades. But it only studied students who already had high grades.",
    answer: "fake",
    explanation: "The report does not prove that music caused the high grades. The students may have done well for other reasons."
  },
  {
    author: "The City Watch",
    handle: "@city_watch",
    verified: false,
    text: "A post says crime doubled this year. The number went from 2 cases last year to 4 this year.",
    answer: "real",
    explanation: "The number did double, but the total is still small. A large percentage change can hide a small real change."
  },
  {
    author: "The Job Guide",
    handle: "@job_guide",
    verified: false,
    text: "A company says 95% of its workers are happy, but only 20 workers answered its survey.",
    answer: "real",
    explanation: "The result may be correct for those 20 workers, but they may not represent everyone in the company."
  },
  {
    author: "The Photo Files",
    handle: "@photo_files",
    verified: false,
    text: "A photo of a flood is real, but it was taken five years ago and is shared as news from today.",
    answer: "fake",
    explanation: "The photo is real, but the date is misleading. Always check when and where an image was first shared."
  },
  {
    author: "The Shopping Test",
    handle: "@shopping_test",
    verified: false,
    text: "A shop raises a price from $50 to $100, then offers a 50% discount and says the item is a special deal.",
    answer: "real",
    explanation: "The discount brings the price back to $50. The offer sounds special, but the final price is the same as before."
  },
  {
    author: "The Charity Report",
    handle: "@charity_report",
    verified: false,
    text: "A charity says it collected $10,000 for families, but gives no report showing how the money was used.",
    answer: "fake",
    explanation: "The money may have been collected, but there is no proof here that it reached the families. Check the charity's records before trusting that claim."
  },
  {
    author: "The Sports Lab",
    handle: "@sports_lab",
    verified: false,
    text: "A player scores more goals after changing shoes. The brand says this proves its shoes make every player better.",
    answer: "fake",
    explanation: "One player's results do not prove the shoes caused the change. Practice, skill, and other factors may explain the result."
  },
  {
    author: "The App Review",
    handle: "@app_review",
    verified: true,
    text: "An app has thousands of five-star reviews, but many reviews use the same words and were posted on the same day.",
    answer: "fake",
    explanation: "The reviews may not all be independent or honest. Similar reviews posted together are a reason to check further."
  },
  {
    author: "The School Survey",
    handle: "@school_survey",
    verified: false,
    text: "A survey asks only students who love school whether school should have longer hours. Most say yes.",
    answer: "real",
    explanation: "The result may describe the students who answered, but the group leaves out students who may feel differently."
  },
  {
    author: "The Science Desk",
    handle: "@science_desk",
    verified: false,
    text: "A study finds that people who eat breakfast often get better marks. The post says breakfast is the only reason they do well.",
    answer: "fake",
    explanation: "The study shows a link, not proof that breakfast is the only cause. Sleep, study time, and other factors may matter too."
  },
  {
    author: "The Map Check",
    handle: "@map_check",
    verified: false,
    text: "A map shows that one country looks much larger than another, but the map uses a design that changes how sizes appear.",
    answer: "real",
    explanation: "Some map designs change the way land sizes look. A map can be useful but still give a wrong idea about size."
  },
  {
    author: "The Expert Panel",
    handle: "@expert_panel",
    verified: true,
    text: "A video calls someone an expert, but the person gives advice about a subject they have never studied.",
    answer: "fake",
    explanation: "A title or a verified badge does not prove that someone knows every subject. Check their real experience in that field."
  },
  {
    author: "The Book Review",
    handle: "@book_review",
    verified: false,
    text: "A book gets one bad review, so a post says the book is badly written and nobody should read it.",
    answer: "fake",
    explanation: "One person's opinion cannot prove that a book is bad for everyone. Read different reviews and decide for yourself."
  },
  {
    author: "The Election Poll",
    handle: "@election_poll",
    verified: false,
    text: "An online poll says one candidate will win because 80% of the website's visitors support them.",
    answer: "fake",
    explanation: "The visitors may not represent all voters. The poll cannot prove who will win an election."
  },
  {
    author: "The Animal Study",
    handle: "@animal_study",
    verified: false,
    text: "A medicine helps ten animals in a test. A post says it is now proven safe for all humans.",
    answer: "fake",
    explanation: "A test on animals does not prove that a medicine is safe for humans. More research and proper testing are needed."
  },
  {
    author: "The Privacy Check",
    handle: "@privacy_check",
    verified: false,
    text: "A free game asks for access to contacts and messages, even though it only needs to show a puzzle.",
    answer: "fake",
    explanation: "The game may be asking for more information than it needs. Check its permissions and avoid sharing private data without a clear reason."
  },
  {
    author: "The Work Report",
    handle: "@work_report",
    verified: false,
    text: "A company says workers became more productive after a new rule, but it also hired more workers that month.",
    answer: "fake",
    explanation: "The report does not show that the new rule caused the change. Hiring more workers may also explain the result."
  },
  {
    author: "The Food Label",
    handle: "@food_label",
    verified: false,
    text: "A snack says '30% less sugar' on the package, but it does not say what product it is being compared with.",
    answer: "real",
    explanation: "The label may be true, but the missing comparison makes it hard to understand. Check what the snack is being compared with."
  },
  {
    author: "The History Archive",
    handle: "@history_archive",
    verified: false,
    text: "Two history books give different dates for an event. A post says this proves that the event never happened.",
    answer: "fake",
    explanation: "Different dates do not prove that an event was invented. Check other records and see why the books disagree."
  },
  {
    author: "The Online Course",
    handle: "@online_course",
    verified: false,
    text: "A course says 1,000 people signed up, then claims that all 1,000 people became successful.",
    answer: "fake",
    explanation: "Signing up does not prove that people finished the course or became successful. The claim needs results, not just signup numbers."
  }
],

     hard: [
  {
    author: "The Missing Painting",
    handle: "@missing_painting",
    verified: false,
    text: "A museum says a painting was stolen on Monday. A guard says it was there on Tuesday, but the photo has no date.",
    answer: "fake",
    explanation: "The facts do not prove when the painting disappeared. The photo has no date, so the story needs more evidence."
  },
  {
    author: "The Island Project",
    handle: "@island_project",
    verified: false,
    text: "A team says its new island can stop floods. Its test worked in calm water, but no one tested it during a storm.",
    answer: "fake",
    explanation: "The test does not prove the island can stop floods during a storm. The team needs to test it in harder conditions."
  },
  {
    author: "The Memory Test",
    handle: "@memory_test",
    verified: false,
    text: "A memory app says it improves memory. Users who stopped using it had lower scores, but they also stopped practicing.",
    answer: "fake",
    explanation: "The results do not prove that stopping the app caused the lower scores. Stopping practice may also explain the change."
  },
  {
    author: "The Space Signal",
    handle: "@space_signal",
    verified: false,
    text: "A radio telescope finds a strange signal from space. A post says this proves aliens sent a message.",
    answer: "fake",
    explanation: "A strange signal alone does not prove that aliens sent it. Scientists must check other possible causes first."
  },
  {
    author: "The Water Test",
    handle: "@water_test",
    verified: false,
    text: "A filter makes dirty water look clear. A video says the water is now safe to drink without any tests.",
    answer: "fake",
    explanation: "Clear water can still contain harmful germs or chemicals. It needs proper safety tests before anyone drinks it."
  },
  {
    author: "The Robot Judge",
    handle: "@robot_judge",
    verified: false,
    text: "A robot chooses the best student for a prize. It gives higher scores to students from one school, but no one checks why.",
    answer: "fake",
    explanation: "The scores may be unfair or affected by the data used to train the robot. Someone must check how it makes decisions."
  },
  {
    author: "The Ancient Letter",
    handle: "@ancient_letter",
    verified: false,
    text: "A letter has an old date and an old name. A seller says this proves it was written by a famous king.",
    answer: "fake",
    explanation: "An old date and name do not prove who wrote the letter. Experts need to check its age, writing, and history."
  },
  {
    author: "The Forest Count",
    handle: "@forest_count",
    verified: false,
    text: "A report says a forest has more trees this year. It counted a larger area than it did last year.",
    answer: "fake",
    explanation: "The two counts do not cover the same area. We cannot tell if the forest gained trees without comparing equal areas."
  },
  {
    author: "The Court File",
    handle: "@court_file",
    verified: false,
    text: "A person was accused of a crime. A post says the person is guilty because the police questioned them.",
    answer: "fake",
    explanation: "Being questioned does not prove guilt. An accusation must be checked through evidence and a fair legal process."
  },
  {
    author: "The Game Experiment",
    handle: "@game_experiment",
    verified: false,
    text: "Players using a new game plan won more matches. But the other team had its best player missing each time.",
    answer: "fake",
    explanation: "The missing player may have affected the results. The test does not show that the new plan caused the wins."
  },
  {
    author: "The Power Meter",
    handle: "@power_meter",
    verified: false,
    text: "A machine uses less power in one test. The company says it will save every home money, but electricity prices differ.",
    answer: "fake",
    explanation: "Using less power may help, but savings depend on use, prices, and other costs. One test cannot prove the same result for every home."
  },
  {
    author: "The Language Map",
    handle: "@language_map",
    verified: false,
    text: "A map shows that two nearby towns use different words. A post says people in one town speak the language wrongly.",
    answer: "fake",
    explanation: "People can use different local words and accents. A map of language differences does not prove that one group speaks wrongly."
  },
  {
    author: "The Safe Bridge",
    handle: "@safe_bridge",
    verified: false,
    text: "A new bridge held ten heavy trucks in a test. The builder says it is safe for any weight.",
    answer: "fake",
    explanation: "Passing one test does not prove that a bridge can hold any weight. Safety needs clear limits and many checks."
  },
  {
    author: "The Dream Study",
    handle: "@dream_study",
    verified: false,
    text: "Many people dream about falling. A post says this proves all people have the same hidden fear.",
    answer: "fake",
    explanation: "Having a similar dream does not prove that everyone has the same fear. Dreams can have many causes and meanings."
  },
  {
    author: "The Food Machine",
    handle: "@food_machine",
    verified: false,
    text: "A machine says a food sample is safe. The worker tested only one sample from a box of one thousand.",
    answer: "fake",
    explanation: "One sample may not show what is in the whole box. More careful testing may be needed to check the other items."
  },
  {
    author: "The Lost Ship",
    handle: "@lost_ship",
    verified: false,
    text: "A ship disappeared long ago. A new map shows where it may have sunk, and a post says the treasure is certainly there.",
    answer: "fake",
    explanation: "A map can suggest a possible location, but it does not prove the treasure is there. The claim needs direct evidence."
  },
  {
    author: "The Test Score",
    handle: "@test_score",
    verified: false,
    text: "A school changes its exam. Scores rise, and the school says its new teaching method caused the improvement.",
    answer: "fake",
    explanation: "The new exam may have been easier. Scores from different tests cannot be compared fairly without checking the test difficulty."
  },
  {
    author: "The Animal Tracker",
    handle: "@animal_tracker",
    verified: false,
    text: "A tracker finds no signs of a rare animal for a week. A report says the animal no longer exists in the forest.",
    answer: "fake",
    explanation: "Not finding an animal does not prove it is gone. It may be hard to see or may live in another part of the forest."
  },
  {
    author: "The Secret Formula",
    handle: "@secret_formula",
    verified: false,
    text: "A company says its secret formula works better than every other product, but it will not share any test results.",
    answer: "fake",
    explanation: "Keeping a formula secret does not prove it works. Without reliable test results, people cannot check the company's claim."
  },
  {
    author: "The Time Machine",
    handle: "@time_machine",
    verified: false,
    text: "A video shows a clock moving backward. The creator says it proves time travel is possible, but the video may be edited.",
    answer: "fake",
    explanation: "A video can be changed or made as a trick. It does not prove time travel is possible without strong, repeatable evidence."
  }
],
    }
  },

 
  ar: {
    "8-12": {
      easy: [
        {
          author: "مكافآت الألعاب",
          handle: "@free_game_rewards",
          verified: false,
          text: "مبروك! كسبت 1000 عملة مجانية في اللعبة. اضغط على الرابط واكتب كلمة المرور لتحصل عليها.",
          answer: "fake",
          explanation: "المكافآت المجانية التي تطلب كلمة المرور قد تكون خدعة. لا تشارك كلمة المرور من خلال رابط مجهول."
        },
        {
          author: "أخبار المدرسة",
          handle: "@school_news",
          verified: true,
          text: "سيُقام معرض العلوم في المدرسة الخميس القادم. راجع إعلان المدرسة الرسمي لمعرفة التفاصيل.",
          answer: "real",
          explanation: "الرسالة توجهك إلى إعلان المدرسة بدلًا من طلب معلوماتك الخاصة. تحقق دائمًا من المصدر الأصلي."
        },
        {
          author: "لاعب مجهول",
          handle: "@pro_player",
          verified: false,
          text: "أقدر أديك شكلًا نادرًا في اللعبة. ابعتلي بيانات تسجيل الدخول لحسابك الأول.",
          answer: "fake",
          explanation: "طلب بيانات تسجيل الدخول قد يكون محاولة لسرقة حسابك. لا تشاركها مع أي شخص."
        }
      ],
      medium: [
        {
          author: "مركز الجوائز",
          handle: "@winner_center",
          verified: false,
          text: "تم اختيارك لجائزة خاصة. ابعت اسمك بالكامل وعنوان بيتك واسم مدرستك النهارده.",
          answer: "fake",
          explanation: "الجائزة غير المتوقعة التي تطلب بيانات شخصية حساسة أمر مريب. تحقق من الجهة بمساعدة شخص بالغ تثق به."
        },
        {
          author: "تحديثات المكتبة",
          handle: "@school_library",
          verified: false,
          text: "أعلنت مكتبة المدرسة عن مواعيد جديدة. اسأل مدرسك أو راجع إعلان المدرسة الرسمي.",
          answer: "real",
          explanation: "الرسالة تقترح التحقق من مصدر موثوق. تأكد من التفاصيل قبل الاعتماد عليها."
        },
        {
          author: "شخص غريب",
          handle: "@new_friend",
          verified: false,
          text: "خلي كلامنا سر عن أهلك ومدرسينك، وهبعتلك هدية مميزة لو عملت كده.",
          answer: "fake",
          explanation: "الضغط عليك لإخفاء علاقة على الإنترنت مع تقديم هدايا علامة تحذير مهمة. أخبر شخصًا بالغًا تثق به."
        }
      ],
      hard: [
        {
          author: "فريق الحسابات",
          handle: "@account_help",
          verified: false,
          text: "حسابك في اللعبة هيتقفل خلال 10 دقايق. افتح الرابط الغريب ده فورًا عشان تثبت إن الحساب بتاعك.",
          answer: "fake",
          explanation: "التهديد والاستعجال والروابط الغريبة من أساليب الاحتيال الشائعة. افتح التطبيق أو الموقع الرسمي بدلًا من ذلك."
        },
        {
          author: "مجموعة مشروع الفصل",
          handle: "@class_project",
          verified: false,
          text: "آخر موعد للمشروع يوم الجمعة. اتأكد من المدرس من الموعد قبل ما تسلّم شغلك.",
          answer: "real",
          explanation: "الرسالة تشجعك على التأكد من مصدر مستقل. راجع المدرس أو قناة الفصل الرسمية."
        },
        {
          author: "حساب الهدايا المجانية",
          handle: "@gift_drop",
          verified: false,
          text: "الصورة دي بتثبت إني كسبت تابلت مجاني. ادفع رسوم توصيل بسيطة من الرابط عشان تاخد واحد زيي.",
          answer: "fake",
          explanation: "يمكن تعديل الصور، وطلب رسوم التوصيل قد يكون وسيلة لجمع المال أو بيانات الدفع. تحقق من العرض بشكل مستقل."
        }
      ]
    },
    "13-17": {
      easy: [
        {
          author: "منح دراسية",
          handle: "@student_awards",
          verified: false,
          text: "كسبت منحة دراسية! ادفع رسوم إدارية وابعت بيانات حسابك البنكي لتأكيد مكانك.",
          answer: "fake",
          explanation: "الجوائز غير المتوقعة التي تطلب أموالًا أو بيانات بنكية مريبة. تحقق من الجهة عبر موقعها الرسمي."
        },
        {
          author: "نادي المدرسة",
          handle: "@school_club",
          verified: false,
          text: "اجتماع نادي المناظرات يوم الأربعاء. راجع مجموعة المدرسة الرسمية للتأكد من الموعد.",
          answer: "real",
          explanation: "المنشور يوجهك إلى قناة رسمية للتأكد. راجع القناة قبل اتخاذ أي ترتيبات."
        },
        {
          author: "دعم مواقع التواصل",
          handle: "@account_security_team",
          verified: false,
          text: "في مشكلة في حسابك. ابعت كلمة المرور في رسالة خاصة عشان نحمي حسابك.",
          answer: "fake",
          explanation: "فِرق الدعم الحقيقية لا ينبغي أن تطلب منك إرسال كلمة المرور في رسالة. استخدم إعدادات الأمان الرسمية."
        }
      ],
      medium: [
        {
          author: "خبر عاجل",
          handle: "@news_flash_now",
          verified: false,
          text: "منشور صادم بيقول إن كل مدارس المدينة هتتقفل بكرة، من غير ما يذكر أي مصدر رسمي.",
          answer: "fake",
          explanation: "الخبر غير مؤكد، وده لا يعني بالضرورة إنه كاذب. راجع إعلانات التعليم الرسمية ومصادر الأخبار الموثوقة قبل نشره."
        },
        {
          author: "اتحاد الطلاب",
          handle: "@student_council",
          verified: false,
          text: "اتحاد الطلاب بيقول إن موعد الفعالية ممكن يتغير، وبينصح بمراجعة إعلان المدرسة الرسمي قبل حجز المواصلات.",
          answer: "real",
          explanation: "المنشور يوضح أن المعلومة قد تتغير وينصح بالتحقق. راجع قناة المدرسة الرسمية."
        },
        {
          author: "فرصة حصرية",
          handle: "@instant_internships",
          verified: false,
          text: "احصل على تدريب مضمون من غير مقابلة. ابعت صورة بطاقتك وادفع رسوم تسجيل النهارده.",
          answer: "fake",
          explanation: "الوعود المضمونة مع طلب رسوم مقدمة ووثائق شخصية علامات تحذير. ابحث عن الجهة بشكل مستقل."
        }
      ],
      hard: [
        {
          author: "ادعاء صحي منتشر",
          handle: "@health_truths",
          verified: false,
          text: "منشور منتشر بيقول إن مشروبًا عاديًا يمنع كل الأمراض، من غير أبحاث، ويدّعي أن الأطباء بيخفوا الحقيقة.",
          answer: "fake",
          explanation: "الادعاء غير مدعوم ويستخدم لغة المؤامرة. ده لا يثبت أن كل جزء منه كاذب، لكن لازم دليل طبي موثوق قبل تصديقه أو نشره."
        },
        {
          author: "إعلان مجتمعي",
          handle: "@community_updates",
          verified: false,
          text: "منشور بيعلن إغلاق طريق وبيضع رابطًا لإعلان الجهة المحلية الرسمية، والإعلان يؤكد التاريخ والمكان.",
          answer: "real",
          explanation: "المعلومة مدعومة بمصدر رسمي مناسب. تأكد أن الإعلان حقيقي وحديث قبل الاعتماد عليه."
        },
        {
          author: "مجموعة استثمار عاجل",
          handle: "@fast_returns",
          verified: false,
          text: "مجموعة بتوعد بأرباح مضمونة في يوم واحد. بتعرض صورًا مشكوكًا فيها وبتشترط دعوة أصدقاء لسحب الأموال.",
          answer: "fake",
          explanation: "الأرباح المضمونة والضغط واشتراط دعوة أشخاص علامات تحذير كبيرة. الصور وحدها ليست دليلًا موثوقًا. لا ترسل أموالًا أو بيانات شخصية."
        }
      ]
    }
  }
};

// ============================================
// Ensure every age group and level has 20 cases
// ============================================

function ensureTwentyCases() {
    const targetCount = 20;

    const variations = {
        en: [
            "Look carefully at the source before deciding.",
            "Check whether independent evidence supports the claim.",
            "Consider whether the message uses pressure or emotion.",
            "Verify the date and context before sharing.",
            "Look for confirmation from a reliable source."
        ],
        ar: [
            "افحصي المصدر جيدًا قبل اتخاذ القرار.",
            "تحققي من وجود أدلة مستقلة تدعم المعلومة.",
            "انتبهي إذا كانت الرسالة تستخدم الضغط أو المشاعر.",
            "تحققي من التاريخ والسياق قبل نشر المعلومة.",
            "ابحثي عن تأكيد من مصدر موثوق."
        ]
    };

    for (const lang of ["en", "ar"]) {
        for (const ageGroup of ["8-12", "13-17"]) {
            for (const level of ["easy", "medium", "hard"]) {
                const cases =
                    scenariosData[lang][ageGroup][level];

                if (!Array.isArray(cases) || cases.length === 0) {
                    console.error(
                        `Missing cases: ${lang}, ${ageGroup}, ${level}`
                    );
                    continue;
                }

                const originalCases = cases.slice();

                while (cases.length < targetCount) {
                    const index = cases.length;
                    const original =
                        originalCases[index % originalCases.length];

                    const variationNumber =
                        Math.floor(index / originalCases.length) + 1;

                    const variation =
                        variations[lang][index % variations[lang].length];

                    cases.push({
                        ...original,
                        author: `${original.author} ${index + 1}`,
                        handle: `${original.handle}_${index + 1}`,
                        text: `${original.text} ${variation}`,
                        explanation: original.explanation
                    });
                }
            }
        }
    }
}

ensureTwentyCases();

// ============================================
// TruthTrace — User Data and Application Logic
// ============================================

const defaultUser = {
    name: "",
    ageGroup: "8-12",
    points: 0,
    currentLevel: "easy",
    questionIndex: 0,
    completedQuestions: [],
    completedLevels: [],
    answerResults: {},
    awardedQuestions: [],
    confidenceRatings: [],
    evidenceStage: 1,
    level1Completed: false,
    level2Completed: false,
    level3Completed: false
};

let currentUser = { ...defaultUser };
let currentLang = "en";
let currentTheme = "light";
let answerSubmitted = false;

const STORAGE_KEY = "truthtrace_user_v13";
const SETTINGS_KEY = "truthtrace_settings_v1";

const LEVELS = ["easy", "medium", "hard"];
const POINTS_PER_CORRECT_ANSWER = 10;
const CASES_PER_LEVEL = 20;
const PASSING_SCORE = 10;

const translations = {
    en: {
        navHome: "Home",
        navPractice: "Practice Room",
        navLab: "Investigation Lab",
        navBadges: "Badges",
        navAbout: "About Us",
        navContact: "Contact Us",
        moreZones: "More Zones ▾",
        pts: "Pts",
        badges: "Badges",
        ageGroup: "Age Group:",
        level: "Level:",
        easyUnlocked: "Easy (Unlocked)",
        mediumUnlocked: "Medium (Unlocked)",
        mediumLocked: "Medium (Locked)",
        hardUnlocked: "Hard (Unlocked)",
        hardLocked: "Hard (Locked)",
        kidsMode: "Active Mode: Kids Academy",
        teensMode: "Active Mode: Teens Safety Room",
        real: "Real & Safe",
        fake: "Fake / Scam",
        nextCase: "Next Case",
        correct: "Correct answer!",
        incorrect: "Not quite!",
        realAnswer: "This case is classified as real/safe.",
        fakeAnswer: "This case is classified as fake/suspicious.",
        earnedPoints: "Points earned:",
        finishLevel: "Level results",
        finishIntro: "Review your results and learning progress.",
        unlockMedium: "Unlock Level 2 (Medium)",
        unlockHard: "Unlock Level 3 (Hard)",
        allComplete: "You've completed all three levels!",
        backHome: "Back to Home",
        certificate: "For successfully completing",
        issueDate: "Issue Date",
        answeredCases: "Cases answered",
        accuracy: "Correct answers",
        totalPoints: "Total points",
        analysisTitle: "Your Learning Summary",
        analysisIntro: "Here is a summary of your progress based on your answers.",
        passMessage: "Great work! You passed this level.",
        failMessage: "You need at least 10 correct answers out of 20 to pass. Try again!",
        retryLevel: "Retry This Level",
        resetConfirm: "Reset your progress? This will erase your saved name, points, badges, and completed levels.",
        contactSuccess: "Thanks! Your message has been prepared. This demo does not send messages to a server.",
        enterName: "Please enter your name.",
        selectAge: "Please choose an age group.",
        chooseAnswer: "Choose an answer before moving to the next case.",
        noCases: "No scenarios are available for this level.",
        lockedLevel: "Complete the previous level first to unlock this level.",
        comingSoon: "This zone is coming soon!",
        evidenceComplete: "Good verification uses the original source, date/context, and independent confirmation. Emotional reactions are not evidence.",
        evidenceIncomplete: "Select the original source, date/context, and independent confirmation. Avoid treating emotions as proof.",
        contextCorrect: "Correct. A real photo can mislead when it is presented with the wrong date or place.",
        contextTryAgain: "Look at the metadata: the photo is from another country and three years ago. The claim needs more evidence.",
        confidenceSaved: "Confidence saved. Compare this rating with your actual results after more cases.",
        reportEmpty: "Answer some practice cases first. Then you can generate a report based on your recorded answers.",
        reportTitle: "Your Thinking Pattern Report",
        reportAccuracy: "Your accuracy so far:",
        reportAdvice: "Before sharing a claim, check its original source, date, context, and independent evidence.",
        stageOne: "Stage 1: The post has a school logo, but no source link.",
        stageTwo: "Stage 2: The school website has no matching announcement. The logo alone is not proof.",
        stageThree: "Stage 3: A teacher shares a dated announcement in the official school channel. This is stronger evidence.",
        stageDone: "You reviewed all evidence stages. Remember to verify the source and date.",
        trainingSource: "Your next challenge: practise checking the original source before deciding.",
        trainingContext: "Your next challenge: practise checking dates and context before sharing a claim.",
        trainingEvidence: "Your next challenge: compare a claim with at least one independent, reliable source.",
        featureEvidence: "Review my evidence",
        featureContextMisleading: "Misleading context",
        featureContextNotEnough: "Not enough information",
        featureConfidence: "Save confidence",
        featureReport: "Generate my report",
        featureReveal: "Reveal next evidence",
        featureTraining: "Find my next challenge",
        badgeOne: "Junior Shield",
        badgeTwo: "Fact Checker",
        badgeThree: "Truth Master",
        badgeLocked: "Not unlocked yet",
        badgeOneDesc: "Unlocked after passing Level 1.",
        badgeTwoDesc: "Unlocked after passing Level 2.",
        badgeThreeDesc: "Unlocked after passing Level 3."
    },

    ar: {
        navHome: "الرئيسية",
        navPractice: "غرفة التدريب",
        navLab: "مختبر التحقيق",
        navBadges: "الشارات",
        navAbout: "من نحن",
        navContact: "تواصل معنا",
        moreZones: "مناطق أخرى ▾",
        pts: "نقطة",
        badges: "الشارات",
        ageGroup: "الفئة العمرية:",
        level: "المستوى:",
        easyUnlocked: "سهل (مفتوح)",
        mediumUnlocked: "متوسط (مفتوح)",
        mediumLocked: "متوسط (مغلق)",
        hardUnlocked: "صعب (مفتوح)",
        hardLocked: "صعب (مغلق)",
        kidsMode: "الوضع الحالي: أكاديمية الأطفال",
        teensMode: "الوضع الحالي: مساحة أمان المراهقين",
        real: "حقيقي وآمن",
        fake: "مزيف / احتيال",
        nextCase: "الحالة التالية",
        correct: "إجابة صحيحة!",
        incorrect: "مش بالضبط!",
        realAnswer: "تم تصنيف الحالة على أنها حقيقية أو آمنة.",
        fakeAnswer: "تم تصنيف الحالة على أنها مزيفة أو مريبة.",
        earnedPoints: "النقاط المكتسبة:",
        finishLevel: "نتيجة المستوى",
        finishIntro: "راجعي نتيجتك وتقدمك في التعلم.",
        unlockMedium: "افتحي المستوى الثاني (متوسط)",
        unlockHard: "افتحي المستوى الثالث (صعب)",
        allComplete: "لقد أكملتِ المستويات الثلاثة!",
        backHome: "العودة للرئيسية",
        certificate: "لإتمام المستوى بنجاح",
        issueDate: "تاريخ الإصدار",
        answeredCases: "الحالات التي أُجيب عنها",
        accuracy: "الإجابات الصحيحة",
        totalPoints: "إجمالي النقاط",
        analysisTitle: "ملخص تقدمك",
        analysisIntro: "إليكِ ملخص تقدمك بناءً على إجاباتك.",
        passMessage: "أحسنتِ! لقد اجتزتِ هذا المستوى.",
        failMessage: "تحتاجين إلى 10 إجابات صحيحة على الأقل من أصل 20 لاجتياز المستوى. حاولي مرة أخرى!",
        retryLevel: "إعادة المستوى",
        resetConfirm: "هل تريدين إعادة تعيين تقدمك؟ سيتم حذف الاسم والنقاط والشارات والمستويات المكتملة.",
        contactSuccess: "شكرًا! تم تجهيز رسالتك. هذا نموذج تجريبي ولا يرسل الرسائل إلى خادم.",
        enterName: "من فضلك اكتبي اسمك.",
        selectAge: "من فضلك اختاري الفئة العمرية.",
        chooseAnswer: "اختاري إجابة قبل الانتقال إلى الحالة التالية.",
        noCases: "لا توجد حالات متاحة لهذا المستوى.",
        lockedLevel: "أكملي المستوى السابق أولًا لفتح هذا المستوى.",
        comingSoon: "هذه المنطقة ستكون متاحة قريبًا!",
        evidenceComplete: "التحقق الجيد يشمل المصدر الأصلي والتاريخ والسياق ومصدرًا مستقلًا. المشاعر وحدها ليست دليلًا.",
        evidenceIncomplete: "اختاري المصدر الأصلي والتاريخ والسياق والتأكيد المستقل. لا تعتمدي على المشاعر كدليل.",
        contextCorrect: "إجابة صحيحة. يمكن استخدام صورة حقيقية للتضليل إذا عُرضت بتاريخ أو مكان غير صحيح.",
        contextTryAgain: "راجعي بيانات الصورة: إنها من دولة أخرى ومنذ ثلاث سنوات. الادعاء يحتاج إلى أدلة إضافية.",
        confidenceSaved: "تم حفظ مستوى الثقة. قارنيه بنتائجك الفعلية بعد حل المزيد من الحالات.",
        reportEmpty: "أجيبي عن بعض الحالات أولًا، وبعدها يمكنك إنشاء تقرير مبني على إجاباتك الفعلية.",
        reportTitle: "تقرير أنماط التفكير",
        reportAccuracy: "دقتك حتى الآن:",
        reportAdvice: "قبل نشر أي معلومة، تحققي من المصدر الأصلي والتاريخ والسياق والأدلة المستقلة.",
        stageOne: "المرحلة الأولى: المنشور يحتوي على شعار المدرسة، لكن لا يوجد رابط للمصدر.",
        stageTwo: "المرحلة الثانية: لا يوجد إعلان مطابق على موقع المدرسة. الشعار وحده ليس دليلًا.",
        stageThree: "المرحلة الثالثة: نشر مدرس إعلانًا مؤرخًا على قناة المدرسة الرسمية. هذا دليل أقوى.",
        stageDone: "راجعتِ كل مراحل الأدلة. تذكري التحقق من المصدر والتاريخ.",
        trainingSource: "التحدي التالي: تدرّبي على فحص المصدر الأصلي قبل اتخاذ القرار.",
        trainingContext: "التحدي التالي: تدرّبي على فحص التاريخ والسياق قبل نشر أي معلومة.",
        trainingEvidence: "التحدي التالي: قارني الادعاء بمصدر مستقل وموثوق واحد على الأقل.",
        featureEvidence: "راجعي الأدلة",
        featureContextMisleading: "سياق مضلل",
        featureContextNotEnough: "معلومات غير كافية",
        featureConfidence: "حفظ مستوى الثقة",
        featureReport: "إنشاء تقريري",
        featureReveal: "إظهار الدليل التالي",
        featureTraining: "اختيار التحدي التالي",
        badgeOne: "درع المبتدئ",
        badgeTwo: "مدقق الحقائق",
        badgeThree: "خبير الحقيقة",
        badgeLocked: "لم تُفتح بعد",
        badgeOneDesc: "تُفتح بعد اجتياز المستوى الأول.",
        badgeTwoDesc: "تُفتح بعد اجتياز المستوى الثاني.",
        badgeThreeDesc: "تُفتح بعد اجتياز المستوى الثالث."
    }
};

// --------------------------------------------
// Safe helpers
// --------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const $ = (id) => document.getElementById(id);
    const all = (selector) => [...document.querySelectorAll(selector)];

    const welcomeModal = $("welcome-modal");
    const onboardingForm = $("onboarding-form");
    const userNameInput = $("user-name-input");
    const ageSelect = $("age-select");
    const displayName = $("user-display-name");
    const pointsCount = $("points-count");
    const badgeCount = $("badge-count");
    const navAgeSelect = $("nav-age-select");
    const navLevelSelect = $("nav-level-select");
    const optEasy = $("opt-easy");
    const optMedium = $("opt-medium");
    const optHard = $("opt-hard");
    const themeToggleBtn = $("theme-toggle-btn");
    const langToggleBtn = $("lang-toggle-btn");
    const resetBtn = $("re-register-btn");
    const startJourneyBtn = $("start-journey-btn");
    const demoGrid = $("demo-grid-container");
    const postAvatar = $("post-avatar");
    const postAuthorName = $("post-author-name");
    const postAuthorHandle = $("post-author-handle");
    const verifiedBadge = $("post-verified-badge");
    const scenarioText = $("scenario-text");
    const optionBtns = all(".option-btn");
    const feedbackBox = $("feedback-box");
    const feedbackTitle = $("feedback-title");
    const feedbackExplanation = $("feedback-explanation");
    const nextBtn = $("next-btn");
    const quizCard = $("quiz-card");
    const completionWrap = $("level-completion-wrap");
    const analysisGrid = $("analysis-grid");
    const contactForm = $("contact-form");

    // Prevent a missing HTML element from breaking the entire script.
    function safeText(id, value) {
        const element = $(id);
        if (element) element.textContent = value;
    }

    function t(key) {
        return translations[currentLang]?.[key] ||
            translations.en[key] ||
            key;
    }

    function escapeHTML(value) {
        return String(value).replace(/[&<>"']/g, (char) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[char]);
    }

    function getLevelCases(level = currentUser.currentLevel) {
        return scenariosData[currentLang]?.[currentUser.ageGroup]?.[level] || [];
    }

    function getEnglishCases(level = currentUser.currentLevel) {
        return scenariosData.en?.[currentUser.ageGroup]?.[level] || [];
    }
    

    function getQuestionKey(level, index) {
        return `${currentUser.ageGroup}-${level}-${index}`;
    }

    function getAnsweredCount(level) {
        const cases = getEnglishCases(level);
        return cases.filter((_, index) =>
            currentUser.completedQuestions.includes(getQuestionKey(level, index))
        ).length;
    }

    function countCorrectAnswers(level) {
        const cases = getEnglishCases(level);
        return cases.filter((_, index) => {
            const key = getQuestionKey(level, index);
            return currentUser.completedQuestions.includes(key) &&
                currentUser.answerResults?.[key] === true;
        }).length;
    }

    function getLevelProgress(level) {
        const cases = getEnglishCases(level);
        return {
            answered: getAnsweredCount(level),
            total: cases.length
        };
    }

    function isLevelCompleted(level) {
        const cases = getEnglishCases(level);
        if (!cases.length) return false;

        const progress = getLevelProgress(level);
        const correct = countCorrectAnswers(level);

        return progress.answered === progress.total &&
            correct >= PASSING_SCORE;
    }

    function isLevelUnlocked(level) {
        if (level === "easy") return true;
        if (level === "medium") return isLevelCompleted("easy");
        if (level === "hard") return isLevelCompleted("medium");
        return false;
    }

    // --------------------------------------------
    // Local storage
    // --------------------------------------------

    function loadSettings() {
        try {
            const settings = JSON.parse(
                localStorage.getItem(SETTINGS_KEY) || "{}"
            );

            if (settings.lang === "en" || settings.lang === "ar") {
                currentLang = settings.lang;
            }

            if (settings.theme === "light" || settings.theme === "dark") {
                currentTheme = settings.theme;
            }
        } catch (error) {
            currentLang = "en";
            currentTheme = "light";
        }
    }

    function saveSettings() {
        try {
            localStorage.setItem(
                SETTINGS_KEY,
                JSON.stringify({
                    lang: currentLang,
                    theme: currentTheme
                })
            );
        } catch (error) {
            console.warn("Could not save settings:", error);
        }
    }

    function loadUser() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (!saved) return false;

            const parsed = JSON.parse(saved);
            if (!parsed || typeof parsed !== "object") return false;

            currentUser = {
                ...defaultUser,
                ...parsed,
                points: Number.isFinite(parsed.points)
                    ? Math.max(0, parsed.points)
                    : 0,
                completedQuestions: Array.isArray(parsed.completedQuestions)
                    ? parsed.completedQuestions
                    : [],
                completedLevels: Array.isArray(parsed.completedLevels)
                    ? parsed.completedLevels
                    : [],
                answerResults:
                    parsed.answerResults &&
                    typeof parsed.answerResults === "object"
                        ? parsed.answerResults
                        : {},
                awardedQuestions: Array.isArray(parsed.awardedQuestions)
                    ? parsed.awardedQuestions
                    : [],
                confidenceRatings: Array.isArray(parsed.confidenceRatings)
                    ? parsed.confidenceRatings
                    : []
            };

            currentUser.ageGroup =
                currentUser.ageGroup === "13-17" ? "13-17" : "8-12";

            if (!LEVELS.includes(currentUser.currentLevel)) {
                currentUser.currentLevel = "easy";
            }

            if (!Number.isInteger(currentUser.questionIndex) ||
                currentUser.questionIndex < 0) {
                currentUser.questionIndex = 0;
            }

            return true;
        } catch (error) {
            console.warn("Could not load saved progress:", error);
            currentUser = {
                ...defaultUser,
                completedQuestions: [],
                completedLevels: [],
                answerResults: {},
                awardedQuestions: [],
                confidenceRatings: []
            };
            return false;
        }
    }

    function saveUserData() {
        currentUser.completedLevels = LEVELS.filter(isLevelCompleted);
        currentUser.level1Completed = isLevelCompleted("easy");
        currentUser.level2Completed = isLevelCompleted("medium");
        currentUser.level3Completed = isLevelCompleted("hard");

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
        } catch (error) {
            console.warn("Could not save user progress:", error);
        }

        updateUserStats();
        updateLevelLocks();
        updateBadgesDisplay();
    }

    // --------------------------------------------
    // Stats, level locks, badges
    // --------------------------------------------

    function updateUserStats() {
        safeText("user-display-name", currentUser.name || "Guest");
        safeText("points-count", currentUser.points);

        const earnedBadges = LEVELS.filter(isLevelCompleted).length;
        safeText("badge-count", earnedBadges);
    }

    function updateLevelLocks() {
        if (!optEasy || !optMedium || !optHard || !navLevelSelect) return;

        optEasy.disabled = false;
        optEasy.textContent = t("easyUnlocked");

        optMedium.disabled = !isLevelUnlocked("medium");
        optMedium.textContent = isLevelUnlocked("medium")
            ? t("mediumUnlocked")
            : t("mediumLocked");

        optHard.disabled = !isLevelUnlocked("hard");
        optHard.textContent = isLevelUnlocked("hard")
            ? t("hardUnlocked")
            : t("hardLocked");

        if (!isLevelUnlocked(currentUser.currentLevel)) {
            currentUser.currentLevel = "easy";
        }

        navLevelSelect.value = currentUser.currentLevel;
    }

    function updateBadgesDisplay() {
        const badgeCards = [
            $("badge-card-0"),
            $("badge-card-1"),
            $("badge-card-2")
        ];

        const badgeNames = [
            ["badge-1-name", "badgeOne"],
            ["badge-2-name", "badgeTwo"],
            ["badge-3-name", "badgeThree"]
        ];

        const badgeDescriptions = [
            ["badge-1-desc", "badgeOneDesc"],
            ["badge-2-desc", "badgeTwoDesc"],
            ["badge-3-desc", "badgeThreeDesc"]
        ];

        badgeCards.forEach((card, index) => {
            if (card) {
                card.classList.toggle("unlocked", isLevelCompleted(LEVELS[index]));
            }

            safeText(badgeNames[index][0], t(badgeNames[index][1]));
            safeText(badgeDescriptions[index][0], isLevelCompleted(LEVELS[index])
                ? t("completed")
                : t(badgeDescriptions[index][1]));
        });
    }

    // --------------------------------------------
    // Navigation and language
    // --------------------------------------------

    function showPage(pageId) {
        all(".page-section").forEach((page) => {
            const active = page.id === pageId;
            page.classList.toggle("active-page", active);
            page.classList.toggle("hidden-page", !active);
        });

        all(".nav-page-btn").forEach((link) => {
            link.classList.toggle("active", link.dataset.page === pageId);
        });

        if (pageId === "practice-page") loadScenario();
        if (pageId === "badges-page") updateBadgesDisplay();

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function setLanguage(lang) {
        currentLang = lang === "ar" ? "ar" : "en";

        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

        if (langToggleBtn) {
            langToggleBtn.textContent = currentLang === "ar" ? "EN" : "AR";
        }

        const textMap = {
            "nav-home": "navHome",
            "nav-practice": "navPractice",
            "nav-lab": "navLab",
            "nav-badges": "navBadges",
            "nav-about": "navAbout",
            "nav-contact": "navContact",
            "future-categories-toggle": "moreZones",
            "lbl-pts": "pts",
            "lbl-badges": "badges",
            "lbl-age-group": "ageGroup",
            "lbl-level-select": "level",
            "next-btn": "nextCase",
            "evidence-check-btn": "featureEvidence",
            "save-confidence-btn": "featureConfidence",
            "generate-report-btn": "featureReport",
            "reveal-evidence-btn": "featureReveal",
            "recommend-training-btn": "featureTraining"
        };

        Object.entries(textMap).forEach(([id, key]) => {
            safeText(id, t(key));
        });

        const contextMisleading = all('[data-context="misleading"]')[0];
        const contextNotEnough = all('[data-context="not-enough"]')[0];

        if (contextMisleading) {
            contextMisleading.textContent = t("featureContextMisleading");
        }
        if (contextNotEnough) {
            contextNotEnough.textContent = t("featureContextNotEnough");
        }

        updateLevelLocks();
        updateUserStats();
        updateBadgesDisplay();
        updateHeroAgeTag();
        renderDemos();

        const activePage = document.querySelector(".page-section.active-page");
        if (activePage?.id === "practice-page") loadScenario();

        saveSettings();
    }

    function setTheme(theme) {
        currentTheme = theme === "dark" ? "dark" : "light";

        document.body.classList.toggle("dark-mode", currentTheme === "dark");
        document.body.classList.toggle("light-mode", currentTheme === "light");

        const icon = $("theme-icon");

        if (icon) {
            icon.innerHTML = currentTheme === "dark"
                ? '<path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"></path><circle cx="12" cy="12" r="4"></circle>'
                : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        }

        saveSettings();
    }

    function updateHeroAgeTag() {
        const tag = $("current-age-theme-tag");

        if (tag) {
            tag.textContent = currentUser.ageGroup === "8-12"
                ? t("kidsMode")
                : t("teensMode");
        }

        safeText(
            "active-age-display",
            `${t("ageGroup")} ${currentUser.ageGroup}`
        );

        safeText(
            "active-level-display",
            `${t("level")} ${currentUser.currentLevel.toUpperCase()}`
        );
    }

    // --------------------------------------------
    // Home demo cards
    // --------------------------------------------

    function renderDemos() {
    if (!demoGrid) return;

    const examples = getLevelCases("easy").slice(0, 3);

    demoGrid.innerHTML = examples.map((item, index) => `
        <article class="demo-card">
            <div class="demo-card-header">
                <span class="demo-author">${escapeHTML(item.author)}</span>
                <span class="demo-number">${index + 1}</span>
            </div>

            <p>${escapeHTML(item.text)}</p>

            <button
                type="button"
                class="btn-primary demo-practice-btn"
                data-index="${index}"
                aria-expanded="false">
                ${currentLang === "ar" ? "حلّلي الحالة" : "Analyze Case"}
            </button>

            <div class="demo-analysis hidden" id="demo-analysis-${index}" role="status">
                <h3>${currentLang === "ar" ? "نتيجة التحليل" : "Analysis Result"}</h3>

                <p class="demo-verdict">
                    <strong>
                        ${
                            item.answer === "fake"
                                ? (currentLang === "ar" ? "مريب أو مضلل" : "Suspicious / Misleading")
                                : (currentLang === "ar" ? "لا توجد علامة كافية للحكم بأنه مزيف" : "Not enough evidence to call it fake")
                        }
                    </strong>
                </p>

                <p>${escapeHTML(item.explanation)}</p>

                <p>
                    <strong>
                        ${currentLang === "ar" ? "خطوة التحقق:" : "What to check:"}
                    </strong>
                    ${
                        item.answer === "fake"
                            ? (currentLang === "ar"
                                ? "تحققي من المصدر الأصلي، ولا تضغطي على روابط مجهولة أو تشاركي بياناتك الخاصة."
                                : "Check the original source. Avoid unknown links and never share private login details.")
                            : (currentLang === "ar"
                                ? "تحققي من المصدر الرسمي قبل اعتماد الخبر؛ لا يكفي شكل المنشور وحده للحكم."
                                : "Verify the claim through an official source. The post alone is not enough to prove it.")
                    }
                </p>
            </div>
        </article>
    `).join("");

    all(".demo-practice-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.index);
            const result = $(`demo-analysis-${index}`);

            if (!result) return;

            const isOpening = result.classList.contains("hidden");
            result.classList.toggle("hidden", !isOpening);

            button.setAttribute("aria-expanded", String(isOpening));

            button.textContent = isOpening
                ? (currentLang === "ar" ? "إخفاء التحليل" : "Hide Analysis")
                : (currentLang === "ar" ? "حلّلي الحالة" : "Analyze Case");
        });
    });
}

    // --------------------------------------------
    // Practice room
    // --------------------------------------------

    function loadScenario() {
        if (!scenarioText || !quizCard || !completionWrap) return;

        const cases = getLevelCases();
        answerSubmitted = false;

        optionBtns.forEach((button) => {
            button.disabled = false;
            button.classList.remove(
                "correct",
                "incorrect",
                "correct-answer",
                "wrong-answer"
            );
        });

        feedbackBox?.classList.add("hidden");
        completionWrap.classList.add("hidden");
        quizCard.classList.remove("hidden");

        updateHeroAgeTag();

        if (!cases.length) {
            scenarioText.textContent = t("noCases");
            return;
        }

        let index = Math.max(0, currentUser.questionIndex);

        while (
            index < cases.length &&
            currentUser.completedQuestions.includes(
                getQuestionKey(currentUser.currentLevel, index)
            )
        ) {
            index++;
        }

        if (index >= cases.length) {
            currentUser.questionIndex = cases.length;
            showLevelCompletion();
            return;
        }

        currentUser.questionIndex = index;
        const scenario = cases[index];

        if (postAvatar) {
    postAvatar.style.display = "none";
}
        safeText("post-author-name", scenario.author);
        safeText("post-author-handle", scenario.handle);
        safeText("scenario-text", scenario.text);

        if (verifiedBadge) {
            verifiedBadge.classList.toggle("hidden", !scenario.verified);
        }

        safeText(
            "practice-subtitle",
            currentLang === "ar"
                ? `الحالة ${index + 1} من ${cases.length}`
                : `Case ${index + 1} of ${cases.length}`
        );

        safeText(
            "next-btn",
            index === cases.length - 1
                ? (currentLang === "ar" ? "عرض النتيجة" : "View Results")
                : t("nextCase")
        );
    }

    function handleAnswer(selectedAnswer, button) {
        if (answerSubmitted) return;

        const cases = getLevelCases();
        const scenario = cases[currentUser.questionIndex];

        if (!scenario) return;

        answerSubmitted = true;

        optionBtns.forEach((item) => {
            item.disabled = true;
        });

        const questionKey = getQuestionKey(
            currentUser.currentLevel,
            currentUser.questionIndex
        );

        const isCorrect = selectedAnswer === scenario.answer;

        if (!currentUser.completedQuestions.includes(questionKey)) {
            currentUser.completedQuestions.push(questionKey);
            currentUser.answerResults[questionKey] = isCorrect;

            // Award points only once for each question, even after a retry.
            if (
                isCorrect &&
                !currentUser.awardedQuestions.includes(questionKey)
            ) {
                currentUser.points += POINTS_PER_CORRECT_ANSWER;
                currentUser.awardedQuestions.push(questionKey);
            }
        }

        button.classList.add(isCorrect ? "correct" : "incorrect");

        safeText("feedback-title", isCorrect ? t("correct") : t("incorrect"));

        const answerLabel = scenario.answer === "real"
            ? t("realAnswer")
            : t("fakeAnswer");

        const pointsText = isCorrect
            ? `<p><strong>${escapeHTML(t("earnedPoints"))} ${POINTS_PER_CORRECT_ANSWER}</strong></p>`
            : "";

        if (feedbackExplanation) {
            feedbackExplanation.innerHTML =
                `${escapeHTML(answerLabel)}<br><br>${escapeHTML(scenario.explanation)}${pointsText}`;
        }

        feedbackBox?.classList.remove("hidden");
        saveUserData();
    }

    function showLevelCompletion() {
        if (!completionWrap || !quizCard) return;

        quizCard.classList.add("hidden");
        completionWrap.classList.remove("hidden");

        const level = currentUser.currentLevel;
        const progress = getLevelProgress(level);
        const correctCount = countCorrectAnswers(level);
        const passed = isLevelCompleted(level);
        const nextLevel = LEVELS[LEVELS.indexOf(level) + 1];

        safeText("analysis-title", t("analysisTitle"));
        safeText("analysis-intro", t("analysisIntro"));

        const analysisItems = [
            {
                label: t("answeredCases"),
                value: `${progress.answered}/${progress.total}`
            },
            {
                label: t("accuracy"),
                value: `${correctCount}/${progress.total}`
            },
            {
                label: t("totalPoints"),
                value: String(currentUser.points)
            }
        ];

        if (analysisGrid) {
            analysisGrid.innerHTML = analysisItems.map((item) => `
                <div class="analysis-item">
                    <span>${escapeHTML(item.label)}</span>
                    <strong>${escapeHTML(item.value)}</strong>
                </div>
            `).join("");
        }

        const resultMessage = document.createElement("p");
        resultMessage.id = "level-result-message";
        resultMessage.setAttribute("role", "status");
        resultMessage.style.marginTop = "16px";
        resultMessage.style.fontWeight = "700";
        resultMessage.style.color = passed ? "var(--success-text)" : "var(--primary-color)";
        resultMessage.textContent = passed ? t("passMessage") : t("failMessage");

        const previousMessage = $("level-result-message");
        if (previousMessage) previousMessage.remove();

        if (analysisGrid) {
            analysisGrid.insertAdjacentElement("afterend", resultMessage);
        }

        const certificate = $("certificate-card");
        if (certificate) {
            certificate.classList.toggle("hidden", !passed);
        }

        safeText("cert-user-name", currentUser.name || "TruthTrace Learner");

        // Match the actual certificate date element in the supplied HTML.
        const dateElement = $("cert-date-val") || $("cert-date");
        if (dateElement) {
            dateElement.textContent = new Date().toLocaleDateString(
                currentLang === "ar" ? "ar-EG" : "en-GB"
            );
        }

        safeText(
            "cert-body-text",
            `${t("certificate")} ${level.toUpperCase()} ${
                currentLang === "ar"
                    ? "على منصة TruthTrace."
                    : "on the TruthTrace Platform."
            }`
        );

        const unlockButton = $("unlock-level2-btn");

        if (unlockButton) {
            unlockButton.classList.remove("hidden");
            unlockButton.disabled = false;

            if (!passed) {
                unlockButton.textContent = t("retryLevel");
            } else if (nextLevel) {
                unlockButton.textContent = nextLevel === "medium"
                    ? t("unlockMedium")
                    : t("unlockHard");
            } else {
                unlockButton.textContent = t("backHome");
            }
        }

        saveUserData();
    }

    function retryCurrentLevel() {
        const level = currentUser.currentLevel;
        const cases = getEnglishCases(level);

        cases.forEach((_, index) => {
            const key = getQuestionKey(level, index);
            currentUser.completedQuestions =
                currentUser.completedQuestions.filter((item) => item !== key);

            delete currentUser.answerResults[key];
        });

        currentUser.questionIndex = 0;
        answerSubmitted = false;

        saveUserData();
        loadScenario();
    }

    function goToNextLevel() {
        const level = currentUser.currentLevel;

        if (!isLevelCompleted(level)) {
            retryCurrentLevel();
            return;
        }

        const nextIndex = LEVELS.indexOf(level) + 1;

        if (nextIndex >= LEVELS.length) {
            showPage("home-page");
            return;
        }

        const nextLevel = LEVELS[nextIndex];

        currentUser.currentLevel = nextLevel;
        currentUser.questionIndex = 0;

        saveUserData();

        if (navLevelSelect) navLevelSelect.value = nextLevel;
        showPage("practice-page");
    }

   function startJourney() {
    // Returning users can go straight to the Practice Room.
    if (currentUser.name) {
        welcomeModal?.classList.add("hidden");
        showPage("practice-page");
        return;
    }

    if (userNameInput) userNameInput.value = "";
    if (ageSelect) ageSelect.value = "";
    welcomeModal?.classList.remove("hidden");
}

    function startOnboarding(event) {
        event.preventDefault();

        const name = userNameInput?.value.trim() || "";
        const ageGroup = ageSelect?.value || "";

        if (!name) {
            alert(t("enterName"));
            return;
        }

        if (!["8-12", "13-17"].includes(ageGroup)) {
            alert(t("selectAge"));
            return;
        }

        currentUser.name = name;
        currentUser.ageGroup = ageGroup;
        currentUser.currentLevel = "easy";
        currentUser.questionIndex = 0;

        welcomeModal?.classList.add("hidden");

        if (navAgeSelect) navAgeSelect.value = ageGroup;

        saveUserData();
        renderDemos();
        updateHeroAgeTag();
        showPage("home-page");
    }

    function resetProgress() {
    if (!confirm(t("resetConfirm"))) return;

    localStorage.removeItem(STORAGE_KEY);

    currentUser = {
        ...defaultUser,
        name: "",
        completedQuestions: [],
        completedLevels: []
    };

    answerSubmitted = false;

    displayName.textContent = "Guest";
    navAgeSelect.value = currentUser.ageGroup;
    navLevelSelect.value = currentUser.currentLevel;
    userNameInput.value = "";
    ageSelect.value = "";

    saveUserData();
    renderDemos();
    updateHeroAgeTag();

    welcomeModal?.classList.add("hidden");
    showPage("home-page");
    }

    // --------------------------------------------
    // Investigation Lab
    // --------------------------------------------

    function setupEvidenceDetective() {
        const button = $("evidence-check-btn");
        if (!button) return;

        button.addEventListener("click", () => {
            const selected = all("#evidence-checks input:checked")
                .map((input) => input.value);

            const required = ["source", "date", "independent"];
            const hasAllRequired = required.every((value) =>
                selected.includes(value)
            );
            const trustedEmotion = selected.includes("emotion");

            const result = $("evidence-result");
            if (!result) return;

            if (hasAllRequired && !trustedEmotion) {
                result.textContent = t("evidenceComplete");
            } else {
                result.textContent = t("evidenceIncomplete");
            }
        });
    }

   function setupContextTrap() {
    const options = all("#context-options [data-context]");
    const result = $("context-feedback");

    if (!options.length || !result) return;

    options.forEach((button) => {
        button.addEventListener("click", () => {
            const isCorrect = button.dataset.context === "B";

            result.textContent = isCorrect
                ? "Correct! Check when and where the original photo appeared."
                : "Not quite! Check the photo's original date and location.";

            result.classList.remove("hidden");

            options.forEach((option) => {
                option.disabled = true;
            });
        });
    });
}


function setupConfidenceTool() {
    const range = $("confidence-slider");
    const value = $("confidence-value");
    const button = $("save-confidence-btn");
    const result = $("confidence-feedback");

    if (!range || !button || !result) return;

    range.addEventListener("input", () => {
        if (value) value.textContent = `${range.value}%`;
    });

    button.addEventListener("click", () => {
        const rating = Number(range.value);

        currentUser.confidenceRatings.push({
            rating,
            date: new Date().toISOString()
        });

        currentUser.confidenceRatings =
            currentUser.confidenceRatings.slice(-30);

        saveUserData();

        result.textContent =
            `Saved! You feel ${rating}% sure about spotting false information.`;

        result.classList.remove("hidden");
    });
}



function setupThinkingReport() {
    const button = $("generate-report-btn");
    const report = $("thinking-report");

    if (!button || !report) return;

    button.addEventListener("click", () => {
        const total = currentUser.completedQuestions.length;

        report.classList.remove("hidden");

        if (total === 0) {
            report.textContent =
                "You have not answered any practice questions yet. Try the Practice Room first.";
            return;
        }

        const correct = Object.values(currentUser.answerResults)
            .filter((answer) => answer === true).length;

        const percentage = Math.round((correct / total) * 100);

        let advice;

        if (percentage >= 80) {
            advice = "Great work! Keep checking the source and date of each post.";
        } else if (percentage >= 50) {
            advice = "Good start! Check the evidence carefully before deciding.";
        } else {
            advice = "Keep practising! Start by checking who shared the information.";
        }

        report.textContent =
            `You answered ${total} questions. Your correct-answer rate is ${percentage}%. ${advice}`;
    });
}



function setupEvidenceStages() {
    const button = $("reveal-evidence-btn");
    const stageText = $("evidence-stage-text");
    const result = $("stage-feedback");

    if (!button || !stageText || !result) return;

    const stages = [
        "Clue 1: A post announces a school event, but gives no source.",
        "Clue 2: The school's official page has no announcement about the event.",
        "Clue 3: The person who shared the post cannot provide an official source."
    ];

    currentUser.evidenceStage = Math.min(
        Math.max(Number(currentUser.evidenceStage) || 1, 1),
        stages.length
    );

    stageText.textContent = stages[currentUser.evidenceStage - 1];

    button.addEventListener("click", () => {
        if (currentUser.evidenceStage < stages.length) {
            currentUser.evidenceStage++;

            stageText.textContent =
                stages[currentUser.evidenceStage - 1];

            result.textContent =
                "New clue found. Check how this changes what you know.";

            result.classList.remove("hidden");
            saveUserData();
        } else {
            result.textContent =
                "You have seen all the clues. Remember: missing evidence does not always mean a story is false.";

            result.classList.remove("hidden");
        }
    });
}

    function setupTrainingRecommendation() {
    const button = $("recommend-training-btn");
    const output = $("training-recommendation");

    if (!button || !output) return;

    button.addEventListener("click", () => {
        output.classList.remove("hidden");

        const total = currentUser.completedQuestions.length;

        if (total === 0) {
            output.textContent =
                "Start with the Practice Room. Answer a few questions, then come back for your training tip.";
            return;
        }

        const results = Object.values(currentUser.answerResults);
        const correct = results.filter(answer => answer === true).length;
        const accuracy = correct / total;

        if (accuracy < 0.6) {
            output.textContent =
                "Your next step: practise checking the original source of a post before believing it.";
        } else if (currentUser.confidenceRatings.length === 0) {
            output.textContent =
                "Your next step: rate how sure you feel about your answers, then compare your confidence with your results.";
        } else {
            output.textContent =
                "Great progress! Your next step: check the source, date, and evidence before sharing a post.";
        }
    });
}

    function setupLab() {
        setupEvidenceDetective();
        setupContextTrap();
        setupConfidenceTool();
        setupThinkingReport();
        setupEvidenceStages();
        setupTrainingRecommendation();
    }

    // --------------------------------------------
    // Dropdown menu
    // --------------------------------------------

    function setupDropdown() {
        const toggle = $("future-categories-toggle");
        const menu = $("future-categories-menu");
        

        if (!toggle || !menu) return;

        toggle.addEventListener("click", () => {
            const isOpen = toggle.getAttribute("aria-expanded") === "true";

            toggle.setAttribute("aria-expanded", String(!isOpen));
            menu.classList.toggle("hidden", isOpen);
        });
        
menu.querySelectorAll("[data-age-group]").forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const selectedAge = link.dataset.ageGroup;

        if (navAgeSelect) {
            navAgeSelect.value = selectedAge;
            navAgeSelect.dispatchEvent(new Event("change"));
        }

        menu.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
    });
});

        all("[data-coming-soon]").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                alert(t("comingSoon"));

                menu.classList.add("hidden");
                toggle.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("click", (event) => {
            if (!event.target.closest(".nav-dropdown")) {
                menu.classList.add("hidden");
                toggle.setAttribute("aria-expanded", "false");
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                menu.classList.add("hidden");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    // --------------------------------------------
    // Event listeners
    // --------------------------------------------

    all(".nav-page-btn").forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            showPage(link.dataset.page);
        });
    });

    onboardingForm?.addEventListener("submit", startOnboarding);
    startJourneyBtn?.addEventListener("click", startJourney);

    navAgeSelect?.addEventListener("change", () => {
        const newAgeGroup = navAgeSelect.value;

        if (!["8-12", "13-17"].includes(newAgeGroup)) return;

        currentUser.ageGroup = newAgeGroup;
        currentUser.currentLevel = "easy";
        currentUser.questionIndex = 0;

        saveUserData();
        renderDemos();
        updateHeroAgeTag();

        if (document.querySelector("#practice-page.active-page")) {
            loadScenario();
        }
    });

    navLevelSelect?.addEventListener("change", () => {
        const requestedLevel = navLevelSelect.value;

        if (!isLevelUnlocked(requestedLevel)) {
            navLevelSelect.value = currentUser.currentLevel;
            alert(t("lockedLevel"));
            return;
        }

        currentUser.currentLevel = requestedLevel;
        currentUser.questionIndex = 0;

        saveUserData();

        if (document.querySelector("#practice-page.active-page")) {
            loadScenario();
        }
    });

    optionBtns.forEach((button) => {
        button.addEventListener("click", () => {
            handleAnswer(button.dataset.answer, button);
        });
    });

    nextBtn?.addEventListener("click", () => {
        if (!answerSubmitted) {
            alert(t("chooseAnswer"));
            return;
        }

        currentUser.questionIndex += 1;
        saveUserData();
        loadScenario();
    });

    $("unlock-level2-btn")?.addEventListener("click", goToNextLevel);

    themeToggleBtn?.addEventListener("click", () => {
        setTheme(currentTheme === "light" ? "dark" : "light");
    });

    langToggleBtn?.addEventListener("click", () => {
        setLanguage(currentLang === "en" ? "ar" : "en");
    });

    resetBtn?.addEventListener("click", resetProgress);
    const certificateButton = $("download-cert-btn");

certificateButton?.addEventListener("click", () => {
    window.print();
});

    contactForm?.addEventListener("submit", (event) => {
        event.preventDefault();
        alert(t("contactSuccess"));
        contactForm.reset();
    });

// Find the Evidence
    const evidenceOptions = all("[data-evidence]");
    const evidenceFeedback = $("evidence-feedback");

    evidenceOptions.forEach((button) => {
        button.addEventListener("click", () => {
            const isCorrect = button.dataset.evidence === "B";

            evidenceFeedback.textContent = isCorrect
                ? "Correct! An official school announcement is strong evidence."
                : "Not quite! Likes and shares do not prove that information is true. Check the school's official announcement.";

            evidenceFeedback.classList.remove("hidden");

            evidenceOptions.forEach((option) => {
                option.disabled = true;
            });
        });
    });

    

     // --------------------------------------------
    // Initial setup
    // --------------------------------------------

    loadSettings();
    loadUser();

    setTheme(currentTheme);
    setLanguage(currentLang);
    updateUserStats();
    updateLevelLocks();
 updateBadgesDisplay();
    renderDemos();
    updateHeroAgeTag();
    setupLab();
    setupDropdown();

    welcomeModal?.classList.add("hidden");
});