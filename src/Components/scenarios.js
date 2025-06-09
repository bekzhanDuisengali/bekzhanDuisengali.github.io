const scenarios = [
    {
        level: "Beginner",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "My Favorite Movie",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite movie is... (назови фильм)",
                    "I like this movie because... (объясни причину)",
                    "The main character is... (опиши главного героя)",
                    "The story is about... (коротко расскажи сюжет)",
                    "I watched this movie with... (с кем смотрел)",
                    "I recommend this movie because... (почему советуешь)"
                ]
            },
            {
                title: "Animated Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I like animated movies. My favorite is... (назови мультфильм)",
                    "The animation style is... (например, 3D, рисованное)",
                    "The main characters are... (перечисли)",
                    "The funniest moment in the movie is...",
                    "I watched this movie when I was... (возраст)",
                    "Would you like to watch it? (спроси у собеседника)"
                ]
            },
            {
                title: "Watching a Movie in a Cinema",
                topic: "Movies & TV Shows",
                content: [
                    "The last time I went to the cinema was... (когда?)",
                    "I watched... (название фильма)",
                    "I went with... (с кем?)",
                    "The best thing about the cinema experience was... (что понравилось)",
                    "The popcorn was... (вкус или впечатление)",
                    "I want to go again to watch... (что хочешь посмотреть)"
                ]
            },
            {
                title: "Talking about a TV Show",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite TV show is... (название)",
                    "The main characters are... (персонажи)",
                    "It is about... (о чём шоу?)",
                    "I watch it on... (платформа)",
                    "I like it because... (почему нравится)",
                    "I recommend it to people who... (кому советуешь)"
                ]
            },
            {
                title: "My First Movie",
                topic: "Movies & TV Shows",
                content: [
                    "The first movie I remember watching is... (название)",
                    "I watched it when I was... (возраст)",
                    "It was about... (сюжет)",
                    "I watched it with... (с кем?)",
                    "I liked it because... (что понравилось)",
                    "Now I want to watch it again because... (почему хочешь пересмотреть)"
                ]
            },
            {
                title: "Action Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I like action movies. My favorite is... (название)",
                    "The main hero is... (главный герой)",
                    "The best scene is when... (опиши сцену)",
                    "There is a lot of... (например: fighting, shooting, chasing)",
                    "I watched this movie... (когда?)",
                    "Would you like to watch it? (вопрос к собеседнику)"
                ]
            },
            {
                title: "Horror Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I (don’t) like horror movies. (укажи своё мнение)",
                    "The scariest movie I watched is... (название)",
                    "The scariest part was when... (опиши момент)",
                    "I watched it with... (с кем?)",
                    "I felt... (эмоции)",
                    "Do you like horror movies? (вопрос)"
                ]
            },
            {
                title: "Comedy Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I like comedy movies because... (почему нравятся)",
                    "My favorite comedy is... (название)",
                    "The funniest scene is when... (опиши момент)",
                    "The actors in this movie are... (какие?)",
                    "I laughed a lot because... (причина)",
                    "Do you like comedies? (вопрос)"
                ]
            },
            {
                title: "Movies vs. TV Shows",
                topic: "Movies & TV Shows",
                content: [
                    "I like watching... (movies / TV shows more)",
                    "... are better because... (объясни)",
                    "My favorite TV show is... (если выбираешь шоу)",
                    "My favorite movie is... (если выбираешь фильмы)",
                    "I usually watch them on... (где?)",
                    "What do you like more? (вопрос)"
                ]
            },
            {
                title: "Future Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I want to watch... (фильм)",
                    "It will be released in... (когда?)",
                    "It is about... (сюжет)",
                    "The main actors are... (актёры)",
                    "I will watch it with... (с кем?)",
                    "Are you excited about any upcoming movies? (вопрос)"
                ]
            }
        ],
    }, //music and tv show
    {
        level: "Beginner",
        topic: "Daily Life",
        scenarios: [
            {
                title: "My Morning Routine",
                topic: "Daily Life",
                content: [
                    "I wake up at... (во сколько просыпаешься)",
                    "I brush my teeth and... (следующее действие)",
                    "Then I eat... for breakfast.",
                    "After that, I... (что делаешь до выхода)",
                    "I leave home at... and go to... (школа, работа, др.)",
                    "My mornings are usually... (короткое описание)"
                ]
            },
            {
                title: "A Day at School or Work",
                topic: "Daily Life",
                content: [
                    "On weekdays, I go to... (школа/работа)",
                    "I start at... and finish at...",
                    "I study/work with... (один или несколько человек?)",
                    "My favorite part of the day is... (объясни почему)",
                    "I eat lunch at...",
                    "After school/work, I usually..."
                ]
            },
            {
                title: "What I Do on Weekends",
                topic: "Daily Life",
                content: [
                    "On weekends, I don’t go to school/work.",
                    "I usually... (чем занимаешься?)",
                    "Sometimes I meet my friends or...",
                    "I like to relax by... (что помогает отдыхать)",
                    "My weekends are... (прилагательное)",
                    "I wish I had more time to..."
                ]
            },
            {
                title: "My Evening Routine",
                topic: "Daily Life",
                content: [
                    "In the evening, I come home at...",
                    "I eat dinner with... (кем)",
                    "After dinner, I usually... (читаешь, смотришь, играешь?)",
                    "At night, I take a shower and...",
                    "I go to bed at...",
                    "Before sleep, I like to..."
                ]
            },
            {
                title: "Grocery Shopping",
                topic: "Daily Life",
                content: [
                    "I go shopping at... (где?)",
                    "I usually buy... (назови 3-5 вещей)",
                    "I like to cook... so I always buy...",
                    "Shopping is... for me (fun/boring/easy/hard)",
                    "I sometimes forget to buy...",
                    "I shop alone or with..."
                ]
            },
            {
                title: "Cleaning My Room",
                topic: "Daily Life",
                content: [
                    "I clean my room every... (день недели?)",
                    "First, I... (уборка начинается с чего?)",
                    "Then I vacuum and...",
                    "I don’t like cleaning, but I like a clean room.",
                    "I listen to music while I clean.",
                    "My room is usually..."
                ]
            },
            {
                title: "My Favorite Meal",
                topic: "Daily Life",
                content: [
                    "I really like to eat... (блюдо)",
                    "I eat it for breakfast/lunch/dinner.",
                    "I know how to cook it / My mom cooks it.",
                    "It has... (ингредиенты)",
                    "It tastes... (вкусовые описания)",
                    "I eat it with..."
                ]
            },
            {
                title: "Getting Ready to Go Out",
                topic: "Daily Life",
                content: [
                    "When I go out, I put on... (одежда)",
                    "I check the weather and...",
                    "I take my phone, keys, and...",
                    "Sometimes I wait for the bus / walk / drive.",
                    "Before I leave, I always...",
                    "I feel... when I go out."
                ]
            },
            {
                title: "Talking with My Family",
                topic: "Daily Life",
                content: [
                    "In the evening, I talk with my...",
                    "We talk about... (работа, школа, новости?)",
                    "Sometimes we eat and talk at the same time.",
                    "I like to hear stories from...",
                    "Talking with my family makes me feel...",
                    "We laugh a lot when..."
                ]
            },
            {
                title: "Using My Phone",
                topic: "Daily Life",
                content: [
                    "I use my phone every day.",
                    "I check messages and...",
                    "I use Instagram / TikTok / YouTube /...",
                    "I spend about... hours a day on my phone.",
                    "Sometimes I use it too much.",
                    "My favorite app is..."
                ]
            }
        ]
    }, //daily life
    {
        level: "Beginner",
        topic: "Food & Cooking",
        scenarios: [
            {
                title: "My Favorite Food",
                topic: "Food & Cooking",
                content: [
                    "My favorite food is... (назови блюдо)",
                    "I like it because... (почему оно тебе нравится)",
                    "I eat it... (когда или как часто ты его ешь)",
                    "I can / can't cook it.",
                    "I watched this movie with... (с кем смотрел)",
                    "I eat it with... (с кем или с чем ты ешь это блюдо)"
                ]
            },
            {
                title: "What I Had for Breakfast",
                topic: "Food & Cooking",
                content: [
                    "My favorite food is... (назови блюдо)",
                    "I like it because... (почему оно тебе нравится)",
                    "I eat it... (когда или как часто ты его ешь)",
                    "I can / can't cook it.",
                    "I eat it with... (с кем или с чем ты ешь это блюдо)"
                ]
            },
            {
                title: "Going to a Restaurant",
                topic: "Food & Cooking",
                content: [
                    "I go to restaurants... (how often)",
                    "My favorite restaurant is...",
                    "I like to order...",
                    "I go there with...",
                    "The food there is..."
                ]
            },
            {
                title: "Cooking at Home",
                topic: "Food & Cooking",
                content: [
                    "I can cook...",
                    "I cook with... (ингредиенты)",
                    "I cook for... (для кого готовишь)",
                    "I like cooking because...",
                    "Sometimes I cook with..."
                ]
            },
            {
                title: "Trying New Foods",
                topic: "Food & Cooking",
                content: [
                    "Last time I tried...",
                    "It was... (вкус)",
                    "I liked / didn’t like it.",
                    "I want to try...",
                    "I’m afraid to try..."
                ]
            },
            {
                title: "Shopping for Groceries",
                topic: "Food & Cooking",
                content: [
                    "I buy food at...",
                    "I usually buy...",
                    "I go shopping on...",
                    "I like / don’t like shopping for food.",
                    "I go shopping with..."
                ]
            },
            {
                title: "A Typical Dinner in My Country",
                topic: "Food & Cooking",
                content: [
                    "People eat... for dinner.",
                    "We drink...",
                    "Dinner is usually at...",
                    "My family eats dinner at...",
                    "It’s a big / small meal."
                ]
            },
            {
                title: "What’s in My Fridge",
                topic: "Food & Cooking",
                content: [
                    "In my fridge, I have...",
                    "I always have...",
                    "I never have...",
                    "I need to buy...",
                    "My favorite thing in the fridge is..."
                ]
            },
            {
                title: "Healthy or Unhealthy?",
                topic: "Food & Cooking",
                content: [
                    "I think... is healthy.",
                    "I think... is not healthy.",
                    "I eat healthy food like...",
                    "I eat junk food like...",
                    "I try to eat..."
                ]
            },
            {
                title: "My Dream Meal",
                topic: "Food & Cooking",
                content: [
                    "My dream meal is...",
                    "It has... (ингредиенты)",
                    "I eat it in... (где)",
                    "I eat it with... (с кем)",
                    "It is... (вкус, настроение)"
                ]
            }
        ],
    }, //food cooking
    {
        level: "Beginner",
        topic: "Technology & Innovation",
        scenarios: [
            {
                title: "What is Technology?",
                topic: "Technology & Innovation",
                content: [
                    "Technology is something we use every day to make our lives easier. For example, my phone is a technology that helps me to...",
                    "Some other types of technology are... (e.g., computers, televisions, cars).",
                    "I think technology is important because it helps us to...",
                    "Can you think of a technology that you use every day?",
                    "How do you think technology will change in the future?"
                ]
            },
            {
                title: "My Favorite Gadget",
                topic: "Technology & Innovation",
                content: [
                    "My favorite gadget is... (e.g., smartphone, tablet, laptop).",
                    "I use it for... (e.g., calling friends, browsing the internet, playing games).",
                    "It is useful because...",
                    "I also like this gadget because it helps me to stay organized, for example...",
                    "I can't imagine my life without it. What about you? What gadget do you like the most?"
                ]
            },
            {
                title: "The Internet",
                topic: "Technology & Innovation",
                content: [
                    "The internet is a system that connects computers all over the world. We use it to... (e.g., look for information, watch videos, talk to people).",
                    "One of the most popular websites is...",
                    "I use the internet every day for...",
                    "Do you think the internet has made our lives better? Why or why not?",
                    "What websites do you visit the most?"
                ]
            },
            {
                title: "Social Media",
                topic: "Technology & Innovation",
                content: [
                    "Social media is a part of technology that lets people share information and talk to each other online. Popular platforms include... (e.g., Instagram, Facebook, Twitter).",
                    "I use social media to... (e.g., stay in touch with friends, share photos).",
                    "Social media is good because...",
                    "But sometimes it can also be bad because...",
                    "How do you use social media?"
                ]
            },
            {
                title: "Robots in Our Lives",
                topic: "Technology & Innovation",
                content: [
                    "Robots are machines that can do many things like work, clean, or even talk to people. Some robots are used in factories to help make products, while others are used at home for... (e.g., cleaning the house, cooking).",
                    "I think robots will help us in the future by...",
                    "What do you think robots will do in the future?",
                    "Would you like to have a robot at home? Why or why not?"
                ]
            },
            {
                title: "Smartphones",
                topic: "Technology & Innovation",
                content: [
                    "Smartphones are small computers that we carry with us. They help us to make calls, send messages, and do many other things.",
                    "My smartphone has... (e.g., a camera, games, music).",
                    "I use it for...",
                    "Smartphones are useful because...",
                    "Do you like using your smartphone? What do you usually do with it?"
                ]
            },
            {
                title: "Video Games",
                topic: "Technology & Innovation",
                content: [
                    "Video games are a popular form of entertainment. People play them on... (e.g., computers, consoles, phones).",
                    "Some games are about... (e.g., adventures, sports, puzzles).",
                    "I enjoy playing video games because...",
                    "Do you like video games? What kind of games do you like?",
                    "Do you think video games are good or bad for people?"
                ]
            },
            {
                title: "Online Shopping",
                topic: "Technology & Innovation",
                content: [
                    "Online shopping is a way to buy things from the internet. Popular websites for shopping include... (e.g., Amazon, eBay).",
                    "I use online shopping to buy... (e.g., clothes, books, electronics).",
                    "Online shopping is good because...",
                    "But it can also be bad because...",
                    "Do you prefer shopping online or in stores? Why?"
                ]
            },
            {
                title: "Learning with Technology",
                topic: "Technology & Innovation",
                content: [
                    "Technology is also used in schools to help students learn. For example, we can use computers or tablets to...",
                    "I think learning with technology is helpful because...",
                    "It makes learning more interesting and fun.",
                    "Do you like using technology for studying? What tools do you use to learn better?"
                ]
            },
            {
                title: "The Future of Technology",
                topic: "Technology & Innovation",
                content: [
                    "In the future, technology will be even more advanced. For example, there may be... (e.g., self-driving cars, flying drones).",
                    "I think technology will help us to... (e.g., travel faster, stay healthier, communicate better).",
                    "Do you think technology will be good or bad for the future?",
                    "What technology would you like to see in the future?"
                ]
            }
        ]
    }, //technology and communication
    {
        level: "Beginner",
        topic: "Music & Arts",
        scenarios: [
            {
                title: "My Favorite Music Genre",
                topic: "Music & Arts",
                content: [
                    "My favorite music genre is... (назови жанр музыки)",
                    "I like this genre because... (почему тебе нравится этот жанр)",
                    "Some of my favorite artists in this genre are... (перечисли любимых исполнителей)",
                    "I usually listen to this music when... (когда ты слушаешь такую музыку)",
                    "What is your favorite music genre?"
                ]
            },
            {
                title: "Playing a Musical Instrument",
                topic: "Music & Arts",
                content: [
                    "I play the... (назови инструмент, если ты играешь на нем)",
                    "I started playing it when I was... (когда ты начал играть)",
                    "I like playing this instrument because... (почему тебе нравится играть на этом инструменте)",
                    "I practice... (сколько времени ты обычно тренируешься)",
                    "Do you play any musical instruments?"
                ]
            },
            {
                title: "A Famous Musician I Admire",
                topic: "Music & Arts",
                content: [
                    "A famous musician I admire is... (назови музыканта)",
                    "I admire this musician because... (почему ты восхищаешься этим музыкантом)",
                    "This musician’s music is... (опиши музыку этого исполнителя)",
                    "I first heard about this musician when... (когда ты впервые узнал о нем)",
                    "Who is your favorite musician?"
                ]
            },
            {
                title: "A Concert I Went To",
                topic: "Music & Arts",
                content: [
                    "Last year, I went to a concert by... (назови исполнителя/группу)",
                    "It was held at... (где прошел концерт)",
                    "The concert was amazing because... (почему тебе понравился концерт)",
                    "I went there with... (с кем ты ходил на концерт)",
                    "Do you like going to concerts?"
                ]
            },
            {
                title: "A Piece of Art I Like",
                topic: "Music & Arts",
                content: [
                    "One of my favorite pieces of art is... (назови картину или скульптуру)",
                    "It was painted by... (кто автор произведения)",
                    "I like this piece because... (почему тебе нравится эта работа)",
                    "I first saw it in... (где ты впервые увидел это произведение)",
                    "What kind of art do you like?"
                ]
            },
            {
                title: "A Movie with Great Music",
                topic: "Music & Arts",
                content: [
                    "A movie with great music is... (назови фильм)",
                    "The soundtrack of this movie is... (как ты оцениваешь музыку в фильме)",
                    "My favorite song from the movie is... (назови любимую песню из фильма)",
                    "I like this movie because... (почему тебе нравится этот фильм)",
                    "Do you have a favorite movie soundtrack?"
                ]
            },
            {
                title: "Visiting an Art Gallery",
                topic: "Music & Arts",
                content: [
                    "I once visited an art gallery in... (назови город или страну)",
                    "The gallery had a lot of... (что было в галерее: картины, скульптуры и т.д.)",
                    "I saw a painting by... (назови художника, если запомнил)",
                    "The artwork that caught my attention was... (какое произведение искусства тебя заинтересовало)",
                    "Do you enjoy visiting art galleries?"
                ]
            },
            {
                title: "My Favorite Song",
                topic: "Music & Arts",
                content: [
                    "My favorite song is... (назови песню)",
                    "I like it because... (почему эта песня тебе нравится)",
                    "I first heard it when... (когда ты впервые услышал эту песню)",
                    "I listen to this song when... (когда ты любишь слушать эту песню)",
                    "What is your favorite song?"
                ]
            },
            {
                title: "Watching a Dance Performance",
                topic: "Music & Arts",
                content: [
                    "I once watched a dance performance by... (назови танцевальную группу или исполнителя)",
                    "The performance was held at... (где это было)",
                    "I really enjoyed it because... (почему тебе понравилось)",
                    "I went to the performance with... (с кем ты ходил на представление)",
                    "Do you like watching dance performances?"
                ]
            },
            {
                title: "Drawing or Painting",
                topic: "Music & Arts",
                content: [
                    "I like to draw/paint because... (почему тебе нравится рисовать или писать картины)",
                    "I usually draw/paint things like... (что ты обычно рисуешь или пишешь)",
                    "I started drawing/painting when I was... (когда ты начал рисовать или писать)",
                    "I use materials like... (какие материалы ты используешь для рисования)",
                    "Do you like drawing or painting?"
                ]
            }
        ]
    }, // music and arts
    {
        level: "Beginner",
        topic: "Travel & Adventures",
        scenarios: [
            {
                title: "My Favorite Place to Visit",
                topic: "Travel & Adventures",
                content: [
                    "My favorite place to visit is... (назови место)",
                    "I like this place because... (объясни причину)",
                    "It is located in... (где оно находится)",
                    "I went there with... (с кем ездил)",
                    "I saw... (что увидел)",
                    "I want to go there again because... (почему хочешь поехать снова)"
                ]
            },
            {
                title: "My First Trip",
                topic: "Travel & Adventures",
                content: [
                    "My first trip was to... (куда)",
                    "I traveled with... (с кем)",
                    "We went there by... (транспорт)",
                    "I stayed in... (где жил)",
                    "I felt... (чувства)",
                    "It was a good trip because... (почему понравилось)"
                ]
            },
            {
                title: "Traveling by Plane",
                topic: "Travel & Adventures",
                content: [
                    "I traveled by plane to... (куда)",
                    "The flight was... (опиши полёт)",
                    "I sat near... (место в самолёте)",
                    "I ate... (что ел)",
                    "The view from the window was... (что видел в иллюминатор)",
                    "I like flying because... (почему нравится)"
                ]
            },
            {
                title: "A Trip to the Beach",
                topic: "Travel & Adventures",
                content: [
                    "I went to the beach in... (название места)",
                    "The weather was... (погода)",
                    "I swam in... (где купался)",
                    "I played... (во что играл)",
                    "I ate... (что ел)",
                    "I liked the beach because... (почему понравилось)"
                ]
            },
            {
                title: "Dream Vacation",
                topic: "Travel & Adventures",
                content: [
                    "I want to go to... (куда мечтаешь поехать)",
                    "I want to go there because... (почему)",
                    "I will travel by... (как доберёшься)",
                    "I will see... (что хочешь увидеть)",
                    "I will eat... (что хочешь попробовать)",
                    "This is my dream vacation because... (почему это мечта)"
                ]
            },
            {
                title: "A Trip with My Family",
                topic: "Travel & Adventures",
                content: [
                    "I traveled with my family to... (куда)",
                    "We went there in... (как добрались)",
                    "We stayed in... (где жили)",
                    "We visited... (что посмотрели)",
                    "We had fun doing... (что делали)",
                    "I enjoyed this trip because... (почему понравилось)"
                ]
            },
            {
                title: "My Backpacking Adventure",
                topic: "Travel & Adventures",
                content: [
                    "I went backpacking in... (куда)",
                    "I packed... (что взял с собой)",
                    "I walked for... (сколько шёл)",
                    "I met... (кого встретил)",
                    "I saw... (что увидел)",
                    "It was a good adventure because... (почему)"
                ]
            },
            {
                title: "My Travel Bag",
                topic: "Travel & Adventures",
                content: [
                    "When I travel, I pack... (что берёшь)",
                    "I always take... (что обязательно берёшь)",
                    "I use a... (опиши рюкзак или чемодан)",
                    "My bag is... (размер/вес)",
                    "It helps me because... (почему удобна)",
                    "Packing is easy for me because... (объясни)"
                ]
            },
            {
                title: "A Train Journey",
                topic: "Travel & Adventures",
                content: [
                    "I took a train to... (куда)",
                    "The trip was... (опиши поездку)",
                    "I saw... (что увидел)",
                    "I sat next to... (с кем ехал)",
                    "I ate... (что ел)",
                    "I liked the train because... (почему)"
                ]
            },
            {
                title: "A City I Want to Visit",
                topic: "Travel & Adventures",
                content: [
                    "I want to visit... (город)",
                    "It is in... (страна)",
                    "I like this city because... (причина)",
                    "I want to see... (что хочешь посмотреть)",
                    "I want to try... (местная еда)",
                    "I hope to go there... (когда)"
                ]
            }
        ]
    }, // travel and adventures
    {
        level: "Beginner",
        topic: "Sports & Fitness",
        scenarios: [
            {
                title: "My Favorite Sport",
                topic: "Sports & Fitness",
                content: [
                    "My favorite sport is... (назови любимый спорт)",
                    "I like this sport because... (почему тебе нравится этот спорт)",
                    "I usually play this sport... (как часто ты занимаешься этим спортом)",
                    "My favorite team/player in this sport is... (назови любимую команду или игрока)",
                    "I think this sport is great because... (почему этот спорт тебе нравится)"
                ]
            },
            {
                title: "Exercising at the Gym",
                topic: "Sports & Fitness",
                content: [
                    "I go to the gym... (как часто ты ходишь в спортзал)",
                    "In the gym, I usually do... (что ты обычно делаешь в спортзале)",
                    "My favorite exercise is... (твоё любимое упражнение)",
                    "I like going to the gym because... (почему тебе нравится ходить в спортзал)",
                    "I usually feel... after exercising (как ты себя чувствуешь после тренировки)"
                ]
            },
            {
                title: "Staying Healthy",
                topic: "Sports & Fitness",
                content: [
                    "To stay healthy, I try to... (что ты делаешь, чтобы быть здоровым)",
                    "I think it’s important to... (что важно для здоровья)",
                    "I eat... to keep my body strong (что ты ешь, чтобы быть в форме)",
                    "I also like to... (что ты ещё делаешь для здоровья)",
                    "My fitness goal is... (твоя цель в фитнесе)"
                ]
            },
            {
                title: "Sports I Want to Try",
                topic: "Sports & Fitness",
                content: [
                    "I would like to try... (спорт, который ты хочешь попробовать)",
                    "I think this sport would be fun because... (почему ты думаешь, что этот спорт будет интересным)",
                    "I have never tried this sport before, but... (я никогда не пробовал этот спорт, но...)",
                    "I would need to... to try this sport (что нужно сделать, чтобы попробовать этот спорт)",
                    "I think I could be good at it because... (почему ты думаешь, что у тебя получится)"
                ]
            },
            {
                title: "Watching Sports",
                topic: "Sports & Fitness",
                content: [
                    "I like to watch sports on TV because... (почему тебе нравится смотреть спорт по телевизору)",
                    "My favorite sport to watch is... (какой спорт ты любишь смотреть)",
                    "I usually watch sports with... (с кем ты обычно смотришь спорт)",
                    "The last game I watched was... (какая последняя игра, которую ты смотрел)",
                    "I enjoy watching this sport because... (почему тебе нравится смотреть этот спорт)"
                ]
            },
            {
                title: "Playing Football",
                topic: "Sports & Fitness",
                content: [
                    "I play football with... (с кем ты играешь в футбол)",
                    "In football, there are two teams. One team has... (сколько игроков в каждой команде)",
                    "I enjoy playing football because... (почему тебе нравится играть в футбол)",
                    "My favorite position in football is... (твоя любимая позиция в футболе)",
                    "I think football is exciting because... (почему футбол тебе кажется захватывающим)"
                ]
            },
            {
                title: "Running",
                topic: "Sports & Fitness",
                content: [
                    "I like to run because... (почему тебе нравится бегать)",
                    "I usually run in... (где ты обычно бегал)",
                    "I try to run... times a week (сколько раз в неделю ты бегаешь)",
                    "I think running helps me... (как бег помогает тебе)",
                    "My running goal is to... (твоя цель в беге)"
                ]
            },
            {
                title: "Fitness Goals",
                topic: "Sports & Fitness",
                content: [
                    "My fitness goal is to... (твоя цель в фитнесе)",
                    "To reach this goal, I plan to... (как ты планируешь достичь своей цели)",
                    "I think it will take... (сколько времени, по твоему мнению, это займет)",
                    "I track my progress by... (как ты отслеживаешь свой прогресс)",
                    "I believe that with... I can reach my goal (что тебе нужно для достижения своей цели)"
                ]
            },
            {      title: "Healthy Lifestyle",
                topic: "Sports & Fitness",
                content: [
                    "I believe that a healthy lifestyle is important because... (почему ты считаешь важным здоровый образ жизни)",
                    "To stay healthy, I focus on... (что ты делаешь для поддержания здоровья)",
                    "I avoid... to stay healthy (что ты избегает для здоровья)",
                    "I think regular exercise is essential because... (почему регулярные тренировки важны)",
                    "I also make sure to... for a healthy lifestyle (что ещё ты делаешь для здорового образа жизни)"
                ]
            },
            {
                title: "Favorite Athlete",
                topic: "Sports & Fitness",
                content: [
                    "My favorite athlete is... (назови любимого спортсмена)",
                    "They are good at... (в чём этот спортсмен хорош)",
                    "I admire them because... (почему ты ими восхищаешься)",
                    "I first saw this athlete when... (когда ты впервые увидел этого спортсмена)",
                    "I think they are successful because... (почему ты считаешь, что этот спортсмен успешен)"
                ]
            }
        ]
    }, // sport and fitness
    {
        level: "Beginner",
        topic: "Science & Nature",
        scenarios: [
            {
                title: "Your Favorite Animal",
                topic: "Science & Nature",
                content: [
                    "What is your favorite animal?",
                    "Why do you like it?",
                    "What does it look like and where does it live?"
                ]
            },
            {
                title: "The Weather Today",
                topic: "Science & Nature",
                content: [
                    "What is the weather like today?",
                    "Is it sunny, rainy, or cloudy?",
                    "What kind of weather do you like the most and why?"
                ]
            },
            {
                title: "The Seasons",
                topic: "Science & Nature",
                content: [
                    "There are four seasons in a year: winter, spring, summer, and autumn.",
                    "Which season is your favorite?",
                    "What activities do you like to do during this season?"
                ]
            },
            {
                title: "Plants and Trees",
                topic: "Science & Nature",
                content: [
                    "What kinds of plants or trees do you see around your home or city?",
                    "Do you have any plants at home?",
                    "What plants do you like the most and why?"
                ]
            },
            {
                title: "Space Exploration",
                topic: "Science & Nature",
                content: [
                    "Do you think people will go to space in the future?",
                    "What do you think life will be like on other planets?",
                    "Would you like to travel to space one day?"
                ]
            },
            {
                title: "Your Favorite Element",
                topic: "Science & Nature",
                content: [
                    "There are many elements in nature, like water, air, and fire.",
                    "Which element do you like the most?",
                    "Why is this element important for life on Earth?"
                ]
            },
            {
                title: "Animals and Their Habitats",
                topic: "Science & Nature",
                content: [
                    "Different animals live in different places.",
                    "Can you name an animal and tell me where it lives?",
                    "Why do you think this animal lives in that place?"
                ]
            },
            {
                title: "Pollution",
                topic: "Science & Nature",
                content: [
                    "Pollution is a big problem for the planet.",
                    "What types of pollution do you know about?",
                    "What can we do to reduce pollution and help the environment?"
                ]
            },
            {
                title: "Natural Disasters",
                topic: "Science & Nature",
                content: [
                    "Natural disasters include earthquakes, floods, and hurricanes.",
                    "Have you ever experienced a natural disaster?",
                    "What do you think we should do to stay safe during such events?"
                ]
            },
            {
                title: "Recycling",
                topic: "Science & Nature",
                content: [
                    "Recycling helps protect the environment.",
                    "What types of things can be recycled?",
                    "Do you recycle at home? If not, what can you start recycling?"
                ]
            }
        ]
    }, // science and nature
    {
        level: "Beginner",
        topic: "Language Learning",
        scenarios: [
            {
                title: "My Favorite Word",
                topic: "Language Learning",
                content: [
                    "My favorite word in English is... (назови слово)",
                    "I like this word because... (объясни почему)",
                    "I first heard it when... (когда услышал впервые)",
                    "I use this word when... (в какой ситуации используешь)"
                ]
            },
            {
                title: "How I Study English",
                topic: "Language Learning",
                content: [
                    "I study English at... (школа, курсы, онлайн и т.д.)",
                    "I learn new words by... (способ)",
                    "I practice speaking with... (с кем разговариваешь)",
                    "My favorite way to learn is... (объясни)"
                ]
            },
            {
                title: "My First English Lesson",
                topic: "Language Learning",
                content: [
                    "My first English lesson was... (когда?)",
                    "I felt... (эмоции)",
                    "I learned... (что выучил)",
                    "Now I can... (что умеешь делать)"
                ]
            },
            {
                title: "English in My Country",
                topic: "Language Learning",
                content: [
                    "In my country, people learn English at... (где?)",
                    "English is important because... (причина)",
                    "Many people use English for... (цель)",
                    "I think English is... (мнение)"
                ]
            },
            {
                title: "My Favorite English Song",
                topic: "Language Learning",
                content: [
                    "My favorite English song is... (название)",
                    "The singer is... (кто поет)",
                    "I like it because... (почему нравится)",
                    "This song helped me learn... (что выучил из неё)"
                ]
            },
            {
                title: "New Words I Learned This Week",
                topic: "Language Learning",
                content: [
                    "This week I learned these new words:... (назови 3–5 слов)",
                    "I use them when I... (ситуация)",
                    "I learned them from... (откуда узнал)",
                    "It was easy/difficult because... (объясни)"
                ]
            },
            {
                title: "Practicing with Friends",
                topic: "Language Learning",
                content: [
                    "I practice English with... (имя или 'my friend')",
                    "We talk about... (темы)",
                    "Sometimes we... (что делаете вместе)",
                    "It helps me because... (объясни)"
                ]
            },
            {
                title: "My English Alphabet",
                topic: "Language Learning",
                content: [
                    "I can say the English alphabet.",
                    "The easiest letter for me is... (буква)",
                    "The hardest letter is... (буква)",
                    "I practice letters by... (как тренируешь)"
                ]
            },
            {
                title: "English Words Around Me",
                topic: "Language Learning",
                content: [
                    "In my house, I see English words on... (где?)",
                    "I know the English words for... (названия предметов)",
                    "It helps me because... (как помогает)",
                    "I want to learn more words like... (примеры)"
                ]
            },
            {
                title: "My Dream in English",
                topic: "Language Learning",
                content: [
                    "One day, I want to... (что хочешь сделать на английском)",
                    "I need English because... (зачем тебе язык)",
                    "I will study by... (как будешь учить)",
                    "I believe I can... (во что веришь)"
                ]
            }
        ]
    }, // language learning
    {
        level: "Beginner",
        topic: "Business & Career",
        scenarios: [
            {
                title: "Your Dream Job",
                topic: "Business & Career",
                content: [
                    "What is your dream job?",
                    "What do you think you need to do to get this job?",
                    "How would you feel if you get your dream job?",
                    "What skills are important for this job?"
                ]
            },
            {
                title: "Job Interview",
                topic: "Business & Career",
                content: [
                    "Have you ever had a job interview?",
                    "What questions did they ask you?",
                    "How did you feel before and after the interview?",
                    "What do you think is the most important part of an interview?"
                ]
            },
            {
                title: "The Importance of Education",
                topic: "Business & Career",
                content: [
                    "Do you think education is important for a good career?",
                    "What subjects do you think are useful for business jobs?",
                    "Do you want to continue studying in the future?",
                    "What is your opinion about online courses or training?"
                ]
            },
            {
                title: "Your Current Job",
                topic: "Business & Career",
                content: [
                    "What is your current job?",
                    "Do you enjoy working there? Why or why not?",
                    "What do you do at your job every day?",
                    "What would you change about your work environment?"
                ]
            },
            {
                title: "Work-Life Balance",
                topic: "Business & Career",
                content: [
                    "How important is it to have a balance between work and personal life?",
                    "What activities do you enjoy outside of work?",
                    "How do you relax after a busy workday?",
                    "Do you think it’s difficult to find time for yourself when working?"
                ]
            },
            {
                title: "Working with Others",
                topic: "Business & Career",
                content: [
                    "Do you prefer working alone or with a team?",
                    "Why do you like working that way?",
                    "What are the advantages of teamwork?",
                    "How do you deal with disagreements or conflicts at work?"
                ]
            },
            {
                title: "Skills for Success",
                topic: "Business & Career",
                content: [
                    "What skills do you think are important for success in business?",
                    "Do you think communication is important in your job?",
                    "How do you improve your skills?",
                    "What is the most valuable skill you have learned so far?"
                ]
            },
            {
                title: "Entrepreneurship",
                topic: "Business & Career",
                content: [
                    "Would you like to start your own business?",
                    "What kind of business would you like to create?",
                    "What challenges do you think entrepreneurs face?",
                    "What is the first step to starting a business?"
                ]
            },
            {
                title: "Work Experience",
                topic: "Business & Career",
                content: [
                    "Do you have any work experience?",
                    "What was your first job?",
                    "What did you learn from that experience?",
                    "Do you want to gain more work experience in the future?"
                ]
            },
            {
                title: "Networking",
                topic: "Business & Career",
                content: [
                    "What is networking?",
                    "How do you meet new people in your career?",
                    "Do you think networking is important? Why or why not?",
                    "How do you stay in touch with people you meet at work or events?"
                ]
            }
        ]
    },

    {
        level: "Elementary",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "My Favorite Movie",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite movie is... (название фильма)",
                    "It is a (genre: comedy, action, drama, etc.) movie.",
                    "The main character is... (имя главного героя)",
                    "The movie is about... (короткое описание сюжета)",
                    "I like this movie because... (причина)",
                    "Have you seen this movie? What do you think about it?"
                ]
            },
            {
                title: "Movie Night",
                topic: "Movies & TV Shows",
                content: [
                    "I like to watch movies at (home / the cinema).",
                    "I usually watch movies with... (friends, family, alone).",
                    "My favorite place to watch movies is... (на диване, в кинотеатре).",
                    "I usually eat... (popcorn, chips, pizza) when I watch movies.",
                    "What do you like to eat when you watch movies?"
                ]
            },
            {
                title: "TV Shows I Watch",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite TV show is... (название).",
                    "It is about... (короткое описание).",
                    "The main character is... (имя персонажа).",
                    "I watch it (every day, once a week).",
                    "Do you watch any TV shows? Which one is your favorite?"
                ]
            },
            {
                title: "Talking About a Movie Scene",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite scene in the movie is...",
                    "In this scene, the character... (короткое описание сцены).",
                    "I like this scene because... (объяснение).",
                    "What is your favorite scene in a movie?"
                ]
            },
            {
                title: "Animated Movies",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite animated movie is... (название).",
                    "It is about... (короткое описание).",
                    "My favorite character is... (имя персонажа).",
                    "Do you like animated movies?"
                ]
            },
            {
                title: "Watching Movies in English",
                topic: "Movies & TV Shows",
                content: [
                    "I sometimes watch movies in English.",
                    "It helps me learn new words.",
                    "I watch with (subtitles / no subtitles).",
                    "Do you watch movies in English?"
                ]
            },
            {
                title: "Movie Genres",
                topic: "Movies & TV Shows",
                content: [
                    "I like (action / comedy / horror / science fiction) movies.",
                    "My least favorite genre is...",
                    "What kind of movies do you like?"
                ]
            },
            {
                title: "Superheroes in Movies",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite superhero is... (имя персонажа).",
                    "He/She has (superpowers or abilities).",
                    "The best superhero movie is... (название).",
                    "Do you like superhero movies?"
                ]
            },
            {
                title: "The Last Movie I Watched",
                topic: "Movies & TV Shows",
                content: [
                    "The last movie I watched was...",
                    "I watched it (yesterday / last week).",
                    "It was (good / bad / interesting).",
                    "Would you recommend the last movie you watched?"
                ]
            },
            {
                title: "Future Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I want to watch... (название будущего фильма).",
                    "It will be released in... (месяц, год).",
                    "It is about...",
                    "The main actors are...",
                    "I will watch it with...",
                    "Are you excited about any upcoming movies?"
                ]
            }
        ]
    },
    {
        level: "Elementary",
        topic: "Daily Life",
        scenarios: [
            {
                title: "My Typical Day",
                topic: "Daily Life",
                content: [
                    "On weekdays, I wake up at around...",
                    "I take a shower, get dressed, and eat breakfast.",
                    "Then I go to school/work by... (bus/car/foot)",
                    "I usually have classes/work until...",
                    "In the afternoon, I sometimes meet friends or go shopping.",
                    "In the evening, I watch TV or read a book before sleeping."
                ]
            },
            {
                title: "What I Eat in a Day",
                topic: "Daily Life",
                content: [
                    "For breakfast, I usually eat... and drink...",
                    "At lunchtime, I sometimes eat at home or in a cafe.",
                    "My favorite lunch is...",
                    "In the evening, I have a light dinner, like...",
                    "I try to eat healthy food, but I also like sweets.",
                    "I sometimes cook by myself or with my family."
                ]
            },
            {
                title: "My Weekend Routine",
                topic: "Daily Life",
                content: [
                    "On Saturday and Sunday, I don’t go to school or work.",
                    "I like to sleep a bit longer.",
                    "In the morning, I clean my room or do the laundry.",
                    "In the afternoon, I relax, watch movies, or meet my friends.",
                    "Sometimes we go to the park or have coffee.",
                    "I try to enjoy my free time."
                ]
            },
            {
                title: "Helping at Home",
                topic: "Daily Life",
                content: [
                    "At home, I help my family with chores.",
                    "I wash the dishes, take out the trash, and clean my room.",
                    "Sometimes I help cook or do the shopping.",
                    "My parents are happy when I help.",
                    "I think it's important to share the work at home."
                ]
            },
            {
                title: "My Daily Transport",
                topic: "Daily Life",
                content: [
                    "Every day, I go to school/work by...",
                    "It takes me about... minutes to get there.",
                    "Sometimes the bus/train is late, but usually, it’s on time.",
                    "I like listening to music during the trip.",
                    "Public transport is... in my city."
                ]
            },
            {
                title: "My Favorite Part of the Day",
                topic: "Daily Life",
                content: [
                    "My favorite part of the day is the evening.",
                    "I can relax and do things I like.",
                    "I watch series or talk with my friends online.",
                    "Sometimes I take a walk in the evening air.",
                    "It helps me feel calm and happy."
                ]
            },
            {
                title: "How I Stay Healthy",
                topic: "Daily Life",
                content: [
                    "To stay healthy, I try to sleep well and eat good food.",
                    "I also go for walks or do some light exercise.",
                    "Sometimes I go to the gym or play sports.",
                    "Drinking water is also important.",
                    "I feel better when I take care of my health."
                ]
            },
            {
                title: "After School or Work",
                topic: "Daily Life",
                content: [
                    "When I come home, I change my clothes and eat something.",
                    "After that, I rest or finish some tasks.",
                    "I usually talk with my family or scroll social media.",
                    "Later, I watch something or read before bed.",
                    "I try to go to sleep before midnight."
                ]
            },
            {
                title: "A Busy Day",
                topic: "Daily Life",
                content: [
                    "Some days are very busy for me.",
                    "I have a lot to do at school/work.",
                    "After that, I have to help at home or do homework.",
                    "I don’t have much time to relax.",
                    "But I still try to stay positive and finish everything."
                ]
            },
            {
                title: "My Morning Before School/Work",
                topic: "Daily Life",
                content: [
                    "In the morning, I get up quickly and prepare for the day.",
                    "I eat something simple like toast or cereal.",
                    "I pack my bag and check if I have everything.",
                    "I usually leave the house at...",
                    "Sometimes I feel sleepy, but I try to stay active."
                ]
            }
        ]
    },
    {
        level: "Elementary",
        topic: "Food & Cooking",
        scenarios: [
            {
                title: "My Daily Meals",
                topic: "Food & Cooking",
                content: [
                    "I eat three meals a day: breakfast, lunch, and dinner.",
                    "For breakfast, I usually have...",
                    "For lunch, I eat...",
                    "For dinner, I like to eat...",
                    "Sometimes I eat snacks like..."
                ]
            },
            {
                title: "My Favorite Dish to Cook",
                topic: "Food & Cooking",
                content: [
                    "I like cooking...",
                    "To cook it, I need... (ingredients)",
                    "It takes about... minutes/hours to cook.",
                    "I learned to cook it from...",
                    "I cook it for..."
                ]
            },
            {
                title: "Eating Out with Friends",
                topic: "Food & Cooking",
                content: [
                    "I often eat out with my friends.",
                    "We go to...",
                    "I usually order...",
                    "The food is...",
                    "We talk and have fun while eating."
                ]
            },
            {
                title: "How I Make a Sandwich",
                topic: "Food & Cooking",
                content: [
                    "To make a sandwich, I take...",
                    "I put... inside the bread.",
                    "Sometimes I add...",
                    "I eat it with...",
                    "It’s easy and tasty!"
                ]
            },
            {
                title: "Traditional Food in My Country",
                topic: "Food & Cooking",
                content: [
                    "In my country, people eat...",
                    "A popular dish is...",
                    "It’s made with...",
                    "People cook it for... (holiday, family)",
                    "I like it because..."
                ]
            },
            {
                title: "A Trip to the Supermarket",
                topic: "Food & Cooking",
                content: [
                    "I go to the supermarket...",
                    "I buy things like...",
                    "My favorite food to buy is...",
                    "I go shopping with...",
                    "I pay with..."
                ]
            },
            {
                title: "Foods I Like and Don’t Like",
                topic: "Food & Cooking",
                content: [
                    "I like eating... because it’s...",
                    "I don’t like... because it’s...",
                    "I love sweet / salty / spicy food.",
                    "I don’t eat... (for reasons)",
                    "I always eat..."
                ]
            },
            {
                title: "My Cooking Routine",
                topic: "Food & Cooking",
                content: [
                    "I cook at home... (how often)",
                    "I usually cook...",
                    "I use... (kitchen tools)",
                    "Sometimes I try new recipes.",
                    "I enjoy cooking because..."
                ]
            },
            {
                title: "Visiting a Café or Fast Food Place",
                topic: "Food & Cooking",
                content: [
                    "I sometimes go to...",
                    "I usually get...",
                    "It is cheap / expensive / tasty.",
                    "The place is...",
                    "I like going there because..."
                ]
            },
            {
                title: "A Special Dinner",
                topic: "Food & Cooking",
                content: [
                    "Last week, I had a special dinner.",
                    "It was for... (holiday, event)",
                    "We ate...",
                    "There were... (people)",
                    "It was a fun evening."
                ]
            }
        ]
    },
    {
        level: "Elementary",
        topic: "Technology & Innovation",
        scenarios: [
            {
                title: "What is Technology?",
                topic: "Technology & Innovation",
                content: [
                    "Technology is all the tools and machines we use to make our lives easier.",
                    "For example, my phone is technology. I use it to... (e.g., call, send messages, take pictures).",
                    "Another example is a computer. I use a computer for... (e.g., homework, games, browsing the internet).",
                    "What technology do you use every day?"
                ]
            },
            {
                title: "My Favorite Gadget",
                topic: "Technology & Innovation",
                content: [
                    "My favorite gadget is... (e.g., smartphone, tablet, laptop).",
                    "I like it because it helps me to... (e.g., stay connected, find information, listen to music).",
                    "I use it every day for...",
                    "Do you have a favorite gadget? What do you like to do with it?"
                ]
            },
            {
                title: "The Internet",
                topic: "Technology & Innovation",
                content: [
                    "The internet is a system that connects computers all around the world.",
                    "We use it for many things, like... (e.g., watching videos, chatting with friends, learning).",
                    "I like to use the internet to... (e.g., watch YouTube, play games).",
                    "What do you usually do on the internet?"
                ]
            },
            {
                title: "Social Media",
                topic: "Technology & Innovation",
                content: [
                    "Social media is a way to share pictures, videos, and messages online.",
                    "Some popular social media platforms are... (e.g., Instagram, Facebook, Twitter).",
                    "I use social media to... (e.g., follow my friends, share photos).",
                    "Do you use social media? What do you like to share?"
                ]
            },
            {
                title: "Robots",
                topic: "Technology & Innovation",
                content: [
                    "A robot is a machine that can do tasks for people.",
                    "Some robots can clean the house, like... (e.g., robot vacuum cleaners).",
                    "In the future, robots might help us with even more tasks, like...",
                    "Would you like to have a robot in your house? What would you want it to do?"
                ]
            },
            {
                title: "Smartphones",
                topic: "Technology & Innovation",
                content: [
                    "A smartphone is a small computer that you can carry with you.",
                    "I use my smartphone to... (e.g., call friends, check the weather, take pictures).",
                    "My smartphone also has... (e.g., games, apps, music).",
                    "Do you use a smartphone? What do you do with it?"
                ]
            },
            {
                title: "Video Games",
                topic: "Technology & Innovation",
                content: [
                    "Video games are a fun way to relax and play on a computer or console.",
                    "I like playing video games about... (e.g., sports, adventure, puzzles).",
                    "My favorite game is... because...",
                    "Do you play video games? What is your favorite game?"
                ]
            },
            {
                title: "Online Shopping",
                topic: "Technology & Innovation",
                content: [
                    "Online shopping is when you buy things on the internet.",
                    "Some popular websites for shopping are... (e.g., Amazon, eBay).",
                    "I buy... (e.g., clothes, books, toys) online.",
                    "Do you like shopping online? What do you usually buy?"
                ]
            },
            {
                title: "Learning with Technology",
                topic: "Technology & Innovation",
                content: [
                    "We can use technology to learn new things.",
                    "For example, we can use a computer to do research or watch educational videos.",
                    "I use a tablet or laptop for... (e.g., doing homework, learning new words).",
                    "Do you use technology to help you study? What tools do you use?"
                ]
            },
            {
                title: "The Future of Technology",
                topic: "Technology & Innovation",
                content: [
                    "In the future, technology will be even more amazing!",
                    "For example, there might be... (e.g., flying cars, robots that help at home).",
                    "I think technology will help us to... (e.g., travel faster, learn better).",
                    "What kind of technology do you think will be in the future?"
                ]
            }
        ]
    },
    {
        level: "Elementary",
        topic: "Music & Arts",
        scenarios: [
            {
                title: "My Favorite Band",
                topic: "Music & Arts",
                content: [
                    "My favorite band is... (назови группу)",
                    "I like this band because... (почему тебе нравится эта группа)",
                    "They play... (какой жанр музыки они играют)",
                    "I first heard about them when... (когда ты услышал о них впервые)",
                    "Do you have a favorite band?"
                ]
            },
            {
                title: "Listening to Music",
                topic: "Music & Arts",
                content: [
                    "I like listening to music in... (когда ты любишь слушать музыку: утром, в пути и т.д.)",
                    "I usually listen to music... (где ты обычно слушаешь музыку: дома, в машине и т.д.)",
                    "I listen to music on... (на чем ты слушаешь музыку: телефоне, компьютере и т.д.)",
                    "My favorite type of music is... (твой любимый жанр музыки)",
                    "What do you listen to while relaxing?"
                ]
            },
            {
                title: "A Famous Artist I Like",
                topic: "Music & Arts",
                content: [
                    "A famous artist I like is... (назови художника или музыканта)",
                    "I like this artist because... (почему тебе нравится этот артист)",
                    "This artist's work is... (опиши работы этого художника)",
                    "I first saw/heard their work when... (когда ты впервые столкнулся с их работой)",
                    "Do you have a favorite artist?"
                ]
            },
            {
                title: "Singing",
                topic: "Music & Arts",
                content: [
                    "I like to sing when... (когда тебе нравится петь)",
                    "I sing at... (где ты поешь: дома, в машине, на вечеринке)",
                    "My favorite song to sing is... (твоя любимая песня для пения)",
                    "I usually sing... (когда ты поешь: каждый день, иногда и т.д.)",
                    "Do you like to sing?"
                ]
            },
            {
                title: "Watching a Music Video",
                topic: "Music & Arts",
                content: [
                    "I once watched a music video by... (назови исполнителя или группу)",
                    "The video was... (как ты описал бы видео: веселое, красивое, странное)",
                    "I liked the video because... (почему тебе понравилось видео)",
                    "The song in the video is about... (о чем песня в видео)",
                    "Do you watch music videos often?"
                ]
            },
            {
                title: "A Painting I Like",
                topic: "Music & Arts",
                content: [
                    "I once saw a painting called... (назови картину)",
                    "The painting was by... (кто автор картины)",
                    "I like this painting because... (почему тебе нравится эта картина)",
                    "I saw this painting at... (где ты видел эту картину)",
                    "Do you like visiting art galleries?"
                ]
            },
            {
                title: "A Favorite Movie Soundtrack",
                topic: "Music & Arts",
                content: [
                    "One of my favorite movie soundtracks is from... (назови фильм)",
                    "The music in this movie is... (опиши музыку в фильме: красивая, энергичная и т.д.)",
                    "I really like the song... (твоя любимая песня из фильма)",
                    "I like this soundtrack because... (почему тебе нравится этот саундтрек)",
                    "Do you like movie soundtracks?"
                ]
            },
            {
                title: "My Art Hobby",
                topic: "Music & Arts",
                content: [
                    "I like drawing... (что ты любишь рисовать: людей, природу, абстракции и т.д.)",
                    "I usually draw with... (что ты используешь для рисования: карандаши, фломастеры и т.д.)",
                    "I started drawing when I was... (когда ты начал рисовать)",
                    "I draw in my free time... (когда ты рисуешь: по выходным, каждый день и т.д.)",
                    "Do you like to draw?"
                ]
            },
            {
                title: "A Musical Instrument I Want to Learn",
                topic: "Music & Arts",
                content: [
                    "I want to learn to play... (назови музыкальный инструмент)",
                    "I like this instrument because... (почему тебе нравится этот инструмент)",
                    "I want to learn it because... (почему ты хочешь научиться играть)",
                    "I hope to start learning soon... (когда ты планируешь начать учиться играть)",
                    "Do you play any musical instruments?"
                ]
            },
            {
                title: "A Dance I Like",
                topic: "Music & Arts",
                content: [
                    "I like watching... (какой танец тебе нравится)",
                    "This dance is popular in... (где этот танец популярен)",
                    "I think this dance is... (какой этот танец: красивый, быстрый, интересный)",
                    "I first saw this dance when... (когда ты впервые увидел этот танец)",
                    "Do you like dancing?"
                ]
            }
        ]
    },
    {
        level: "Elementary",
        topic: "Travel & Adventures",
        scenarios: [
            {
                title: "Planning a Trip",
                topic: "Travel & Adventures",
                content: [
                    "I am planning a trip to... (куда)",
                    "I will go with... (с кем)",
                    "We will stay for... (сколько дней)",
                    "We want to see... (что посмотреть)",
                    "We will travel by... (транспорт)",
                    "I am excited because... (почему ждёшь)"
                ]
            },
            {
                title: "My Last Vacation",
                topic: "Travel & Adventures",
                content: [
                    "Last year I went to... (куда)",
                    "The weather was... (погода)",
                    "I stayed at... (отель, апартаменты и т.п.)",
                    "Every day I... (что делал)",
                    "I met... (кого встретил)",
                    "I enjoyed it because... (почему понравилось)"
                ]
            },
            {
                title: "A Weekend Trip",
                topic: "Travel & Adventures",
                content: [
                    "I went on a weekend trip to... (куда)",
                    "We left on... (день недели)",
                    "The trip took... (время в пути)",
                    "We visited... (места)",
                    "I took many photos of... (чего)",
                    "It was short but... (опиши, например: fun, relaxing)"
                ]
            },
            {
                title: "A Trip to the Mountains",
                topic: "Travel & Adventures",
                content: [
                    "I traveled to the mountains in... (место)",
                    "The view was... (опиши)",
                    "I wore... (одежда)",
                    "I climbed... (что именно)",
                    "I felt... (как себя чувствовал)",
                    "The air was... (погода/атмосфера)"
                ]
            },
            {
                title: "A Travel Problem",
                topic: "Travel & Adventures",
                content: [
                    "When I traveled to... (куда)",
                    "I had a problem with... (что случилось)",
                    "We were late because... (почему)",
                    "I missed... (что пропустил)",
                    "But then... (как всё решилось)",
                    "Now I always... (чему научился)"
                ]
            },
            {
                title: "My Travel Bucket List",
                topic: "Travel & Adventures",
                content: [
                    "I want to visit... (3-5 мест)",
                    "Because they are... (почему)",
                    "In each place, I want to... (что сделать)",
                    "I will need... (что понадобится: паспорт, виза и т.п.)",
                    "I hope to visit these places... (когда)",
                    "It’s my dream to... (общая мечта)"
                ]
            },
            {
                title: "Traveling with Friends",
                topic: "Travel & Adventures",
                content: [
                    "I traveled with my friends to... (куда)",
                    "We stayed in... (где)",
                    "We did many things like... (что делали)",
                    "We laughed a lot when... (смешной момент)",
                    "I liked traveling with them because... (почему)",
                    "Next time, we want to go to... (куда)"
                ]
            },
            {
                title: "Trying New Food When Traveling",
                topic: "Travel & Adventures",
                content: [
                    "When I travel, I like trying... (что пробуешь)",
                    "In... (страна), I ate... (блюдо)",
                    "At first it was... (реакция)",
                    "Now I think it is... (мнение)",
                    "I want to try... (что ещё)",
                    "Tasting new food is... (чувства)"
                ]
            },
            {
                title: "Best Place in My Country",
                topic: "Travel & Adventures",
                content: [
                    "In my country, I like... (место)",
                    "It is located in... (регион, город)",
                    "It is famous for... (чем известно)",
                    "Tourists can... (что делать)",
                    "The best time to go is... (когда)",
                    "I recommend it because... (почему)"
                ]
            },
            {
                title: "Preparing for a Trip Abroad",
                topic: "Travel & Adventures",
                content: [
                    "Before my trip abroad, I need to... (подготовка)",
                    "I must pack... (вещи)",
                    "I also check... (что проверяешь)",
                    "I learn some words in... (язык)",
                    "I feel... (эмоции перед поездкой)",
                    "I’m ready to travel because... (почему готов)"
                ]
            }
        ]
    },
    {
        level: "Elementary",
        topic: "Sports & Fitness",
        scenarios: [
            {
                title: "My Favorite Sport",
                topic: "Sports & Fitness",
                content: [
                    "My favorite sport is... (назови любимый спорт)",
                    "I like it because... (почему тебе нравится этот спорт)",
                    "I usually play it with... (с кем ты обычно играешь)",
                    "I watch this sport on... (где ты смотришь этот спорт)",
                    "Do you like this sport too? Why or why not? (Тебе тоже нравится этот спорт? Почему или почему нет?)"
                ]
            },
            {
                title: "A Sport I Want to Try",
                topic: "Sports & Fitness",
                content: [
                    "I want to try... (назови спорт)",
                    "I think it looks... (легко, интересно, сложно)",
                    "I saw it on... (где ты видел этот спорт)",
                    "I want to try it with... (с кем ты хочешь попробовать этот спорт)",
                    "What sport do you want to try? (Какой спорт хочешь попробовать ты?)"
                ]
            },
            {
                title: "My Exercise Routine",
                topic: "Sports & Fitness",
                content: [
                    "In the morning, I usually... (что ты обычно делаешь утром)",
                    "In the evening, I sometimes... (что ты иногда делаешь вечером)",
                    "I do exercise... times a week (сколько раз в неделю ты тренируешься)",
                    "I feel... after I exercise (как ты себя чувствуешь после тренировки)",
                    "What do you do to stay fit? (Что ты делаешь, чтобы быть в форме?)"
                ]
            },
            {
                title: "Watching Sports",
                topic: "Sports & Fitness",
                content: [
                    "I like watching... (какой спорт ты любишь смотреть)",
                    "I usually watch with... (с кем ты обычно смотришь спорт)",
                    "My favorite team/player is... (твоя любимая команда/игрок)",
                    "The last game I watched was... (какая последняя игра, которую ты смотрел)",
                    "Do you prefer watching or playing sports? (Ты предпочитаешь смотреть или играть в спорт?)"
                ]
            },
            {
                title: "Playing Sports at School",
                topic: "Sports & Fitness",
                content: [
                    "At school, I play... (что ты играешь в школе)",
                    "I play it during... (когда ты играешь в это)",
                    "My classmates like to play... (что твои одноклассники любят играть)",
                    "Our teacher is... (какой наш учитель)",
                    "Do you enjoy sports at school? (Тебе нравится заниматься спортом в школе?)"
                ]
            },
            {
                title: "Indoor or Outdoor Sports?",
                topic: "Sports & Fitness",
                content: [
                    "I prefer... sports (indoor/outdoor) (Я предпочитаю... спорт)",
                    "Because... (почему)",
                    "I play... indoors and... outdoors (я играю в... в помещении и... на улице)",
                    "Do you like playing outside or inside? (Тебе нравится играть на улице или в помещении?)"
                ]
            },
            {
                title: "Healthy Habits",
                topic: "Sports & Fitness",
                content: [
                    "To be healthy, I... (что ты делаешь, чтобы быть здоровым)",
                    "I eat... (что ты ешь)",
                    "I drink... (что ты пьёшь)",
                    "I sleep for... hours (сколько часов ты спишь)",
                    "Do you think sports help you stay healthy? (Ты думаешь, что спорт помогает тебе оставаться здоровым?)"
                ]
            },
            {
                title: "A Sporty Friend",
                topic: "Sports & Fitness",
                content: [
                    "My friend... is very sporty (мой друг/моя подруга... очень спортивный/ая)",
                    "He/She plays... (он/она играет в...)",
                    "He/She is good at... (он/она хорошо играет в...)",
                    "We play together on... (мы играем вместе в...)",
                    "Do you have a sporty friend? (У тебя есть спортивный друг?)"
                ]
            },
            {
                title: "Team or Individual Sports?",
                topic: "Sports & Fitness",
                content: [
                    "I like... sports (team/individual) (Мне нравятся... виды спорта)",
                    "Because... (потому что)",
                    "I think team sports are... (я думаю, что командные виды спорта...)",
                    "I think individual sports are... (я думаю, что индивидуальные виды спорта...)",
                    "Which do you prefer? (Что ты предпочитаешь?)"      ]
            },
            {
                title: "A Fun Day of Sports",
                topic: "Sports & Fitness",
                content: [
                    "Last weekend, I played... (в прошлые выходные я играл в...)",
                    "It was... (это было...)",
                    "I played with... (я играл с...)",
                    "After the game, we... (после игры мы...)",
                    "Can you tell me about your fun sports day? (Расскажи о твоём веселом спортивном дне?)"
                ]
            }
        ]
    },
    {
        level: "Elementary",
        topic: "Science & Nature",
        scenarios: [
            {
                title: "Your Favorite Animal",
                topic: "Science & Nature",
                content: [
                    "What is your favorite animal?",
                    "Can you describe this animal?",
                    "Where does it live?",
                    "What does it eat?",
                    "Why do you like this animal?"
                ]
            },
            {
                title: "The Weather Today",
                topic: "Science & Nature",
                content: [
                    "What is the weather like today?",
                    "Is it cold or warm?",
                    "What do you like to do when the weather is sunny or rainy?",
                    "How do you dress when it’s cold?"
                ]
            },
            {
                title: "The Four Seasons",
                topic: "Science & Nature",
                content: [
                    "There are four seasons: spring, summer, autumn, and winter.",
                    "Which season is your favorite?",
                    "Why do you like this season?",
                    "What activities do you like to do in this season?"
                ]
            },
            {
                title: "Your Favorite Tree",
                topic: "Science & Nature",
                content: [
                    "Do you have a favorite tree?",
                    "What does it look like?",
                    "Where can you find this tree?",
                    "What do you like about it?"
                ]
            },
            {
                title: "Animals in the Zoo",
                topic: "Science & Nature",
                content: [
                    "What animals can you see in a zoo?",
                    "Which animal do you like the most?",
                    "What does it look like?",
                    "What does it eat?",
                    "Do you think zoos are good for animals?"
                ]
            },
            {
                title: "The Earth",
                topic: "Science & Nature",
                content: [
                    "What is the Earth made of?",
                    "Do you think Earth is a good place to live?",
                    "What can we do to take care of the Earth?",
                    "Can you name some places where you can see nature?"
                ]
            },
            {
                title: "Water",
                topic: "Science & Nature",
                content: [
                    "Water is important for life.",
                    "How much water do you drink every day?",
                    "Where can we find water on Earth?",
                    "Can you think of some ways to save water?"
                ]
            },
            {
                title: "Pollution and the Environment",
                topic: "Science & Nature",
                content: [
                    "Pollution is bad for nature.",
                    "What kinds of pollution do you know?",
                    "How can we stop pollution?",
                    "What do you do to protect the environment?"
                ]
            },
            {
                title: "Your Favorite Plant",
                topic: "Science & Nature",
                content: [
                    "What is your favorite plant or flower?",
                    "What color is it?",
                    "Where can you find this plant?",
                    "What does it need to grow?"
                ]
            },
            {
                title: "The Moon and the Stars",
                topic: "Science & Nature",
                content: [
                    "Have you ever seen the moon at night?",
                    "What does the moon look like?",
                    "Can you see stars in the sky?",
                    "Do you know how far the moon is from Earth?"
                ]
            }
        ]
    },
    {
        level: "Elementary",
        topic: "Language Learning",
        scenarios: [
            {
                title: "Why I Learn English",
                topic: "Language Learning",
                content: [
                    "I learn English because… (объясни свою причину)",
                    "It helps me when I… (ситуация, где используешь язык)",
                    "In the future, I want to… (что хочешь сделать с языком)",
                    "English is… (закончи своё мнение)"
                ]
            },
            {
                title: "My English Routine",
                topic: "Language Learning",
                content: [
                    "Every day I… (что ты делаешь, чтобы учить английский)",
                    "I study in the morning/afternoon/evening… (выбери время)",
                    "I use… (назови приложения, книги, фильмы)",
                    "This routine helps me to… (результат)"
                ]
            },
            {
                title: "Talking with a Native Speaker",
                topic: "Language Learning",
                content: [
                    "Have you ever talked to a native English speaker? (ответь да или нет)",
                    "If yes: Who was it? What did you talk about?",
                    "If no: Would you like to? What would you ask?",
                    "Talking with native speakers is… (твое мнение)"
                ]
            },
            {
                title: "Difficult and Easy Parts",
                topic: "Language Learning",
                content: [
                    "What is easy for you in English? (например, читать, слушать)",
                    "What is difficult for you? (например, грамматика, произношение)",
                    "How do you try to improve? (что ты делаешь)",
                    "How do you feel when you make a mistake?"
                ]
            },
            {
                title: "English in My School or Work",
                topic: "Language Learning",
                content: [
                    "Do you use English at school or work? (ответь да или нет)",
                    "If yes: In what situations? (в каких случаях)",
                    "If no: Would it be useful? Why?",
                    "How do people around you learn English?"
                ]
            },
            {
                title: "Favorite English App or Website",
                topic: "Language Learning",
                content: [
                    "Do you use any app or website to learn English?",
                    "Which one is your favorite? Why?",
                    "How often do you use it?",
                    "What do you usually learn from it?"
                ]
            },
            {
                title: "A New Word I Like",
                topic: "Language Learning",
                content: [
                    "What new English word did you learn recently?",
                    "How did you learn it?",
                    "What does it mean?",
                    "Can you make a sentence with this word?"
                ]
            },
            {
                title: "Watching Movies or Series in English",
                topic: "Language Learning",
                content: [
                    "Do you watch movies or series in English?",
                    "Do you use subtitles? (включаешь субтитры?)",
                    "What is your favorite movie or show?",
                    "What did you learn from it?"
                ]
            },
            {
                title: "Learning Other Languages",
                topic: "Language Learning",
                content: [
                    "Do you want to learn other languages too?",
                    "Which ones? Why?",
                    "Is English easier or harder than your native language?",
                    "What helps you stay motivated?"
                ]
            },
            {
                title: "My English Progress",
                topic: "Language Learning",
                content: [
                    "What could you say in English one year ago?",
                    "What can you say now?",
                    "What changed?",
                    "What are your goals for the next 3 months?"
                ]
            }
        ]
    },
    {
        level: "Elementary",
        topic: "Business & Career",
        scenarios: [
            {
                title: "Your Ideal Job",
                topic: "Business & Career",
                content: [
                    "What is your ideal job?",
                    "Why do you think this job would be good for you?",
                    "What do you need to do to get this job?",
                    "Do you think this job is difficult or easy?"
                ]
            },
            {
                title: "A Job You Wouldn't Want",
                topic: "Business & Career",
                content: [
                    "What job would you not like to have?",
                    "Why wouldn’t you like that job?",
                    "What do you think is the most difficult part of that job?",
                    "What job would be better for you?"
                ]
            },
            {
                title: "Your Working Day",
                topic: "Business & Career",
                content: [
                    "What time do you usually start work or school?",
                    "What do you do in the morning before work or school?",
                    "How do you feel during the day at work or school?",
                    "What time do you finish work or school?"
                ]
            },
            {
                title: "Working with a Team",
                topic: "Business & Career",
                content: [
                    "Do you like working with a team or by yourself?",
                    "Why do you prefer this way of working?",
                    "What tasks are easier to do with other people?",
                    "What problems can happen when working in a group?"
                ]
            },
            {
                title: "Working from Home",
                topic: "Business & Career",
                content: [
                    "Would you like to work from home?",
                    "What would you do if you worked from home?",
                    "What are the good things about working at home?",
                    "What could be difficult when working from home?"
                ]
            },
            {
                title: "The Best Job for You",
                topic: "Business & Career",
                content: [
                    "What is the best job for you?",
                    "What do you enjoy doing in your free time?",
                    "Can you do what you love in your job?",
                    "What is your favorite thing about working?"
                ]
            },
            {
                title: "A Job You Would Like to Try",
                topic: "Business & Career",
                content: [
                    "What job would you like to try in the future?",
                    "What makes this job interesting for you?",
                    "Do you think you need special skills for this job?",
                    "What would you like to learn for this job?"
                ]
            },
            {
                title: "A Successful Person",
                topic: "Business & Career",
                content: [
                    "Who is a successful person you know?",
                    "What makes them successful?",
                    "What do they do to be successful?",
                    "Would you like to be like them?"
                ]
            },
            {
                title: "Work Skills",
                topic: "Business & Career",
                content: [
                    "What skills are important for a job?",
                    "Do you think it is important to be good at computers?",
                    "What is something you are good at?",
                    "What skill would you like to improve?"
                ]
            },
            {
                title: "Starting a Business",
                topic: "Business & Career",
                content: [
                    "Would you like to start your own business?",
                    "What kind of business would you start?",
                    "What would be the first thing you do to start the business?",
                    "How do you think people would help your business?"
                ]
            }
        ]
    },

    {
        level: "Pre-Intermediate",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "Describing a Movie",
                topic: "Movies & TV Shows",
                content: [
                    "One of the best movies I have seen is... (название фильма).",
                    "It belongs to the (genre: comedy, action, thriller, etc.) category.",
                    "The story takes place in... (город, страна, время).",
                    "The main character is... (имя) played by (актёр).",
                    "The movie is about... (короткое описание сюжета).",
                    "What’s your favorite movie, and what is it about?"
                ]
            },
            {
                title: "My Movie-Watching Habits",
                topic: "Movies & TV Shows",
                content: [
                    "I usually watch movies (at home / in the cinema).",
                    "I prefer watching movies (alone / with friends / with family).",
                    "I usually watch movies (once a week / on weekends / every evening).",
                    "I like watching movies in (English / my native language).",
                    "Do you prefer watching movies alone or with others? Why?"
                ]
            },
            {
                title: "My Favorite TV Series",
                topic: "Movies & TV Shows",
                content: [
                    "One of my favorite TV series is... (название).",
                    "It has (number) seasons and (number) episodes.",
                    "The story is about... (описание).",
                    "My favorite character is... because...",
                    "If you could recommend one TV series, which one would it be?"
                ]
            },
            {
                title: "The Best Actor/Actress",
                topic: "Movies & TV Shows",
                content: [
                    "One of my favorite actors/actresses is...",
                    "He/She played in movies like...",
                    "I like this actor/actress because...",
                    "In my opinion, his/her best role was in...",
                    "Which actor/actress do you admire?"
                ]
            },
            {
                title: "A Memorable Movie Scene",
                topic: "Movies & TV Shows",
                content: [
                    "One scene that I will never forget is...",
                    "In this scene, the character... (описание действий).",
                    "This scene made me feel... (excited, sad, happy, scared).",
                    "If you could relive a scene from a movie, which one would it be?"
                ]
            },
            {
                title: "Comparing Movies and Books",
                topic: "Movies & TV Shows",
                content: [
                    "I think movies based on books are usually (better / worse) than the books.",
                    "One example is... (название фильма, основанного на книге).",
                    "In the book, the story was...",
                    "In the movie, they changed...",
                    "Do you prefer reading books or watching movies?"
                ]
            },
            {
                title: "Watching Movies in Original Language",
                topic: "Movies & TV Shows",
                content: [
                    "I prefer watching movies in (original language / my native language).",
                    "Watching movies in English helps me... (learn new words, improve pronunciation).",
                    "I sometimes watch with (subtitles / no subtitles).",
                    "Do you think watching movies in English is useful for learning?"
                ]
            },
            {
                title: "Superhero Movies – Fun or Overrated?",
                topic: "Movies & TV Shows",
                content: [
                    "I think superhero movies are (exciting / boring / too similar).",
                    "My favorite superhero movie is... because...",
                    "The best superhero ever is...",
                    "Do you think superhero movies are too popular?"
                ]
            },
            {
                title: "The Last Movie I Watched",
                topic: "Movies & TV Shows",
                content: [
                    "The last movie I watched was... (название).",
                    "It was about... (короткое описание).",
                    "I liked/disliked it because...",
                    "I would/wouldn’t recommend it to others because...",
                    "What was the last movie you watched, and how did you like it?"
                ]
            },
            {
                title: "Future Movies & Expectations",
                topic: "Movies & TV Shows",
                content: [
                    "I am looking forward to watching... (название предстоящего фильма).",
                    "It will be released in... (месяц, год).",
                    "The trailer looks (amazing / disappointing).",
                    "The actors in this movie are...",
                    "Do you have any upcoming movies that you’re excited about?"
                ]
            }
        ]
    },
    {
        level: "Pre-Intermediate",
        topic: "Daily Life",
        scenarios: [
            {
                title: "My Morning Routine",
                topic: "Daily Life",
                content: [
                    "I usually wake up around 7:00 a.m. on weekdays.",
                    "The first thing I do is check my phone for messages.",
                    "Then, I take a quick shower, get dressed, and eat breakfast.",
                    "I prefer something simple like eggs or cereal.",
                    "After that, I get ready to leave for school or work.",
                    "My mornings are sometimes stressful, but I try to stay organized."
                ]
            },
            {
                title: "A Day at Work or School",
                topic: "Daily Life",
                content: [
                    "My typical day at work/school starts at 9 a.m.",
                    "I usually have several tasks or classes to complete.",
                    "Sometimes the work is easy, but other times it’s quite hard.",
                    "During breaks, I talk to friends or grab a snack.",
                    "By the end of the day, I’m usually tired but satisfied.",
                    "I think it’s important to enjoy what you do."
                ]
            },
            {
                title: "What I Do in the Evenings",
                topic: "Daily Life",
                content: [
                    "After I get home, I like to change into something comfortable.",
                    "I usually have dinner with my family and talk about our day.",
                    "Later, I watch a TV show, read a book, or scroll through social media.",
                    "If I have time, I also go for a short walk or exercise.",
                    "I go to bed around 11 p.m., sometimes later if I’m not tired."
                ]
            },
            {
                title: "My Weekend Activities",
                topic: "Daily Life",
                content: [
                    "Weekends are my favorite part of the week.",
                    "I don’t have to rush in the morning, so I sleep a bit longer.",
                    "Sometimes, I meet my friends or go shopping.",
                    "If the weather is nice, I enjoy spending time outside.",
                    "I also try to finish any work I didn’t do during the week.",
                    "Weekends help me relax and get ready for Monday."
                ]
            },
            {
                title: "Daily Chores at Home",
                topic: "Daily Life",
                content: [
                    "There are some things I do every day to keep my home clean.",
                    "I wash the dishes after meals and vacuum the floor twice a week.",
                    "On weekends, I usually do laundry and clean the bathroom.",
                    "Sometimes, I help cook or do grocery shopping.",
                    "It’s not always fun, but I feel good when everything is clean."
                ]
            },
            {
                title: "Staying Fit in Daily Life",
                topic: "Daily Life",
                content: [
                    "I try to stay healthy by being active during the day.",
                    "I walk to work/school if the weather is good.",
                    "Sometimes, I go to the gym or follow short workouts online.",
                    "Even simple things like taking the stairs help me stay fit.",
                    "I believe small steps can make a big difference."
                ]
            },
            {
                title: "My Daily Meals",
                topic: "Daily Life",
                content: [
                    "I usually eat three meals a day.",
                    "For breakfast, I have something quick because I’m always in a hurry.",
                    "Lunch is often something light like a sandwich or salad.",
                    "In the evening, I like warm food such as pasta or soup.",
                    "Sometimes, I cook for myself, but other times my parents do."
                ]
            },
            {
                title: "My Travel to Work/School",
                topic: "Daily Life",
                content: [
                    "I take the bus to work/school every day.",
                    "It takes about 30 minutes, depending on traffic.",
                    "I usually listen to music or a podcast during the ride.",
                    "Sometimes, I meet friends on the way, and we talk.",
                    "Public transport is not perfect, but it’s cheap and easy."
                ]
            },
            {
                title: "How I Relax After a Busy Day",
                topic: "Daily Life",
                content: [
                    "After a long and busy day, I like to relax.",
                    "Sometimes, I take a hot shower or drink tea.",
                    "Watching a movie or listening to music helps me forget stress.",
                    "I try not to check work messages in the evening.",
                    "Relaxing is important for mental health."
                ]
            },
            {
                title: "A Day Without Technology",
                topic: "Daily Life",
                content: [
                    "One day, I decided not to use my phone or computer.",
                    "At first, it felt strange because I always check my phone.",
                    "But then, I went outside, met a friend, and read a book.",
                    "It was a peaceful and interesting day.",
                    "I think I should do it more often."
                ]
            }
        ]
    },
    {
        level: "Pre-Intermediate",
        topic: "Food & Cooking",
        scenarios: [
            {
                title: "Cooking My Favorite Meal",
                topic: "Food & Cooking",
                content: [
                    "One of my favorite meals to cook is...",
                    "I usually prepare it on... (день недели или случай)",
                    "The main ingredients are...",
                    "The recipe is simple: first I..., then I...",
                    "I enjoy cooking it because..."
                ]
            },
            {
                title: "A Memorable Dinner at a Restaurant",
                topic: "Food & Cooking",
                content: [
                    "I once had a great dinner at a restaurant called...",
                    "I went there with...",
                    "I ordered... and it tasted...",
                    "The service was...",
                    "I’d like to go back there because..."
                ]
            },
            {
                title: "Trying a New Recipe",
                topic: "Food & Cooking",
                content: [
                    "Last weekend, I tried cooking something new:...",
                    "I found the recipe on...",
                    "It looked easy, but...",
                    "The result was...",
                    "Next time, I will..."
                ]
            },
            {
                title: "Comparing Homemade Food and Restaurant Food",
                topic: "Food & Cooking",
                content: [
                    "I think homemade food is...",
                    "It's usually... (healthier, cheaper, tastier)",
                    "Restaurant food is...",
                    "I prefer... because...",
                    "But sometimes I enjoy..."
                ]
            },
            {
                title: "A Dish from Another Country",
                topic: "Food & Cooking",
                content: [
                    "I once tried a dish from another country:...",
                    "It’s from... (страна)",
                    "It is made with...",
                    "The taste was...",
                    "I would/would not eat it again because..."
                ]
            },
            {
                title: "What I Usually Eat in a Day",
                topic: "Food & Cooking",
                content: [
                    "For breakfast, I usually eat...",
                    "At lunch, I prefer...",
                    "In the evening, I have...",
                    "Sometimes I snack on...",
                    "I try to eat healthy by..."
                ]
            },
            {
                title: "Cooking for Family or Friends",
                topic: "Food & Cooking",
                content: [
                    "Sometimes I cook for my family/friends.",
                    "Last time, I made...",
                    "They liked it because...",
                    "We also had... to drink.",
                    "After dinner, we..."
                ]
            },
            {
                title: "How I Learned to Cook",
                topic: "Food & Cooking",
                content: [
                    "I started learning to cook when I was...",
                    "At first, I cooked simple things like...",
                    "I learned from... (человек или источник)",
                    "Now I can make...",
                    "Cooking is fun because..."
                ]
            },
            {
                title: "Shopping for Food",
                topic: "Food & Cooking",
                content: [
                    "I go grocery shopping...",
                    "I usually buy...",
                    "I like going to... (супермаркет, рынок)",
                    "I always check... (prices, expiration dates)",
                    "I try to buy healthy food like..."
                ]
            },
            {
                title: "My Experience with Vegetarian/Vegan Food",
                topic: "Food & Cooking",
                content: [
                    "I tried vegetarian/vegan food when...",
                    "It included...",
                    "The taste was...",
                    "I think it’s... (healthy, interesting, difficult)",
                    "I might try it again because…"
                ]
            }
        ]
    },
    {
        level: "Pre-Intermediate",
        topic: "Technology & Innovation",
        scenarios: [
            {
                title: "What is Technology?",
                topic: "Technology & Innovation",
                content: [
                    "Technology includes all the tools, machines, and devices that help us in our daily lives. For example, a smartphone is a piece of technology that helps me to... (e.g., make calls, check the weather, use apps).",
                    "Technology can also help us work faster, like... (e.g., computers, printers).",
                    "How does technology help you in your daily life?"
                ]
            },
            {
                title: "My Favorite App",
                topic: "Technology & Innovation",
                content: [
                    "My favorite app is... (e.g., Instagram, WhatsApp, TikTok).",
                    "I use it to... (e.g., stay in touch with friends, watch videos, take pictures).",
                    "I like it because... (e.g., it’s easy to use, it helps me communicate).",
                    "What is your favorite app? How do you use it?"
                ]
            },
            {
                title: "Social Media",
                topic: "Technology & Innovation",
                content: [
                    "Social media is a way to share information with others online. Some popular social media platforms are... (e.g., Facebook, Twitter, YouTube).",
                    "I use social media to... (e.g., share pictures, read the news, find interesting articles).",
                    "Do you use social media? What do you like about it?"
                ]
            },
            {
                title: "The Internet",
                topic: "Technology & Innovation",
                content: [
                    "The internet is a global network that connects millions of computers.",
                    "I use the internet for many things, like... (e.g., watching movies, learning new things, playing games).",
                    "It also helps me to find information about... (e.g., my studies, travel, news).",
                    "How do you use the internet?"
                ]
            },
            {
                title: "Smartphones",
                topic: "Technology & Innovation",
                content: [
                    "A smartphone is a mobile phone with a lot of extra features.",
                    "I use my smartphone to... (e.g., send messages, listen to music, check the calendar).",
                    "It’s also great for... (e.g., taking photos, making video calls, browsing the web).",
                    "What do you use your smartphone for the most?"
                ]
            },
            {
                title: "Computers",
                topic: "Technology & Innovation",
                content: [
                    "A computer is an electronic device that helps us do many tasks.",
                    "I use a computer to... (e.g., write documents, browse the internet, play games).",
                    "It’s important for my work/school because... (e.g., I can find information quickly, I can write essays).",
                    "How do you use a computer?"
                ]
            },
            {
                title: "Robots and Artificial Intelligence",
                topic: "Technology & Innovation",
                content: [
                    "Robots are machines that can do tasks for us. Some robots can clean the house, like... (e.g., robot vacuum cleaners).",
                    "Artificial intelligence helps machines think and learn.",
                    "Do you think robots will help us more in the future? What tasks would you like robots to do for you?"
                ]
            },
            {
                title: "Online Shopping",
                topic: "Technology & Innovation",
                content: [
                    "Online shopping is a way to buy things on the internet. Some popular online stores are... (e.g., Amazon, eBay, AliExpress).",
                    "I like online shopping because... (e.g., it’s easy, I can find good deals).",
                    "Do you like online shopping? What do you usually buy?"
                ]
            },
            {
                title: "Video Games",
                topic: "Technology & Innovation",
                content: [
                    "Video games are digital games you can play on a computer or a console.",
                    "I like playing video games because... (e.g., they are fun, I can compete with friends).",
                    "My favorite video game is... because...",
                    "Do you like video games? What’s your favorite game?"
                ]
            },
            {
                title: "The Future of Technology",
                topic: "Technology & Innovation",
                content: [
                    "In the future, technology will change even more. We might have... (e.g., flying cars, smart houses, robots that do everything).",
                    "Technology will help us to... (e.g., live longer, travel faster, communicate better).",
                    "What kind of technology do you think we will have in the future?"
                ]
            }
        ]
    },
    {
        level: "Pre-Intermediate",
        topic: "Music & Arts",
        scenarios: [
            {
                title: "My Favorite Song",
                topic: "Music & Arts",
                content: [
                    "My favorite song is... (назови песню)",
                    "I like this song because... (почему тебе нравится эта песня)",
                    "The lyrics of the song are about... (о чем эта песня)",
                    "I like the singer because... (почему тебе нравится этот исполнитель)",
                    "Do you listen to this song often?"
                ]
            },
            {
                title: "Visiting a Concert",
                topic: "Music & Arts",
                content: [
                    "I went to a concert of... (назови исполнителя или группу)",
                    "The concert was... (опиши концерт: интересный, громкий, веселый)",
                    "The best part of the concert was... (что тебе понравилось на концерте)",
                    "I went to the concert with... (с кем ты ходил на концерт)",
                    "Do you like going to concerts?"
                ]
            },
            {
                title: "A Painting I Would Like to See",
                topic: "Music & Arts",
                content: [
                    "I would like to see the painting... (назови картину)",
                    "This painting is by... (кто автор картины)",
                    "I want to see it because... (почему ты хочешь увидеть эту картину)",
                    "I think the painting is... (как ты описал бы картину: яркая, красивое, грустная)",
                    "Do you like visiting art galleries?"
                ]
            },
            {
                title: "The Instruments in a Band",
                topic: "Music & Arts",
                content: [
                    "In a band, there are usually... (назови музыкальные инструменты в группе)",
                    "The guitarist plays... (что делает гитарист)",
                    "The drummer plays... (что делает барабанщик)",
                    "The singer sings... (что делает певец)",
                    "Do you know how to play any instruments?"
                ]
            },
            {
                title: "My Art Class",
                topic: "Music & Arts",
                content: [
                    "I have art class every... (когда у тебя уроки рисования)",
                    "In this class, we draw... (что вы рисуете на уроках)",
                    "I like art class because... (почему тебе нравится этот урок)",
                    "I usually use... (что ты используешь для рисования)",
                    "Do you like art lessons?"
                ]
            },
            {
                title: "My Favorite Artist",
                topic: "Music & Arts",
                content: [
                    "One of my favorite artists is... (назови художника или музыканта)",
                    "I like this artist because... (почему тебе нравится этот артист)",
                    "This artist works with... (с каким материалом или инструментами работает этот артист)",
                    "I first saw his/her work when... (когда ты впервые увидел/услышал работу этого художника)",
                    "Do you have a favorite artist?"
                ]
            },
            {
                title: "A Song That Makes Me Happy",
                topic: "Music & Arts",
                content: [
                    "A song that makes me happy is... (назови песню)",
                    "This song is happy because... (почему эта песня счастливая)",
                    "The rhythm is... (какой ритм у этой песни)",
                    "I like the song because... (почему тебе нравится эта песня)",
                    "Do you have a song that makes you happy?"
                ]
            },
            {
                title: "Watching a Music Video",
                topic: "Music & Arts",
                content: [
                    "I watched a music video by... (назови исполнителя)",
                    "In the video, there were... (что происходило в видео: танцы, красивые пейзажи, интересные люди)",
                    "I liked the video because... (почему тебе понравилось видео)",
                    "The song in the video is about... (о чем песня)",
                    "Do you watch music videos often?"
                ]
            },
            {
                title: "My Favorite Movie Soundtrack",
                topic: "Music & Arts",
                content: [
                    "I love the soundtrack from the movie... (назови фильм)",
                    "The music in the movie is... (какая музыка в фильме: драматическая, веселая и т.д.)",
                    "One of my favorite songs from the movie is... (твоя любимая песня из фильма)",
                    "I like the soundtrack because... (почему тебе нравится этот саундтрек)",
                    "Do you have a favorite movie soundtrack?"
                ]
            },
            {
                title: "My Favorite Genre of Music",
                topic: "Music & Arts",
                content: [
                    "My favorite genre of music is... (назови жанр музыки)",
                    "I like this genre because... (почему тебе нравится этот жанр)",
                    "I usually listen to this type of music when... (когда ты слушаешь этот жанр музыки)",
                    "The songs in this genre are about... (о чем песни в этом жанре)",
                    "What is your favorite music genre?"
                ]
            }
        ]
    },
    {
        level: "Pre-Intermediate",
        topic: "Travel & Adventures",
        scenarios: [
            {
                title: "My Dream Vacation",
                topic: "Travel & Adventures",
                content: [
                    "If I could go anywhere in the world, I would visit... (страна/город)",
                    "I want to go there because... (причина)",
                    "I imagine walking through... (места/достопримечательности)",
                    "I would like to try... (еда или активность)",
                    "I would stay for... (длительность поездки)",
                    "One day, I hope this dream will come true."
                ]
            },
            {
                title: "An Unforgettable Trip",
                topic: "Travel & Adventures",
                content: [
                    "One of the most unforgettable trips I had was to... (куда)",
                    "I went there with... (с кем)",
                    "We did exciting things like... (мероприятия)",
                    "Something funny or unexpected happened when... (история)",
                    "This trip is special to me because... (почему)"
                ]
            },
            {
                title: "Traveling by Plane",
                topic: "Travel & Adventures",
                content: [
                    "I usually travel by plane when I go far.",
                    "The last flight I took was to... (куда)",
                    "At the airport, I had to... (процедуры)",
                    "On the plane, I felt... (эмоции)",
                    "I watched... or I read... during the flight.",
                    "I think flying is... (мнение)"
                ]
            },
            {
                title: "Comparing Two Places I Visited",
                topic: "Travel & Adventures",
                content: [
                    "I have been to both... and... (два места)",
                    "The first place was... (описание)",
                    "The second place was... (описание)",
                    "I liked... more because... (сравнение)",
                    "Both places were great for... (что понравилось в каждом)"
                ]
            },
            {
                title: "A Cultural Experience Abroad",
                topic: "Travel & Adventures",
                content: [
                    "While traveling in... (страна), I experienced a different culture.",
                    "People there are... (описание людей)",
                    "I joined a local event or festival called...",
                    "I learned that they... (интересный факт)",
                    "It made me think about... (что понял)",
                    "I love learning about other cultures."
                ]
            },
            {
                title: "A Bad Travel Experience",
                topic: "Travel & Adventures",
                content: [
                    "Not every trip goes perfectly.",
                    "Once, I had a bad experience in... (место)",
                    "It started when... (что случилось)",
                    "I felt... (эмоции)",
                    "I had to solve the problem by... (действие)",
                    "Now I always make sure to... (урок)"
                ]
            },
            {
                title: "Adventure Travel",
                topic: "Travel & Adventures",
                content: [
                    "I enjoy adventure travel because I like being active.",
                    "Once, I tried... (приключенческая активность: hiking, surfing, etc.)",
                    "It was... (опиши опыт)",
                    "I prepared by... (подготовка)",
                    "It was difficult but... (результат)",
                    "Now I want to try... (что в планах)"
                ]
            },
            {
                title: "Meeting New People While Traveling",
                topic: "Travel & Adventures",
                content: [
                    "When I travel, I often meet new people.",
                    "Once in... (место), I met someone from... (страна)",
                    "We started talking because... (ситуация)",
                    "We shared stories about... (о чём говорили)",
                    "We still... (общаетесь?)",
                    "Meeting new people makes travel more interesting."
                ]
            },
            {
                title: "A Trip I Would Like to Take Again",
                topic: "Travel & Adventures",
                content: [
                    "There is one trip I would love to repeat.",
                    "It was to... (место)",
                    "Everything about it was great: the weather, the food, the activities.",
                    "If I go again, I would... (что сделал бы иначе или добавил)",
                    "That place feels like a second home to me."
                ]
            },
            {
                title: "Packing for Different Trips",
                topic: "Travel & Adventures",
                content: [
                    "Packing depends on the type of trip.",
                    "For the beach, I take... (что берёшь)",
                    "For a city trip, I pack... (что берёшь)",
                    "Last time I packed too much and... (что случилось)",
                    "Now I always make a list before traveling.",
                    "Being well-prepared makes the trip more enjoyable."
                ]
            }
        ]
    },
    {
        level: "Pre-Intermediate",
        topic: "Sports & Fitness",
        scenarios: [
            {
                title: "Why I Like My Sport",
                topic: "Sports & Fitness",
                content: [
                    "I enjoy playing... because...",
                    "It helps me feel... (здоровым, энергичным, расслабленным)",
                    "I usually play it... times a week",
                    "How do you feel after doing sports? (Как ты себя чувствуешь после спорта?)",
                    "Why do you think people enjoy playing sports? (Почему, по твоему мнению, люди любят заниматься спортом?)"
                ]
            },
            {
                title: "Going to the Gym",
                topic: "Sports & Fitness",
                content: [
                    "I go to the gym... (how often) (я хожу в спортзал... раз в неделю)",
                    "My favorite exercise is... (моё любимое упражнение — это...)",
                    "I usually spend about... minutes there (я обычно трачу около... минут там)",
                    "Do you prefer going to the gym or working out at home? Why? (Ты предпочитаешь ходить в спортзал или заниматься дома? Почему?)"
                ]
            },
            {
                title: "The Best Athlete",
                topic: "Sports & Fitness",
                content: [
                    "I think the best athlete is... (я думаю, что лучший спортсмен — это...)",
                    "He/She plays... (он/она играет в...)",
                    "He/She is famous for... (он/она известен/известна благодаря...)",
                    "What makes a person a great athlete in your opinion? (Что, по твоему мнению, делает человека великим спортсменом?)"
                ]
            },
            {
                title: "My Sports Experience",
                topic: "Sports & Fitness",
                content: [
                    "The first time I played... was... (впервые я играл в... было...)",
                    "I was... years old (мне было... лет)",
                    "It was... (easy, fun, difficult) (это было... легко, весело, сложно)",
                    "What sport did you try for the first time, and how was it? (Какой спорт ты попробовал впервые, и как это было?)"
                ]
            },
            {
                title: "Staying Fit without a Gym",
                topic: "Sports & Fitness",
                content: [
                    "I stay fit by... (я поддерживаю форму, занимаясь...)",
                    "At home, I can do... (дома я могу делать...)",
                    "I go for a walk/run in the... (я хожу на прогулку/бегаю в...)",
                    "Do you think it's easy to stay fit without a gym? Why or why not? (Ты думаешь, что легко оставаться в форме без спортзала? Почему или почему нет?)"
                ]
            },
            {
                title: "Watching Sports with Friends",
                topic: "Sports & Fitness",
                content: [
                    "I usually watch... with my friends (я обычно смотрю... с друзьями)",
                    "We meet at... (мы встречаемся в...)",
                    "We eat... and talk about... (мы едим... и говорим о...)",
                    "What do you like most about watching sports with others? (Что тебе нравится больше всего в просмотре спорта с другими?)"
                ]
            },
            {
                title: "Dangerous Sports",
                topic: "Sports & Fitness",
                content: [
                    "I think... is a dangerous sport (я думаю, что... это опасный спорт)",
                    "Because... (потому что...)",
                    "Would you try it? Why or why not? (Ты бы попробовал? Почему или почему нет?)",
                    "Do you know anyone who plays a risky sport? (Ты знаешь кого-то, кто занимается опасным спортом?)"
                ]
            },
            {
                title: "Sports and Mental Health",
                topic: "Sports & Fitness",
                content: [
                    "Sports help me feel... (спорт помогает мне чувствовать себя...)",
                    "When I feel stressed, I... (когда я чувствую стресс, я...)",
                    "Why do you think sports are good for our mental health? (Почему, по твоему мнению, спорт полезен для психического здоровья?)"
                ]
            },
            {
                title: "A Time I Lost a Game",
                topic: "Sports & Fitness",
                content: [
                    "I played... (я играл в...)",
                    "My team/opponent was... (моя команда/соперник был...)",
                    "We lost because... (мы проиграли, потому что...)",
                    "How did you feel, and what did you learn? (Как ты себя чувствовал, и что ты узнал?)"
                ]
            },
            {
                title: "Planning a Fitness Schedule",
                topic: "Sports & Fitness",
                content: [
                    "If I had more free time, I would... (если бы у меня было больше свободного времени, я бы...)",
                    "My perfect weekly fitness plan would be... (мой идеальный план тренировок на неделю — это...)",
                    "Do you think planning helps to stay healthy? (Ты думаешь, что планирование помогает оставаться здоровым?)"
                ]
            }
        ]
    },
    {
        level: "Pre-Intermediate",
        topic: "Science & Nature",
        scenarios: [
            {
                title: "The Solar System",
                topic: "Science & Nature",
                content: [
                    "Can you name all the planets in our solar system?",
                    "Which planet is the biggest?",
                    "Do you think there is life on other planets?",
                    "Why or why not?"
                ]
            },
            {
                title: "The Water Cycle",
                topic: "Science & Nature",
                content: [
                    "What is the water cycle?",
                    "Can you explain how water moves around the Earth?",
                    "Why is the water cycle important for life on Earth?",
                    "Have you ever seen the water cycle in action?"
                ]
            },
            {
                title: "Wild Animals",
                topic: "Science & Nature",
                content: [
                    "What wild animals live in your country?",
                    "Which one is your favorite and why?",
                    "Where do these animals live?",
                    "What do they eat, and how do they survive in the wild?"
                ]
            },
            {
                title: "Recycling",
                topic: "Science & Nature",
                content: [
                    "What can be recycled?",
                    "How does recycling help the environment?",
                    "Do you recycle at home or school?",
                    "What other ways can people reduce waste?"
                ]
            },
            {
                title: "Plants and Trees",
                topic: "Science & Nature",
                content: [
                    "What is the role of plants and trees in nature?",
                    "Can you name some trees or plants that you see around you?",
                    "Why is it important to protect forests?",
                    "Have you ever planted a tree or a plant?"
                ]
            },
            {
                title: "Earthquakes",
                topic: "Science & Nature",
                content: [
                    "What is an earthquake?",
                    "Where are earthquakes most common?",
                    "How do earthquakes affect the environment?",
                    "What should you do during an earthquake to stay safe?"
                ]
            },
            {
                title: "Endangered Species",
                topic: "Science & Nature",
                content: [
                    "What does 'endangered species' mean?",
                    "Can you name some animals that are endangered?",
                    "Why are these animals in danger?",
                    "How can we help protect endangered species?"
                ]
            },
            {
                title: "The Ocean",
                topic: "Science & Nature",
                content: [
                    "Why is the ocean important for the Earth?",
                    "Can you name some sea animals?",
                    "What are some of the dangers that the ocean faces?",
                    "What can we do to protect the ocean and its creatures?"
                ]
            },
            {
                title: "The Importance of Trees",
                topic: "Science & Nature",
                content: [
                    "Why are trees important for the environment?",
                    "What do trees give us?",
                    "How can we help save forests?",
                    "What is the role of trees in preventing climate change?"
                ]
            },
            {
                title: "Natural Disasters",
                topic: "Science & Nature",
                content: [
                    "What is a natural disaster?",
                    "Have you ever experienced a natural disaster?",
                    "Which natural disasters do you know?",
                    "What can people do to prepare for a natural disaster?"
                ]
            }
        ]
    },
    {
        level: "Pre-Intermediate",
        topic: "Language Learning",
        scenarios: [
            {
                title: "My Language Learning Journey",
                topic: "Language Learning",
                content: [
                    "When did you start learning English?",
                    "What was the first thing you learned?",
                    "How has your learning changed over time?",
                    "What are you proud of so far?"
                ]
            },
            {
                title: "Comparing Languages",
                topic: "Language Learning",
                content: [
                    "How is English different from your native language?",
                    "What do you like about English grammar or vocabulary?",
                    "Are there any sounds or letters that are hard for you?",
                    "Which language do you think is more difficult?"
                ]
            },
            {
                title: "My Favorite Way to Practice",
                topic: "Language Learning",
                content: [
                    "Do you like speaking, reading, writing, or listening more?",
                    "How do you usually practice this skill?",
                    "Why do you prefer this way?",
                    "Has it helped you improve?"
                ]
            },
            {
                title: "Mistakes I Often Make",
                topic: "Language Learning",
                content: [
                    "What are some common mistakes you make in English?",
                    "Why do you think these mistakes happen?",
                    "Can you give an example of a sentence with a mistake and then correct it?",
                    "What helps you remember not to repeat it?"
                ]
            },
            {
                title: "Speaking with Confidence",
                topic: "Language Learning",
                content: [
                    "Do you feel nervous when you speak English?",
                    "What situations make you nervous?",
                    "What helps you feel more confident?",
                    "Can you describe a time when you spoke English successfully?"
                ]
            },
            {
                title: "My English Learning Goals",
                topic: "Language Learning",
                content: [
                    "What is your short-term goal in English? (1–3 months)",
                    "What is your long-term goal? (1–2 years)",
                    "Why are these goals important to you?",
                    "What steps are you taking to reach them?"
                ]
            },
            {
                title: "How I Learn New Words",
                topic: "Language Learning",
                content: [
                    "How many new words do you try to learn each week?",
                    "Where do you find them? (books, apps, movies?)",
                    "How do you remember them?",
                    "Can you give an example of how you used a new word in a sentence?"
                ]
            },
            {
                title: "Learning English Through Music",
                topic: "Language Learning",
                content: [
                    "Do you listen to English songs?",
                    "Which singer or band do you like?",
                    "Do you look up the lyrics and translate them?",
                    "Have you learned any new phrases or expressions from music?"
                ]
            },
            {
                title: "Studying Alone or with Others",
                topic: "Language Learning",
                content: [
                    "Do you prefer learning English by yourself or in a group?",
                    "What are the advantages and disadvantages of both?",
                    "Do you have a speaking partner or study buddy?",
                    "How do you help each other?"
                ]
            },
            {
                title: "A Language Learning Tip for Others",
                topic: "Language Learning",
                content: [
                    "What is one thing that really helped you learn English?",
                    "Why do you think it works?",
                    "Would you recommend it to others?",
                    "How can someone start using this method?"
                ]
            }
        ]
    },
    {
        level: "Pre-Intermediate",
        topic: "Business & Career",
        scenarios: [
            {
                title: "Your Dream Job",
                topic: "Business & Career",
                content: [
                    "What is your dream job?",
                    "Why would you like to do this job?",
                    "What are the main responsibilities of this job?",
                    "Do you think this job is difficult? Why or why not?"
                ]
            },
            {
                title: "Job Requirements",
                topic: "Business & Career",
                content: [
                    "What skills do you need for your dream job?",
                    "Do you already have these skills?",
                    "What do you think is the most important skill for any job?",
                    "How can you improve your skills?"
                ]
            },
            {
                title: "The Importance of Experience",
                topic: "Business & Career",
                content: [
                    "Why do companies ask for work experience?",
                    "How important is work experience for your career?",
                    "Can you start a career without experience?",
                    "How do you get experience when you're just starting out?"
                ]
            },
            {
                title: "Working with a Boss",
                topic: "Business & Career",
                content: [
                    "What is important in a good boss?",
                    "What would you like your boss to be like?",
                    "Do you think a boss should be strict or friendly? Why?",
                    "What are the most difficult things when working with a boss?"
                ]
            },
            {
                title: "The Best Work Environment",
                topic: "Business & Career",
                content: [
                    "What is your ideal work environment?",
                    "Would you prefer to work in an office, from home, or somewhere else?",
                    "How does a good environment affect your work?",
                    "What makes a workplace stressful for you?"
                ]
            },
            {
                title: "Job Satisfaction",
                topic: "Business & Career",
                content: [
                    "What makes a job satisfying for you?",
                    "Is money the most important thing in a job? Why or why not?",
                    "Do you think it's important to enjoy your work?",
                    "What can you do to feel more satisfied with your job?"
                ]
            },
            {
                title: "Career Goals",
                topic: "Business & Career",
                content: [
                    "Do you have any career goals?",
                    "Where do you see yourself in 5 years?",
                    "What steps do you need to take to reach your career goals?",
                    "What kind of education or training might you need for your dream job?"
                ]
            },
            {
                title: "Interview Tips",
                topic: "Business & Career",
                content: [
                    "What is important when going to a job interview?",
                    "How should you prepare for an interview?",
                    "What questions do you think you will be asked?",
                    "How do you make a good impression in an interview?"
                ]
            },
            {
                title: "Working in a Team",
                topic: "Business & Career",
                content: [
                    "Do you like working in a team or alone?",
                    "What are the advantages of working with a team?",
                    "What are the challenges of working in a group?",
                    "How do you solve problems in a team?"
                ]
            },
            {
                title: "Starting Your Own Business",
                topic: "Business & Career",
                content: [
                    "Would you like to start your own business?",
                    "What kind of business would you like to open?",
                    "What are the first steps to starting a business?",
                    "What challenges do you think you would face?"
                ]
            }
        ]
    },

    {
        level: "Intermediate",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "My Favorite Movie",
                topic: "Movies & TV Shows",
                content: [
                    "One of my all-time favorite movies is... (название).",
                    "It was directed by... (режиссёр).",
                    "The main actors are... (актёры).",
                    "The movie is about... (описание сюжета).",
                    "I like it because... (объяснение).",
                    "Have you ever watched this movie? What do you think about it?"
                ]
            },
            {
                title: "The Impact of Movies",
                topic: "Movies & TV Shows",
                content: [
                    "Movies can influence people by... (учат чему-то, вдохновляют, меняют мнение).",
                    "One movie that changed my perspective on something is...",
                    "It made me realize that...",
                    "Have you ever watched a movie that changed the way you think?"
                ]
            },
            {
                title: "My Ideal Movie Night",
                topic: "Movies & TV Shows",
                content: [
                    "For me, the perfect movie night includes... (друзья, пицца, попкорн).",
                    "I prefer watching movies (at home / in a cinema) because...",
                    "I usually choose (comedy / horror / thriller / action) movies for a fun night.",
                    "If you could plan a movie night, what movie would you choose and why?"
                ]
            },
            {
                title: "Movie Genres – Which One is the Best?",
                topic: "Movies & TV Shows",
                content: [
                    "My favorite movie genre is...",
                    "I enjoy this genre because... (интересный сюжет, хорошие актёры, эмоции).",
                    "One of the best movies in this genre is... (название).",
                    "Are there any movie genres that you don’t like? Why?"
                ]
            },
            {
                title: "Watching Movies vs. TV Series",
                topic: "Movies & TV Shows",
                content: [
                    "I prefer watching (movies / TV series) because...",
                    "The best TV series I have watched is...",
                    "It has (number) seasons, and my favorite season was...",
                    "One advantage of watching TV series is...",
                    "One disadvantage of watching TV series is...",
                    "Do you prefer short TV series or long ones with many seasons?"
                ]
            },
            {
                title: "A Movie That Disappointed Me",
                topic: "Movies & TV Shows",
                content: [
                    "I was really excited to watch... (название).",
                    "But after watching it, I felt... (разочарован, скучно, не впечатлило).",
                    "The problem was... (плохой сюжет, плохая актёрская игра, скучная концовка).",
                    "Have you ever watched a movie that disappointed you?"
                ]
            },
            {
                title: "The Role of Soundtracks in Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I think soundtracks are (very important / not so important) in movies.",
                    "A movie with a great soundtrack is... (название).",
                    "The music in this movie makes me feel... (эмоции).",
                    "Do you think a soundtrack can make a bad movie better?"
                ]
            },
            {
                title: "Classic vs. Modern Movies",
                topic: "Movies & TV Shows",
                content: [
                    "I prefer (classic / modern) movies because...",
                    "One classic movie that I like is...",
                    "One modern movie that I like is...",
                    "What do you think is the main difference between classic and modern movies?"
                ]
            },
            {
                title: "A Movie I Would Recommend",
                topic: "Movies & TV Shows",
                content: [
                    "If I had to recommend one movie to a friend, it would be...",
                    "The reason is...",
                    "It has an interesting story about...",
                    "I think you would like it if you enjoy... (жанр, актёры, сюжет).",
                    "What movie would you recommend to me?"
                ]
            },
            {
                title: "The Future of Movies",
                topic: "Movies & TV Shows",
                content: [
                    "In the future, I think movies will be... (более интерактивные, с искусственным интеллектом, в виртуальной реальности).",
                    "Maybe people will watch movies in... (VR, с голограммами, через чипы в мозге).",
                    "One thing I hope will change about movies in the future is...",
                    "What do you think the future of movies will look like?"
                ]
            }
        ]
    },
    {
        level: "Intermediate",
        topic: "Daily Life",
        scenarios: [
            {
                title: "Balancing Work and Free Time",
                topic: "Daily Life",
                content: [
                    "Balancing work and free time can be challenging during the week.",
                    "I usually finish work or classes around 6 p.m., and after that, I try to relax or focus on hobbies.",
                    "Sometimes, I feel guilty if I spend too much time resting, but I know it’s necessary for mental health.",
                    "In my opinion, time management is the key to a balanced life."
                ]
            },
            {
                title: "My Ideal Morning Routine",
                topic: "Daily Life",
                content: [
                    "If I had the perfect morning, I would start with some light exercise, followed by a healthy breakfast.",
                    "After that, I’d take a few minutes to plan my day or read something inspiring.",
                    "In reality, I often wake up late and rush to get ready.",
                    "Still, I’m trying to improve my habits gradually."
                ]
            },
            {
                title: "How I Stay Organized",
                topic: "Daily Life",
                content: [
                    "To stay organized in daily life, I use a digital calendar and write to-do lists.",
                    "Each night, I review what I need to do the next day.",
                    "Sometimes I forget things, but having a plan helps me stay on track.",
                    "I believe organization reduces stress and increases productivity."
                ]
            },
            {
                title: "Weekend vs. Weekday Lifestyle",
                topic: "Daily Life",
                content: [
                    "During the week, my days are structured and busy.",
                    "I wake up early, follow a routine, and focus on responsibilities.",
                    "On weekends, however, I allow myself more flexibility.",
                    "I might sleep in, meet friends, or take care of personal projects.",
                    "This contrast helps me recharge for the next week."
                ]
            },
            {
                title: "How I Spend My Breaks During the Day",
                topic: "Daily Life",
                content: [
                    "Throughout the day, I take short breaks to stay energized.",
                    "Usually, I walk around, stretch, or have a cup of tea.",
                    "If I work for too long without resting, I start to lose focus.",
                    "Taking regular breaks improves my concentration and mood."
                ]
            },
            {
                title: "My Approach to Daily Fitness",
                topic: "Daily Life",
                content: [
                    "I try to stay active by including exercise in my daily routine.",
                    "Even if I don’t have time for a full workout, I walk instead of taking the bus or do stretches at home.",
                    "On busy days, I remind myself that even 15 minutes is better than nothing.",
                    "I think consistency is more important than intensity."
                ]
            },
            {
                title: "Technology in My Everyday Life",
                topic: "Daily Life",
                content: [
                    "Technology plays a big role in my daily routine.",
                    "I use my phone for messages, alarms, notes, and even workouts.",
                    "Sometimes, I feel like I’m too dependent on it.",
                    "That’s why I occasionally take a break from screens to reconnect with the real world."
                ]
            },
            {
                title: "My Role at Home",
                topic: "Daily Life",
                content: [
                    "At home, I share responsibilities with my family.",
                    "I usually do the dishes and help with grocery shopping.",
                    "Sometimes we cook meals together, which makes the work more enjoyable.",
                    "I think teamwork is important for a comfortable home environment."
                ]
            },
            {
                title: "How I Manage Stress in Daily Life",
                topic: "Daily Life",
                content: [
                    "Daily life can be stressful, especially when there’s too much to do.",
                    "When I feel overwhelmed, I try to take deep breaths, go for a walk, or talk to someone.",
                    "I’ve learned that avoiding stress doesn’t help — managing it does.",
                    "Finding a healthy routine has helped me feel more in control."
                ]
            },
            {
                title: "A Day That Went Differently Than Planned",
                topic: "Daily Life",
                content: [
                    "Last week, I had a day that didn’t go as expected.",
                    "I missed the bus, arrived late to work, and forgot my lunch.",
                    "Instead of getting upset, I decided to stay positive and adapt.",
                    "In the end, the day wasn’t perfect, but I handled it well."
                ]
            }
        ]
    },
    {
        level: "Intermediate",
        topic: "Food & Cooking",
        scenarios: [
            {
                title: "A Family Recipe",
                topic: "Food & Cooking",
                content: [
                    "There’s a special recipe that’s been in my family for years:...",
                    "It’s traditionally cooked for... (holiday, family gathering)",
                    "The preparation takes...",
                    "The flavors remind me of...",
                    "I love making it because..."
                ]
            },
            {
                title: "A Cooking Disaster",
                topic: "Food & Cooking",
                content: [
                    "Once, I tried to cook... and it didn’t go well.",
                    "I forgot to... / I added too much...",
                    "The food turned out...",
                    "My family/friends said...",
                    "I learned that next time I should..."
                ]
            },
            {
                title: "Hosting a Dinner Party",
                topic: "Food & Cooking",
                content: [
                    "Last month, I hosted a dinner party for...",
                    "I planned the menu in advance: starter, main course, dessert.",
                    "Cooking for a group was...",
                    "Everyone enjoyed...",
                    "Next time, I want to try making..."
                ]
            },
            {
                title: "Food and Culture",
                topic: "Food & Cooking",
                content: [
                    "Food is an important part of my culture.",
                    "For example, we often eat... during...",
                    "This dish represents...",
                    "It’s usually made with...",
                    "When I eat it, I feel..."
                ]
            },
            {
                title: "Following a Diet",
                topic: "Food & Cooking",
                content: [
                    "I’ve recently tried following a specific diet:...",
                    "It includes/excludes...",
                    "It was hard because...",
                    "But I noticed some benefits, like...",
                    "I think it’s important to eat..."
                ]
            },
            {
                title: "Cooking as a Hobby",
                topic: "Food & Cooking",
                content: [
                    "Cooking is more than a chore for me, it’s a hobby.",
                    "I enjoy experimenting with...",
                    "My favorite type of cuisine to cook is...",
                    "I often watch videos or read blogs about...",
                    "It helps me relax and be creative."
                ]
            },
            {
                title: "Street Food Experience",
                topic: "Food & Cooking",
                content: [
                    "While traveling, I tried street food in...",
                    "I was curious about...",
                    "It was prepared right in front of me with...",
                    "The taste was...",
                    "I’d recommend it because..."
                ]
            },
            {
                title: "Cooking with Someone Else",
                topic: "Food & Cooking",
                content: [
                    "Cooking with someone else is fun and also a challenge.",
                    "I once cooked with... and we made...",
                    "We divided the tasks like...",
                    "There were some funny moments when...",
                    "The final dish turned out..."
                ]
            },
            {
                title: "Food Allergies and Restrictions",
                topic: "Food & Cooking",
                content: [
                    "I (or someone I know) has a food allergy to...",
                    "That means avoiding dishes with...",
                    "It’s sometimes difficult when eating out because...",
                    "We always check labels and ask...",
                    "Cooking at home is safer because..."
                ]
            },
            {
                title: "A Unique Dish I Invented",
                topic: "Food & Cooking",
                content: [
                    "I once invented a dish using...",
                    "I didn’t follow a recipe, I just...",
                    "Surprisingly, it tasted...",
                    "Now I make it often and call it...",
                    "It’s my signature dish when…"
                ]
            }
        ]
    },
    {
        level: "Intermediate",
        topic: "Technology & Innovation",
        scenarios: [
            {
                title: "The Internet of Things",
                topic: "Technology & Innovation",
                content: [
                    "The Internet of Things (IoT) refers to the connection of everyday objects to the internet.",
                    "For example, a smart refrigerator can help you track the food inside and remind you when it's time to buy more.",
                    "IoT is used to make our homes smarter by controlling lights, temperature, and even security.",
                    "How do you think IoT will change our daily lives?"
                ]
            },
            {
                title: "Virtual Reality and Augmented Reality",
                topic: "Technology & Innovation",
                content: [
                    "Virtual reality (VR) creates a completely new environment that you can interact with.",
                    "Augmented reality (AR) adds digital elements to the real world, like when you use your phone to see virtual objects in the real world.",
                    "Both technologies are used in gaming, education, and even in medicine.",
                    "Have you tried VR or AR? How was your experience?"
                ]
            },
            {
                title: "Autonomous Cars",
                topic: "Technology & Innovation",
                content: [
                    "Autonomous cars are vehicles that can drive themselves without human control.",
                    "These cars use sensors and artificial intelligence to navigate and make decisions.",
                    "They can help reduce traffic accidents and make travel more efficient.",
                    "What do you think about autonomous cars? Do you believe they are safe?"
                ]
            },
            {
                title: "3D Printing",
                topic: "Technology & Innovation",
                content: [
                    "3D printing is a process that creates three-dimensional objects from a digital file.",
                    "It is used to make products in various industries, including healthcare, construction, and fashion.",
                    "For example, 3D printers can create medical implants, prototypes for new products, and even food.",
                    "What do you think 3D printing will be used for in the future?"
                ]
            },
            {
                title: "Artificial Intelligence and Machine Learning",
                topic: "Technology & Innovation",
                content: [
                    "Artificial intelligence (AI) is the development of computer systems that can perform tasks that would normally require human intelligence.",
                    "Machine learning is a branch of AI that allows computers to learn from data and improve over time.",
                    "AI is already used in many fields, such as customer service (chatbots), healthcare (diagnosing diseases), and transportation (self-driving cars).",
                    "How do you see AI impacting your job or studies in the future?"
                ]
            },
            {
                title: "The Future of Smartphones",
                topic: "Technology & Innovation",
                content: [
                    "Smartphones have evolved over the years to become more powerful and multifunctional.",
                    "In the future, smartphones might have features like... (e.g., foldable screens, holographic displays, or advanced AI assistants).",
                    "They might also become more integrated with other devices, such as smart glasses or wearables.",
                    "What new features would you like to see in future smartphones?"
                ]
            },
            {
                title: "The Role of Technology in Education",
                topic: "Technology & Innovation",
                content: [
                    "Technology has transformed the way we learn.",
                    "Online courses, virtual classrooms, and educational apps allow students to learn from anywhere at any time.",
                    "In the future, we might see even more advanced learning tools, such as AI tutors or virtual reality classrooms.",
                    "How has technology changed your education experience?"
                ]
            },
            {
                title: "Renewable Energy and Technology",
                topic: "Technology & Innovation",
                content: [
                    "Renewable energy sources, such as solar and wind power, are becoming more common because they are sustainable and help reduce pollution.",
                    "Technology has made renewable energy more efficient, for example, by developing better solar panels and wind turbines.",
                    "In the future, we may rely more on renewable energy and smart grids to manage power usage.",
                    "What role do you think technology will play in the future of energy?"
                ]
            },
            {
                title: "Drones and Their Uses",
                topic: "Technology & Innovation",
                content: [
                    "Drones are unmanned aerial vehicles that can be controlled remotely.",
                    "They are used in various industries, including delivery services, agriculture, and even filmmaking.",
                    "Drones are also important in rescue missions and environmental monitoring.",
                    "Do you think drones will become an essential part of our daily lives? Why or why not?"
                ]
            },
            {
                title: "Blockchain Technology",
                topic: "Technology & Innovation",
                content: [
                    "Blockchain is a decentralized system that records transactions in a secure and transparent way.",
                    "It is best known for being the technology behind cryptocurrencies like Bitcoin.",
                    "However, blockchain can also be used in various industries, including healthcare, supply chain management, and voting systems.",
                    "What do you know about blockchain? How do you think it will affect the future of business?"
                ]
            }
        ]
    },
    {
        level: "Intermediate",
        topic: "Music & Arts",
        scenarios: [
            {
                title: "A Concert I Want to Go To",
                topic: "Music & Arts",
                content: [
                    "I would love to go to a concert of... (назови исполнителя или группу)",
                    "This concert will be held in... (где будет проходить концерт)",
                    "I want to go because... (почему ты хочешь попасть на этот концерт)",
                    "I think the concert will be... (как ты думаешь, каким будет концерт: невероятным, вдохновляющим и т.д.)",
                    "Do you usually attend concerts?"
                ]
            },
            {
                title: "The Importance of Music in My Life",
                topic: "Music & Arts",
                content: [
                    "Music plays an important role in my life because... (почему музыка важна для тебя)",
                    "I listen to music when... (когда ты обычно слушаешь музыку)",
                    "Music helps me to... (как музыка помогает тебе: расслабиться, сосредоточиться и т.д.)",
                    "I prefer listening to music on... (как ты предпочитаешь слушать музыку: через наушники, громко в машине и т.д.)",
                    "How important is music to you?"
                ]
            },
            {
                title: "My Favorite Art Style",
                topic: "Music & Arts",
                content: [
                    "My favorite style of art is... (назови стиль искусства: реализм, абстракционизм и т.д.)",
                    "I like this style because... (почему тебе нравится этот стиль)",
                    "The artists who use this style are... (назови художников, которые работают в этом стиле)",
                    "I find this style interesting because... (почему тебе кажется этот стиль интересным)",
                    "Do you like modern art?"
                ]
            },
            {
                title: "A Painting I Have Seen",
                topic: "Music & Arts",
                content: [
                    "I recently saw a painting by... (назови художника)",
                    "The painting is called... (как называется картина)",
                    "The painting is about... (о чем картина)",
                    "I think this painting is... (как ты думаешь, какая эта картина: яркая, мрачная, красивая и т.д.)",
                    "Do you enjoy looking at art?"
                ]
            },
            {
                title: "The Influence of Music on Emotions",
                topic: "Music & Arts",
                content: [
                    "Music can change how I feel because... (как музыка может изменить твои эмоции)",
                    "For example, when I listen to happy music, I feel... (что ты чувствуешь, когда слушаешь веселую музыку)",
                    "When I listen to sad music, I feel... (как ты себя чувствуешь от грустной музыки)",
                    "I think music is powerful because... (почему музыка так сильна)",
                    "Can music change your mood?"
                ]
            },
            {
                title: "A Famous Musician I Admire",
                topic: "Music & Arts",
                content: [
                    "One musician I really admire is... (назови музыканта)",
                    "I admire this person because... (почему ты восхищаешься этим музыкантом)",
                    "This musician is known for... (чем известен этот музыкант)",
                    "I like their music because... (почему тебе нравится его/ее музыка)",
                    "What about you, do you admire any musicians?"
                ]
            },
            {
                title: "The Role of Art in Society",
                topic: "Music & Arts",
                content: [
                    "Art plays an important role in society because... (почему искусство важно в обществе)",
                    "Art can help people to... (как искусство может помочь людям)",
                    "Some artists use their work to talk about... (что часто обсуждают художники в своих произведениях)",
                    "I think art can change the world by... (как искусство может повлиять на мир)",
                    "How do you feel about the role of art in society?"
                ]
            },
            {
                title: "Learning an Instrument",
                topic: "Music & Arts",
                content: [
                    "I am learning to play... (назови инструмент)",
                    "I started learning because... (почему ты решил учиться играть)",
                    "It’s difficult because... (почему это сложно)",
                    "I practice... (как часто ты практикуешься)",
                    "Do you play any musical instruments?"
                ]
            },
            {
                title: "A Performance I Enjoyed",
                topic: "Music & Arts",
                content: [
                    "I once saw a performance of... (назови вид представления: балет, театральное представление и т.д.)",
                    "The performance was amazing because... (почему тебе понравилось представление)",
                    "The actors/dancers were... (как ты описал бы актеров или танцоров)",
                    "I think the performance was memorable because... (почему ты запомнил это представление)",
                    "Have you ever seen a performance that impressed you?"
                ]
            },
            {
                title: "How I Appreciate Art",
                topic: "Music & Arts",
                content: [
                    "I usually appreciate art by... (как ты воспринимаешь искусство: в галереях, на выставках)",
                    "I like to understand the meaning behind the art because... (почему тебе важно понять смысл искусства)",
                    "When I see a painting, I try to... (что ты стараешься сделать, когда смотришь на картину)",
                    "I think art is worth appreciating because... (почему искусство стоит ценить)",
                    "Do you enjoy learning about art?"
                ]
            }
        ]
    },
    {
        level: "Intermediate",
        topic: "Travel & Adventures",
        scenarios: [
            {
                title: "Traveling Alone vs. Traveling with Friends",
                topic: "Travel & Adventures",
                content: [
                    "I’ve experienced both solo travel and group travel.",
                    "Traveling alone is great because... (личные впечатления)",
                    "But traveling with friends can be more fun because...",
                    "One time I traveled alone to... and I learned...",
                    "Now, I prefer to travel... (один или с кем-то) because..."
                ]
            },
            {
                title: "A Place That Surprised Me",
                topic: "Travel & Adventures",
                content: [
                    "I didn’t expect much from my trip to..., but it really surprised me.",
                    "When I arrived, I saw... (первое впечатление)",
                    "The people were... and the food was...",
                    "What impressed me most was...",
                    "Now I tell everyone to visit this place because..."
                ]
            },
            {
                title: "My Experience with a Foreign Language While Traveling",
                topic: "Travel & Adventures",
                content: [
                    "When I traveled to..., I didn’t speak the language well.",
                    "At first, it was difficult to... (что было сложно)",
                    "I used gestures, translation apps, and sometimes...",
                    "One funny moment was when I said... but it actually meant...",
                    "In the end, I learned some useful phrases and felt proud."
                ]
            },
            {
                title: "A Dangerous or Challenging Travel Situation",
                topic: "Travel & Adventures",
                content: [
                    "Once, while traveling in..., I faced a difficult situation.",
                    "It happened when... (что произошло)",
                    "I stayed calm and tried to...",
                    "Luckily, someone helped me or I found a solution.",
                    "Now I’m more careful when I travel and always..."
                ]
            },
            {
                title: "Visiting a Remote or Unusual Place",
                topic: "Travel & Adventures",
                content: [
                    "Most people visit famous cities, but I once went to a very remote place:...",
                    "It was hard to reach because...",
                    "There weren’t many tourists, but the nature and atmosphere were amazing.",
                    "I spent time doing...",
                    "That experience changed the way I think about travel."
                ]
            },
            {
                title: "Trying Local Food While Traveling",
                topic: "Travel & Adventures",
                content: [
                    "Trying local food is one of my favorite parts of traveling.",
                    "In..., I tasted something very unique:...",
                    "At first, I wasn’t sure, but then...",
                    "Now I always try something new when I visit a different country.",
                    "Food tells you a lot about the culture."
                ]
            },
            {
                title: "Planning the Perfect Itinerary",
                topic: "Travel & Adventures",
                content: [
                    "When I travel, I usually plan everything in advance.",
                    "I make a list of places to see, foods to try, and things to do.",
                    "Once I made a perfect itinerary for a trip to...",
                    "We followed the plan, but we also left time for surprises.",
                    "Good planning helps, but flexibility is important too."
                ]
            },
            {
                title: "Cultural Differences While Traveling",
                topic: "Travel & Adventures",
                content: [
                    "During my trip to..., I noticed many cultural differences.",
                    "For example, people there... (что-то необычное)",
                    "At first, I was surprised, but then I learned to respect and understand it.",
                    "Now I always research local customs before traveling.",
                    "It helps avoid misunderstandings and shows respect."
                ]
            },
            {
                title: "The Importance of Travel in My Life",
                topic: "Travel & Adventures",
                content: [
                    "Traveling has become a big part of my life.",
                    "It helps me relax, learn, and grow.",
                    "Each trip teaches me something new — about people, places, or myself.",
                    "My favorite part is...",
                    "In the future, I want to travel to... and experience..."
                ]
            },
            {
                title: "Environmental Impact of Travel",
                topic: "Travel & Adventures",
                content: [
                    "Traveling is amazing, but it also affects the environment.",
                    "Planes, cars, and mass tourism can cause pollution.",
                    "I try to travel responsibly by... (eco-friendly habits)",
                    "Last time, I stayed in an eco-hotel and avoided plastic.",
                    "I believe we can enjoy travel while protecting nature."
                ]
            }
        ]
    },
    {
        level: "Intermediate",
        topic: "Sports & Fitness",
        scenarios: [
            {
                title: "My Weekly Fitness Routine",
                topic: "Sports & Fitness",
                content: [
                    "Every week, I try to stay active by...",
                    "My routine includes activities like...",
                    "Which part of your routine do you enjoy the most, and why?",
                    "What would you change about your current routine?"
                ]
            },
            {
                title: "The Role of Sports in My Life",
                topic: "Sports & Fitness",
                content: [
                    "Sports have always been important to me because...",
                    "They help me to...",
                    "How have sports affected your lifestyle or personality?"
                ]
            },
            {
                title: "Comparing Team and Solo Sports",
                topic: "Sports & Fitness",
                content: [
                    "I prefer... (team/solo) sports because...",
                    "In my experience, playing with others helps me...",
                    "What are the advantages and disadvantages of both?"
                ]
            },
            {
                title: "A Memorable Sports Event I Watched",
                topic: "Sports & Fitness",
                content: [
                    "I remember watching...",
                    "It was exciting because...",
                    "Who were you with, and what made it special?"
                ]
            },
            {
                title: "How to Motivate Yourself to Exercise",
                topic: "Sports & Fitness",
                content: [
                    "When I don’t feel like exercising, I usually...",
                    "What helps me stay motivated is...",
                    "What strategies do you use to stay consistent?"
                ]
            },
            {
                title: "Fitness Trends and Apps",
                topic: "Sports & Fitness",
                content: [
                    "Lately, I’ve tried... (fitness app, online class, etc.)",
                    "It was... (fun, helpful, boring)",
                    "Do you think technology helps or distracts us from real fitness?"
                ]
            },
            {
                title: "The Most Impressive Athlete",
                topic: "Sports & Fitness",
                content: [
                    "In my opinion, ... is an incredible athlete",
                    "He/She is known for...",
                    "What makes someone truly inspiring in sports?"
                ]
            },
            {
                title: "Sports and Cultural Identity",
                topic: "Sports & Fitness",
                content: [
                    "In my country, the most popular sport is...",
                    "People usually support...",
                    "How do sports reflect culture or national identity?"
                ]
            },
            {
                title: "Handling Loss in Competition",
                topic: "Sports & Fitness",
                content: [
                    "Once, I lost a game/match and felt...",
                    "What helped me recover was...",
                    "How do you usually deal with failure in sports or fitness?"
                ]
            },
            {
                title: "Setting Fitness Goals",
                topic: "Sports & Fitness",
                content: [
                    "Right now, my fitness goal is...",
                    "To achieve it, I need to...",
                    "What kind of goals do you think are realistic and healthy?"
                ]
            }
        ]
    },
    {
        level: "Intermediate",
        topic: "Science & Nature",
        scenarios: [
            {
                title: "Climate Change",
                topic: "Science & Nature",
                content: [
                    "What is climate change?",
                    "How does it affect the planet?",
                    "Do you think it is caused by human activities?",
                    "What can we do to reduce the effects of climate change?"
                ]
            },
            {
                title: "Renewable Energy",
                topic: "Science & Nature",
                content: [
                    "What is renewable energy?",
                    "Can you name some types of renewable energy?",
                    "Why is renewable energy important for the environment?",
                    "What do you think is the future of renewable energy?"
                ]
            },
            {
                title: "Forests and Deforestation",
                topic: "Science & Nature",
                content: [
                    "Why are forests so important for life on Earth?",
                    "What are the main causes of deforestation?",
                    "How does deforestation affect wildlife and climate?",
                    "What can be done to stop deforestation?"
                ]
            },
            {
                title: "Animals in Danger",
                topic: "Science & Nature",
                content: [
                    "What are some animals that are endangered today?",
                    "Why are some species becoming endangered?",
                    "How can people help protect endangered animals?",
                    "Do you think the government should do more to protect wildlife?"
                ]
            },
            {
                title: "The Moon and Space Exploration",
                topic: "Science & Nature",
                content: [
                    "What do you know about the Moon?",
                    "How does space exploration benefit us?",
                    "What was the first human mission to the Moon like?",
                    "Do you think we should continue exploring space?"
                ]
            },
            {
                title: "Pollution",
                topic: "Science & Nature",
                content: [
                    "What types of pollution do you know about?",
                    "How does pollution affect the environment and our health?",
                    "What are some ways to reduce pollution?",
                    "What do you think individuals can do to prevent pollution?"
                ]
            },
            {
                title: "Natural Wonders of the World",
                topic: "Science & Nature",
                content: [
                    "What are some natural wonders that you would like to visit?",
                    "Why are these places special?",
                    "How do these wonders influence the local environment?",
                    "What is being done to protect them?"
                ]
            },
            {
                title: "The Importance of Water",
                topic: "Science & Nature",
                content: [
                    "Why is water so important for life?",
                    "What would happen if we run out of fresh water?",
                    "How can we conserve water in our daily lives?",
                    "What are some countries that face water shortages?"
                ]
            },
            {
                title: "The Life Cycle of a Plant",
                topic: "Science & Nature",
                content: [
                    "Can you describe the life cycle of a plant?",
                    "What are the stages in a plant's life?",
                    "What do plants need to grow?",
                    "How can we help plants grow better?"
                ]
            },
            {
                title: "The Human Impact on Nature",
                topic: "Science & Nature",
                content: [
                    "How do humans impact the environment?",
                    "What are some ways in which we harm nature?",
                    "How can we make our lifestyle more eco-friendly?",
                    "Do you think more people are becoming aware of environmental issues?"
                ]
            }
        ]
    },
    {
        level: "Intermediate",
        topic: "Language Learning",
        scenarios: [
            {
                title: "My Motivation to Learn Languages",
                topic: "Language Learning",
                content: [
                    "Why did you decide to learn English?",
                    "Has your motivation changed over time?",
                    "What keeps you going when it feels hard?",
                    "Do you want to learn any other languages? Why?"
                ]
            },
            {
                title: "Immersing Myself in English",
                topic: "Language Learning",
                content: [
                    "How do you try to surround yourself with English?",
                    "Do you watch movies, read books, or talk to native speakers?",
                    "What has helped you the most?",
                    "Would you like to live in an English-speaking country?"
                ]
            },
            {
                title: "Learning Through Mistakes",
                topic: "Language Learning",
                content: [
                    "Can you describe a funny or embarrassing mistake you made in English?",
                    "What did you learn from it?",
                    "Do you believe that making mistakes helps you improve? Why or why not?",
                    "How do you react when someone corrects you?"
                ]
            },
            {
                title: "The Role of Grammar in Learning",
                topic: "Language Learning",
                content: [
                    "How important is grammar to you in language learning?",
                    "Do you enjoy studying grammar rules, or do you prefer practice?",
                    "What grammar topic was the hardest for you to learn?",
                    "How do you practice using grammar correctly?"
                ]
            },
            {
                title: "Improving Speaking Skills",
                topic: "Language Learning",
                content: [
                    "What do you do to improve your speaking?",
                    "Do you talk to yourself, use apps, or join conversations?",
                    "How do you stay confident while speaking?",
                    "What’s the biggest change you’ve noticed in your speaking over time?"
                ]
            },
            {
                title: "Using English in Real Life",
                topic: "Language Learning",
                content: [
                    "Have you ever used English in a real-life situation (e.g., travel, work, study)?",
                    "What happened?",
                    "How did it feel to communicate in English outside the classroom?",
                    "Did anything surprise you?"
                ]
            },
            {
                title: "Language Learning Apps and Tools",
                topic: "Language Learning",
                content: [
                    "Which apps, websites, or tools do you use to study English?",
                    "What do you like about them?",
                    "How do you organize your study time with them?",
                    "Do you recommend any specific one?"
                ]
            },
            {
                title: "Translating vs. Thinking in English",
                topic: "Language Learning",
                content: [
                    "Do you often translate in your head when speaking English?",
                    "Have you tried thinking directly in English?",
                    "What helps you make the switch?",
                    "Do you think it's important to stop translating?"
                ]
            },
            {
                title: "Cultural Differences in Language",
                topic: "Language Learning",
                content: [
                    "What cultural things have you learned through English?",
                    "Have you noticed any expressions or habits that are different from your culture?",
                    "How does learning a language help you understand its culture better?",
                    "Can you give an example?"
                ]
            },
            {
                title: "Advice to My Past Self",
                topic: "Language Learning",
                content: [
                    "If you could go back to when you first started learning English, what advice would you give yourself?",
                    "What would you do differently?",
                    "What habits would you start earlier?",
                    "What would you tell other learners at your level now?"
                ]
            }
        ]
    },
    {
        level: "Intermediate",
        topic: "Business & Career",
        scenarios: [
            {
                title: "Your Career Path",
                topic: "Business & Career",
                content: [
                    "What kind of career do you want to have?",
                    "What steps will you take to get there?",
                    "Have you already started working towards your career?",
                    "What obstacles might you face in your career path?"
                ]
            },
            {
                title: "Leadership Skills",
                topic: "Business & Career",
                content: [
                    "What qualities make a good leader?",
                    "Have you ever been in a leadership position?",
                    "Do you think leadership is something you can learn?",
                    "What leadership skills do you think are the most important?"
                ]
            },
            {
                title: "Networking",
                topic: "Business & Career",
                content: [
                    "How important is networking for your career?",
                    "Do you enjoy meeting new people in a professional setting?",
                    "What strategies can you use to build a professional network?",
                    "How can networking help you advance in your career?"
                ]
            },
            {
                title: "Work-Life Balance",
                topic: "Business & Career",
                content: [
                    "How do you balance work and personal life?",
                    "What are the benefits of maintaining a good work-life balance?",
                    "Do you think it’s important to separate work from your personal life?",
                    "What are the challenges of achieving work-life balance?"
                ]
            },
            {
                title: "Dealing with Stress",
                topic: "Business & Career",
                content: [
                    "What causes stress at work for you?",
                    "How do you manage stress in your career?",
                    "Do you think stress can be positive for motivation?",
                    "What advice would you give to someone who is stressed at work?"
                ]
            },
            {
                title: "Career Development",
                topic: "Business & Career",
                content: [
                    "What steps can you take to improve your career?",
                    "How do you stay updated in your field of work?",
                    "Do you think it’s important to take courses or attend workshops?",
                    "What are some examples of ways to develop professionally?"
                ]
            },
            {
                title: "Changing Careers",
                topic: "Business & Career",
                content: [
                    "Would you ever consider changing your career?",
                    "What factors would make you want to change your job or career?",
                    "What skills would you need to transfer to a new career?",
                    "How would you prepare for a career change?"
                ]
            },
            {
                title: "Business Strategies",
                topic: "Business & Career",
                content: [
                    "What do you think is the most important factor for a successful business?",
                    "What business strategy do you think works best?",
                    "How can businesses adapt to changes in the market?",
                    "What makes a business competitive?"
                ]
            },
            {
                title: "Working in Different Cultures",
                topic: "Business & Career",
                content: [
                    "Have you ever worked with people from different cultures?",
                    "What challenges can arise when working in a multicultural environment?",
                    "What are the benefits of working with a diverse team?",
                    "How can you adapt to different work cultures?"
                ]
            },
            {
                title: "Job Satisfaction",
                topic: "Business & Career",
                content: [
                    "How do you measure job satisfaction?",
                    "What makes you happy in your job?",
                    "How can companies improve job satisfaction for their employees?",
                    "Would you stay in a job you don’t enjoy if it pays well?"
                ]
            }
        ]
    },

    {
        level: "Upper-Intermediate",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "The Role of Movies in Society",
                topic: "Movies & TV Shows",
                content: [
                    "Movies are not just entertainment; they can also... (учить, вдохновлять, информировать).",
                    "A movie that had a big impact on society is... (название).",
                    "It influenced people by...",
                    "Do you think movies should always have a deeper message, or is entertainment enough?"
                ]
            },
            {
                title: "The Most Overrated Movie",
                topic: "Movies & TV Shows",
                content: [
                    "In my opinion, one of the most overrated movies is...",
                    "People love it because...",
                    "But I think it is... (скучный, предсказуемый, переоценённый).",
                    "What movie do you think is overrated?"
                ]
            },
            {
                title: "Book vs. Movie Adaptations",
                topic: "Movies & TV Shows",
                content: [
                    "Many movies are based on books. One example is...",
                    "I (liked/didn’t like) the movie adaptation because...",
                    "In my opinion, the book was (better/worse) than the movie because...",
                    "Do you prefer reading the book first or watching the movie first?"
                ]
            },
            {
                title: "The Psychology of Horror Movies",
                topic: "Movies & TV Shows",
                content: [
                    "Some people love horror movies because...",
                    "Others avoid them because...",
                    "One of the scariest horror movies I’ve watched is...",
                    "What do you think makes a horror movie truly scary?"
                ]
            },
            {
                title: "Movies That Changed the Film Industry",
                topic: "Movies & TV Shows",
                content: [
                    "Some movies revolutionized the film industry. One example is...",
                    "This movie was innovative because... (спецэффекты, сюжет, технологии).",
                    "Today, its influence can be seen in... (других фильмах, индустрии).",
                    "What movie do you think had the biggest impact on cinema?"
                ]
            },
            {
                title: "The Ethics of Movie Making",
                topic: "Movies & TV Shows",
                content: [
                    "Some movies are controversial because they include... (насилие, политика, исторические события).",
                    "One example of a controversial movie is...",
                    "Some people think movies should avoid sensitive topics. I (agree/disagree) because...",
                    "Do you think filmmakers should have complete freedom in what they create?"
                ]
            },
            {
                title: "Streaming vs. Cinema",
                topic: "Movies & TV Shows",
                content: [
                    "With streaming services, fewer people go to the cinema.",
                    "I personally prefer (watching at home / going to the cinema) because...",
                    "One advantage of streaming is...",
                    "One disadvantage is...",
                    "Do you think cinemas will disappear in the future?"
                ]
            },
            {
                title: "Movie Budgets – Do Expensive Movies Always Succeed?",
                topic: "Movies & TV Shows",
                content: [
                    "Some of the most expensive movies include...",
                    "A high budget does not always mean a good movie. One example is...",
                    "However, some low-budget movies became very successful, like...",
                    "What do you think is more important: budget or creativity?"
                ]
            },
            {
                title: "Movies and Cultural Differences",
                topic: "Movies & TV Shows",
                content: [
                    "Movies can reflect the culture of a country. One example is...",
                    "In my culture, movies often include... (традиции, семейные ценности, музыка).",
                    "One cultural difference I noticed in foreign movies is...",
                    "What movie do you think best represents your culture?"
                ]
            },
            {
                title: "The Future of Storytelling in Movies",
                topic: "Movies & TV Shows",
                content: [
                    "In the future, storytelling in movies will change by...",
                    "Maybe we will see more... (интерактивные фильмы, ИИ-сценаристы, персонализированные сюжеты).",
                    "One thing I hope will NOT change about movies is...",
                    "If you could predict the future of movies, what would it be like?"
                ]
            }
        ]
    },
    {
        level: "Upper-Intermediate",
        topic: "Daily Life",
        scenarios: [
            {
                title: "A Productive Day",
                topic: "Daily Life",
                content: [
                    "Describe a day when you felt especially productive.",
                    "What did you accomplish, and how did you stay focused?",
                    "What strategies or tools helped you stay organized and motivated?",
                    "How did you feel at the end of the day?"
                ]
            },
            {
                title: "Digital Habits",
                topic: "Daily Life",
                content: [
                    "Talk about how you use digital devices in your daily life.",
                    "How much time do you spend on your phone or computer?",
                    "What apps or platforms do you use the most, and why?",
                    "Do you ever try to limit your screen time? Why or why not?"
                ]
            },
            {
                title: "A Morning That Changed Your Day",
                topic: "Daily Life",
                content: [
                    "Describe a morning that started unusually or unexpectedly.",
                    "What happened, and how did it affect the rest of your day?",
                    "Did you manage to stay calm or adapt to the situation?",
                    "What would you do differently if it happened again?"
                ]
            },
            {
                title: "Managing Chores and Responsibilities",
                topic: "Daily Life",
                content: [
                    "How do you manage daily tasks like cleaning, cooking, or errands?",
                    "Do you follow a schedule, or handle them as needed?",
                    "Which tasks do you enjoy, and which do you avoid?",
                    "How do you stay motivated to complete routine responsibilities?"
                ]
            },
            {
                title: "The Role of Food in Your Daily Life",
                topic: "Daily Life",
                content: [
                    "What kind of meals do you usually have during the week?",
                    "Do you prepare food yourself or eat out?",
                    "How important is nutrition in your everyday decisions?",
                    "Has your eating routine changed over time?"
                ]
            },
            {
                title: "Coping with Busy Schedules",
                topic: "Daily Life",
                content: [
                    "Describe a week when you had too much to do.",
                    "How did you manage your time and energy?",
                    "Did you use any planning tools or techniques?",
                    "What lessons did you learn about dealing with pressure?"
                ]
            },
            {
                title: "Time for Yourself",
                topic: "Daily Life",
                content: [
                    "Do you take time each day to do something just for yourself?",
                    "What do you usually do — reading, walking, listening to music?",
                    "Why is it important to have alone time in your daily routine?",
                    "What happens if you skip it for a few days?"
                ]
            },
            {
                title: "The Importance of Small Habits",
                topic: "Daily Life",
                content: [
                    "What small daily habits have a big impact on your life?",
                    "For example: drinking water, journaling, stretching, etc.",
                    "How did you build these habits, and how do you maintain them?",
                    "Would you like to add any new habits?"
                ]
            },
            {
                title: "A Daily Routine That Inspires You",
                topic: "Daily Life",
                content: [
                    "Describe the daily routine of someone you admire.",
                    "Why do you find their lifestyle inspiring or impressive?",
                    "What elements of their routine would you like to adopt?",
                    "Do you think routines influence success or happiness?"
                ]
            },
            {
                title: "Balancing Social Life and Responsibilities",
                topic: "Daily Life",
                content: [
                    "How do you find time for friends and family during a busy week?",
                    "Do you prefer planned activities or spontaneous meet-ups?",
                    "What challenges do you face when trying to balance everything?",
                    "How do you prioritize your time?"
                ]
            }
        ]
    },
    {
        level: "Upper-Intermediate",
        topic: "Food & Cooking",
        scenarios: [
            {
                title: "Cooking for Special Occasions",
                topic: "Food & Cooking",
                content: [
                    "For special occasions, I like to cook...",
                    "I usually prepare a three-course meal:...",
                    "The hardest part is...",
                    "It’s important to balance the flavors, so I always...",
                    "My guests typically enjoy... and they often ask for the recipe."
                ]
            },
            {
                title: "A Food I Didn’t Like at First",
                topic: "Food & Cooking",
                content: [
                    "When I first tried... I didn’t like it because...",
                    "The texture was... or the taste was...",
                    "But after a few tries, I realized that...",
                    "Now, I enjoy it and often cook it with...",
                    "It’s become one of my go-to dishes."
                ]
            },
            {
                title: "A Meal That Reminds Me of Home",
                topic: "Food & Cooking",
                content: [
                    "When I miss home, I cook...",
                    "This dish is special because it reminds me of...",
                    "The recipe was passed down from...",
                    "I usually serve it with...",
                    "It’s comforting and brings back memories of..."
                ]
            },
            {
                title: "Trying a New Cuisine",
                topic: "Food & Cooking",
                content: [
                    "Last year, I tried cooking food from...",
                    "I was excited to learn about the ingredients like...",
                    "The cooking techniques were different because...",
                    "It took some time to get the flavors right, but I finally...",
                    "Now, I enjoy experimenting with dishes from this cuisine."
                ]
            },
            {
                title: "Cooking with Limited Ingredients",
                topic: "Food & Cooking",
                content: [
                    "Once, I had to cook with only a few ingredients:...",
                    "I had to be creative and think of ways to...",
                    "The final dish was...",
                    "Even though it wasn’t what I expected, it turned out...",
                    "I learned that you don’t need many ingredients to make something delicious."
                ]
            },
            {
                title: "A Cooking Challenge with Friends",
                topic: "Food & Cooking",
                content: [
                    "I once participated in a cooking challenge with friends.",
                    "The challenge was to make... with...",
                    "It was hard because...",
                    "We were in a time crunch, and things didn’t go as planned, but...",
                    "In the end, we managed to create... and had a great time."
                ]
            },
            {
                title: "Cooking for a Large Group",
                topic: "Food & Cooking",
                content: [
                    "Cooking for a large group requires careful planning.",
                    "I’ve done this for events like...",
                    "I always start by choosing dishes that are easy to serve in large quantities, like...",
                    "The tricky part is timing everything so it’s all ready at once.",
                    "Everyone seemed to enjoy... and it was a success!"
                ]
            },
            {
                title: "How Cooking Helps Me Relax",
                topic: "Food & Cooking",
                content: [
                    "I often find cooking a great way to unwind after a long day.",
                    "I focus on preparing simple dishes like...",
                    "It’s meditative because I can...",
                    "I feel less stressed when I’m chopping, stirring, and tasting.",
                    "By the end, I have something delicious to enjoy."
                ]
            },
            {
                title: "A Dish I Learned from a Friend",
                topic: "Food & Cooking",
                content: [
                    "I learned to cook... from a friend.",
                    "She taught me the secret to...",
                    "At first, I struggled with...",
                    "But now, I can make it perfectly every time.",
                    "I love making this dish for... because it reminds me of her."
                ]
            },
            {
                title: "The Role of Food in Socializing",
                topic: "Food & Cooking",
                content: [
                    "Food plays an important role in socializing, especially when...",
                    "For example, when I have friends over, I make sure to prepare...",
                    "It creates a sense of togetherness when we all...",
                    "I believe that cooking and sharing meals brings people closer because...",
                    "The conversation always flows better when everyone enjoys good food."
                ]
            }
        ]
    },
    {
        level: "Upper-Intermediate",
        topic: "Technology & Innovation",
        scenarios: [
            {
                title: "The Impact of Artificial Intelligence on Jobs",
                topic: "Technology & Innovation",
                content: [
                    "Artificial Intelligence (AI) is changing the job market in many industries.",
                    "Some jobs may become automated, while others will require new skills to work alongside AI.",
                    "For example, jobs in data analysis, programming, and AI development are on the rise, while certain manual labor jobs may be replaced by robots.",
                    "How do you feel about AI taking over some jobs? What can workers do to adapt to these changes?"
                ]
            },
            {
                title: "The Ethics of Genetic Engineering",
                topic: "Technology & Innovation",
                content: [
                    "Genetic engineering is the manipulation of an organism’s DNA to achieve desired traits.",
                    "It is used in agriculture, medicine, and even in humans, such as gene therapy to treat diseases.",
                    "However, the ethics of genetic engineering is controversial, especially when it comes to editing human genes.",
                    "Do you think genetic engineering should be allowed in humans? Why or why not?"
                ]
            },
            {
                title: "The Role of Technology in Climate Change",
                topic: "Technology & Innovation",
                content: [
                    "Technology plays an essential role in addressing climate change.",
                    "Renewable energy sources, electric vehicles, and carbon capture technologies are some of the innovations aimed at reducing the impact of global warming.",
                    "However, technology also contributes to climate change, as many technologies require energy and resources that can harm the environment.",
                    "How can we use technology responsibly to fight climate change?"
                ]
            },
            {
                title: "The Future of Space Exploration",
                topic: "Technology & Innovation",
                content: [
                    "Space exploration has made significant advances, with missions to Mars, the Moon, and beyond.",
                    "In the future, we may see more private companies, like SpaceX, leading space travel and colonization efforts.",
                    "In addition to exploration, technology can help us mine asteroids for resources and even establish colonies on other planets.",
                    "What do you think is the next big breakthrough in space exploration?"
                ]
            },
            {
                title: "The Rise of Cybersecurity Threats",
                topic: "Technology & Innovation",
                content: [
                    "As technology advances, cybersecurity threats are becoming more sophisticated.",
                    "Hackers can steal personal data, disrupt critical infrastructure, and even manipulate political outcomes.",
                    "The development of better security measures, such as encryption, firewalls, and AI-driven threat detection systems, is essential to protect individuals and businesses.",
                    "How do you think cybersecurity can evolve to stay ahead of new threats?"
                ]
            },
            {
                title: "The Influence of Social Media on Society",
                topic: "Technology & Innovation",
                content: [
                    "Social media has revolutionized the way we communicate, share information, and even shape public opinion.",
                    "However, the spread of misinformation, cyberbullying, and the impact on mental health have raised concerns.",
                    "The question is whether social media companies can regulate content effectively without infringing on free speech.",
                    "What role should social media play in society, and what should be its ethical boundaries?"
                ]
            },
            {
                title: "The Future of Work in the Age of Automation",
                topic: "Technology & Innovation",
                content: [
                    "Automation is gradually transforming industries such as manufacturing, logistics, and even customer service.",
                    "While automation can improve efficiency and reduce costs, it also raises concerns about job displacement and the future of work.",
                    "Some suggest that the solution lies in universal basic income (UBI) or retraining workers for new types of jobs.",
                    "What do you think the future of work will look like in an increasingly automated world?"
                ]
            },
            {
                title: "The Rise of Smart Cities",
                topic: "Technology & Innovation",
                content: [
                    "A smart city uses technology to improve the quality of life for its residents.",
                    "This can include smart transportation systems, energy-efficient buildings, and data-driven urban planning.",
                    "While smart cities promise improved efficiency and sustainability, there are concerns about privacy, data security, and the digital divide.",
                    "Do you think smart cities are the future? What are the potential challenges?"
                ]
            },
            {
                title: "The Impact of 5G Technology on Communication",
                topic: "Technology & Innovation",
                content: [
                    "5G is the fifth generation of wireless technology, offering faster speeds and lower latency compared to previous generations.",
                    "This can revolutionize industries like telemedicine, autonomous driving, and online gaming.",
                    "However, the rollout of 5G has raised concerns about health risks, privacy issues, and the environmental impact of building the necessary infrastructure.",
                    "What are the benefits and challenges of 5G technology?"
                ]
            },
            {
                title: "Quantum Computing and Its Potential",
                topic: "Technology & Innovation",
                content: [
                    "Quantum computing is an emerging field that could revolutionize computing by solving complex problems much faster than classical computers.",
                    "Quantum computers use the principles of quantum mechanics, allowing them to process vast amounts of data simultaneously.",
                    "This technology could have applications in cryptography, artificial intelligence, and even drug discovery.",
                    "How do you think quantum computing will change the world in the next decade?"
                ]
            }
        ]
    },
    {
        level: "Upper-Intermediate",
        topic: "Music & Arts",
        scenarios: [
            {
                title: "The Influence of Music on Culture",
                topic: "Music & Arts",
                content: [
                    "Music is an important part of many cultures because... (почему музыка важна для культур)",
                    "For example, in my country, music is used for... (как используется музыка в твоей стране: праздники, традиции)",
                    "I think music can reflect... (что музыка может отразить о культуре)",
                    "In your opinion, how does music influence the way people think or live?",
                    "What kind of music represents your culture?"
                ]
            },
            {
                title: "A Concert Experience",
                topic: "Music & Arts",
                content: [
                    "One of the most memorable concerts I attended was... (назови концерт, который ты запомнил)",
                    "It was amazing because... (почему этот концерт был особенным)",
                    "The atmosphere was... (как была атмосфера на концерте: энергичная, спокойная)",
                    "I especially enjoyed... (что именно тебе понравилось на концерте)",
                    "Do you think live performances are better than recorded ones? Why?"
                ]
            },
            {
                title: "The Role of Art in Modern Society",
                topic: "Music & Arts",
                content: [
                    "Art plays a crucial role in modern society because... (почему искусство важно в современном обществе)",
                    "In recent years, art has become more... (как изменилось восприятие искусства: доступным, коммерческим и т.д.)",
                    "Art can serve as a powerful tool for... (что искусство может делать для общества: выражать мнение, протестовать и т.д.)",
                    "Some artists use their work to challenge... (что могут оспаривать художники своими произведениями)",
                    "What do you think about art that makes a statement?"
                ]
            },
            {
                title: "The Importance of Digital Art",
                topic: "Music & Arts",
                content: [
                    "Digital art has become increasingly popular because... (почему цифровое искусство стало популярным)",
                    "Artists can create digital art using... (как создаются цифровые произведения искусства: с помощью программ и технологий)",
                    "I think digital art is unique because... (почему цифровое искусство отличается от традиционного)",
                    "Some people believe that digital art lacks... (что может не хватать в цифровом искусстве)",
                    "What is your opinion on digital art?"
                ]
            },
            {
                title: "The Evolution of Music Genres",
                topic: "Music & Arts",
                content: [
                    "Over the years, music genres have evolved significantly. For example... (как изменяются музыкальные жанры)",
                    "New genres emerge because of... (почему появляются новые жанры)",
                    "I think the most popular genre nowadays is... (какой жанр наиболее популярен сегодня)",
                    "This genre has become popular because... (почему этот жанр стал таким популярным)",
                    "How do you think music genres will change in the future?"
                ]
            },
            {
                title: "Art as a Form of Expression",
                topic: "Music & Arts",
                content: [
                    "Art is often used as a form of expression because... (почему искусство — это способ выражения)",
                    "Through art, people can communicate emotions like... (какие эмоции можно передать через искусство)",
                    "Some artists choose to express their opinions on... (о чем могут высказываться художники)",
                    "I think art is powerful because it can... (как искусство может влиять на людей)",
                    "Can art have an impact on social or political change?"
                ]
            },
            {
                title: "Famous Musicians and Their Legacy",
                topic: "Music & Arts",
                content: [
                    "One famous musician whose work I admire is... (назови музыканта, чье творчество тебе нравится)",
                    "He/She is known for... (чем известен этот музыкант)",
                    "His/Her music has had a lasting impact on... (как музыка этого исполнителя повлияла на индустрию)",
                    "I think the most significant contribution this musician made was... (в чем состоит вклад этого музыканта)",
                    "Who do you think is the most influential musician of the 21st century?"
                ]
            },
            {
                title: "The Significance of Art in Education",
                topic: "Music & Arts",
                content: [
                    "Art education is essential because it helps students to... (почему искусство важно в образовании)",
                    "Through learning art, students can improve skills like... (какие навыки развиваются у студентов через искусство)",
                    "Some schools focus more on STEM subjects than on art, which can be... (почему важно сбалансировать внимание между искусством и другими предметами)",
                    "I think art education should be emphasized because it teaches... (почему искусство должно быть важной частью образования)",
                    "What role should art play in modern education?"
                ]
            },
            {
                title: "The Impact of Technology on Music",
                topic: "Music & Arts",
                content: [
                    "Technology has greatly affected music production by... (как технологии повлияли на музыку)",
                    "Thanks to modern technology, musicians can now... (какие новые возможности появились у музыкантов благодаря технологиям)",
                    "However, some people argue that technology has... (в чем заключается негативное влияние технологий на музыку)",
                    "In my opinion, technology has both positive and negative effects on music because... (как технологии влияют на музыку в твоем мнении)",
                    "How do you think technology will continue to shape music in the future?"
                ]
            },
            {
                title: "The Role of Art in Mental Health",
                topic: "Music & Arts",
                content: [
                    "Art can be therapeutic because... (почему искусство помогает при психических расстройствах)",
                    "Through creating or viewing art, people can... (как искусство помогает людям: расслабиться, выразить эмоции)",
                    "Some mental health professionals use art therapy to help people who struggle with... (как используется арт-терапия)",
                    "I think art has a unique ability to... (как искусство влияет на людей с психическими проблемами)",
                    "Do you believe that art can improve mental health?"
                ]
            }
        ]
    },
    {
        level: "Upper-Intermediate",
        topic: "Travel & Adventures",
        scenarios: [
            {
                title: "How Travel Changed My Perspective",
                topic: "Travel & Adventures",
                content: [
                    "There was a time when I believed that...",
                    "However, after traveling to..., my mindset shifted.",
                    "I met people who thought differently, and I realized that...",
                    "This trip helped me become more open-minded and...",
                    "Now, I try to apply this new perspective in my everyday life."
                ]
            },
            {
                title: "The Pros and Cons of Digital Nomad Life",
                topic: "Travel & Adventures",
                content: [
                    "Working remotely while traveling sounds ideal.",
                    "I once tried it when I spent a few weeks in...",
                    "The benefits included freedom and inspiration, but I also faced challenges like...",
                    "Staying productive was hard because...",
                    "Would I do it again? Probably, but with better preparation."
                ]
            },
            {
                title: "The Most Culturally Immersive Trip I’ve Had",
                topic: "Travel & Adventures",
                content: [
                    "One of the most enriching travel experiences I’ve had was in...",
                    "Instead of staying at a hotel, I lived with a local family.",
                    "I joined their daily routine, learned their customs, and even tried...",
                    "This experience helped me understand the culture on a deeper level.",
                    "It made me realize that true travel is about connection, not just sightseeing."
                ]
            },
            {
                title: "How to Handle Travel Burnout",
                topic: "Travel & Adventures",
                content: [
                    "While traveling non-stop sounds exciting, it can be exhausting.",
                    "I experienced travel burnout when I visited several cities in a short time.",
                    "I felt overwhelmed, disconnected, and...",
                    "Eventually, I took a break, stayed in one place, and focused on...",
                    "Now I always schedule downtime to avoid burning out."
                ]
            },
            {
                title: "Ethical Dilemmas While Traveling",
                topic: "Travel & Adventures",
                content: [
                    "While exploring tourist attractions, I came across something that felt ethically wrong — like...",
                    "At first, I wasn’t sure what to do.",
                    "Was I supporting a harmful practice by participating?",
                    "I decided to... and later researched more about ethical travel.",
                    "Now I’m more careful about the choices I make abroad."
                ]
            },
            {
                title: "An Adventure That Went Off-Plan",
                topic: "Travel & Adventures",
                content: [
                    "I had everything planned out for my trip to..., but then everything changed.",
                    "A delayed flight, lost luggage, and bad weather completely ruined my itinerary.",
                    "However, this led to unexpected adventures like...",
                    "Looking back, I’m glad it happened — sometimes, spontaneity creates the best memories."
                ]
            },
            {
                title: "The Role of Technology in Modern Travel",
                topic: "Travel & Adventures",
                content: [
                    "Travel today is very different from 20 years ago.",
                    "Thanks to technology, I can book flights instantly, translate languages, and navigate cities easily.",
                    "On one trip, Google Maps literally saved me when...",
                    "But sometimes I wonder if we rely on it too much.",
                    "Does tech enhance the experience or take away from it?"
                ]
            },
            {
                title: "The Most Meaningful Souvenir I’ve Ever Bought",
                topic: "Travel & Adventures",
                content: [
                    "I usually don’t care much about souvenirs, but in..., I found something special:...",
                    "It wasn’t expensive, but it had a story behind it.",
                    "Every time I look at it, I remember the people I met and the emotions I felt.",
                    "For me, the best souvenirs aren’t things — they’re memories made tangible."
                ]
            },
            {
                title: "Language Barriers and Creative Communication",
                topic: "Travel & Adventures",
                content: [        "In..., I faced a serious language barrier.",
                    "There was no English, and I didn’t speak the local language.",
                    "But I managed to communicate through gestures, drawings, and even sound effects.",
                    "It was awkward but also fun.",
                    "I realized that you don’t need perfect language to connect with people — just effort and respect."
                ]
            },
            {
                title: "My Ideal Travel Adventure",
                topic: "Travel & Adventures",
                content: [
                    "If I could plan the perfect travel adventure, it would include...",
                    "I’d go to places where few tourists go, like...",
                    "I’d travel slow, interact with locals, and maybe volunteer or take a local class.",
                    "The goal wouldn’t be to check off places, but to truly experience them.",
                    "One day, I hope to turn this dream into reality."
                ]
            }
        ]
    },
    {
        level: "Upper-Intermediate",
        topic: "Sports & Fitness",
        scenarios: [
            {
                title: "Balancing Fitness with a Busy Schedule",
                topic: "Sports & Fitness",
                content: [
                    "With so many responsibilities, it can be hard to stay fit.",
                    "How do you make time for physical activity in your daily life?",
                    "What are your strategies for staying consistent?"
                ]
            },
            {
                title: "Mental Health Benefits of Exercise",
                topic: "Sports & Fitness",
                content: [
                    "Many studies show that regular exercise improves mental health.",
                    "Have you ever noticed changes in your mood after working out?",
                    "Why do you think physical activity helps us feel better emotionally?"
                ]
            },
            {
                title: "The Ethics of Performance Enhancing Drugs",
                topic: "Sports & Fitness",
                content: [
                    "Some athletes use drugs to improve their performance.",
                    "Do you believe this is ever justifiable? Why or why not?",
                    "How should sports organizations deal with this issue?"
                ]
            },
            {
                title: "Coaching and Motivation",
                topic: "Sports & Fitness",
                content: [
                    "Good coaches can transform athletes and teams.",
                    "Have you ever had a coach or trainer who motivated you?",
                    "What qualities make someone a great coach?"
                ]
            },
            {
                title: "Fitness and Body Image",
                topic: "Sports & Fitness",
                content: [
                    "Social media often shows unrealistic body standards.",
                    "Do you think this affects how people approach fitness?",
                    "How can we promote healthy, realistic goals?"
                ]
            },
            {
                title: "Overcoming Physical Challenges",
                topic: "Sports & Fitness",
                content: [
                    "Some people use sports to recover from injuries or manage disabilities.",
                    "Have you ever faced a physical challenge that affected your fitness journey?",
                    "What helped you push through?"
                ]
            },
            {
                title: "Sports as a Tool for Social Change",
                topic: "Sports & Fitness",
                content: [
                    "Athletes sometimes use their platform to speak about political or social issues.",
                    "Do you think sports and activism should mix? Why or why not?",
                    "Can you give an example of a moment where this had an impact?"
                ]
            },
            {
                title: "Extreme Sports – Worth the Risk?",
                topic: "Sports & Fitness",
                content: [
                    "Activities like skydiving and mountain climbing are exciting but dangerous.",
                    "Would you try an extreme sport? Why or why not?",
                    "What draws people to high-risk physical challenges?"
                ]
            },
            {
                title: "The Influence of Technology on Modern Sports",
                topic: "Sports & Fitness",
                content: [
                    "From video analysis to wearable trackers, tech is changing the game.",
                    "Do you think technology makes sports more fair and exciting?",
                    "Are there any downsides to relying on tech in training or competition?"
                ]
            },
            {
                title: "Organizing a Community Fitness Event",
                topic: "Sports & Fitness",
                content: [
                    "Imagine you're organizing a fitness event in your community.",
                    "What activities would you include?",
                    "How would you encourage people of all ages to participate?"
                ]
            }
        ]
    },
    {
        level: "Upper-Intermediate",
        topic: "Science & Nature",
        scenarios: [
            {
                title: "Global Warming",
                topic: "Science & Nature",
                content: [
                    "What are the main causes of global warming?",
                    "How do you think global warming affects wildlife and human societies?",
                    "What solutions do you think are most effective in combating global warming?",
                    "What role should governments play in addressing this issue?"
                ]
            },
            {
                title: "Genetic Engineering",
                topic: "Science & Nature",
                content: [
                    "What is genetic engineering?",
                    "How do you think genetic engineering could change agriculture?",
                    "Do you think it's ethical to modify the genes of animals or plants?",
                    "What are some potential risks and benefits of genetic engineering?"
                ]
            },
            {
                title: "The Role of Oceans in Climate",
                topic: "Science & Nature",
                content: [
                    "How do oceans influence the Earth’s climate?",
                    "What happens if ocean temperatures rise?",
                    "What role do oceans play in maintaining the balance of ecosystems?",
                    "How can human activity affect the health of oceans?"
                ]
            },
            {
                title: "Biodiversity and Its Importance",
                topic: "Science & Nature",
                content: [
                    "What does biodiversity mean?",
                    "Why is it important for ecosystems and human survival?",
                    "Can you name some areas where biodiversity is at risk?",
                    "How can we protect biodiversity for future generations?"
                ]
            },
            {
                title: "Space Exploration and Its Benefits",
                topic: "Science & Nature",
                content: [
                    "Why is space exploration important for scientific advancement?",
                    "What are some of the technologies developed through space exploration?",
                    "How can space exploration help us understand the Earth better?",
                    "Do you think spending money on space exploration is worth it, considering other global challenges?"
                ]
            },
            {
                title: "The Science of Climate Modeling",
                topic: "Science & Nature",
                content: [
                    "What is climate modeling and how does it work?",
                    "How do scientists predict future climate conditions?",
                    "Do you think climate models are accurate?",
                    "How can we use the results of climate modeling to prepare for future environmental changes?"
                ]
            },
            {
                title: "Renewable vs. Non-Renewable Energy",
                topic: "Science & Nature",
                content: [
                    "What are the key differences between renewable and non-renewable energy sources?",
                    "Why is it important to shift from non-renewable to renewable energy?",
                    "What challenges do countries face in making the transition to renewable energy?",
                    "How can individuals contribute to this shift?"
                ]
            },
            {
                title: "The Impact of Technology on Nature",
                topic: "Science & Nature",
                content: [
                    "How has technology affected the natural environment?",
                    "Do you think technological progress can help solve environmental problems?",
                    "Can you think of a recent technological innovation that has had a positive environmental impact?",
                    "What responsibility do tech companies have in reducing their ecological footprint?"
                ]
            },
            {
                title: "Wildlife Conservation",
                topic: "Science & Nature",
                content: [
                    "Why is wildlife conservation critical?",
                    "What are some challenges faced by conservationists?",
                    "Can you think of a successful wildlife conservation project?",
                    "How can people contribute to protecting endangered species?"
                ]
            },
            {
                title: "The Future of Earth’s Resources",
                topic: "Science & Nature",
                content: [
                    "How do you think Earth’s natural resources will change in the next 50 years?",
                    "What happens if we continue using resources at the current rate?",
                    "What alternatives do we have for conserving these resources?",
                    "How can technology help us use resources more sustainably?"
                ]
            }
        ]
    },
    {
        level: "Upper-Intermediate",
        topic: "Language Learning",
        scenarios: [
            {
                title: "Language Learning Goals",
                topic: "Language Learning",
                content: [
                    "What specific goals do you have in your language learning journey?",
                    "Do you focus more on fluency, accuracy, or vocabulary expansion?",
                    "How do you measure your progress?",
                    "What would achieving your goal mean for you personally or professionally?"
                ]
            },
            {
                title: "Balancing Language Skills",
                topic: "Language Learning",
                content: [
                    "Which skill (reading, writing, speaking, or listening) do you feel most confident in?",
                    "Which one is still challenging for you, and why?",
                    "How do you balance all four skills in your studies?",
                    "Do you think one skill is more important than the others?"
                ]
            },
            {
                title: "Language Learning Plateaus",
                topic: "Language Learning",
                content: [
                    "Have you ever experienced a plateau where it felt like you weren’t improving?",
                    "What caused it, and how did you overcome it?",
                    "Do you think plateaus are a normal part of language learning?",
                    "What advice would you give someone currently facing this issue?"
                ]
            },
            {
                title: "Learning Through Content",
                topic: "Language Learning",
                content: [
                    "What types of content do you consume in English (e.g., podcasts, articles, TV shows)?",
                    "How do you choose what to watch or read?",
                    "Do you prefer content made for learners or authentic material? Why?",
                    "How do you use it to improve your English?"
                ]
            },
            {
                title: "The Psychology of Language Learning",
                topic: "Language Learning",
                content: [
                    "Do you ever feel anxious when speaking English?",
                    "How do emotions affect your performance in language learning?",
                    "What techniques help you stay confident and motivated?",
                    "Do you think mindset is more important than natural talent?"
                ]
            },
            {
                title: "Learning Multiple Languages",
                topic: "Language Learning",
                content: [
                    "Are you learning any other languages besides English?",
                    "How does learning more than one language affect your progress?",
                    "Do you ever mix them up, or do they help each other?",
                    "Would you say being multilingual changes how you think?"
                ]
            },
            {
                title: "Language and Identity",
                topic: "Language Learning",
                content: [
                    "Do you feel different when you speak English compared to your native language?",
                    "Has learning English changed how you see the world?",
                    "Do you use a different tone or personality when speaking English?",
                    "Why do you think that happens?"
                ]
            },
            {
                title: "The Future of Language Learning",
                topic: "Language Learning",
                content: [
                    "How do you think technology like AI, translation tools, or VR will change language learning?",
                    "Do you see any advantages or disadvantages?",
                    "Would you prefer learning with a human teacher or an intelligent assistant?",
                    "Where do you see yourself in your English level five years from now?"
                ]
            },
            {
                title: "Mistakes That Made Me Better",
                topic: "Language Learning",
                content: [
                    "Can you remember a moment when you made a big mistake in English, but it helped you learn?",
                    "What exactly happened, and how did it help you grow?",
                    "Do you think people should be encouraged to make mistakes?",
                    "What’s your attitude now when you make errors?"
                ]
            },
            {
                title: "Teaching Others While Learning",
                topic: "Language Learning",
                content: [
                    "Have you ever helped someone else learn English or another language?",
                    "Did teaching improve your own understanding?",
                    "What did you learn about your own language habits by doing this?",
                    "Would you consider becoming a language tutor or mentor?"
                ]
            }
        ]
    },
    {
        level: "Upper-Intermediate",
        topic: "Business & Career",
        scenarios: [
            {
                title: "The Importance of Communication Skills",
                topic: "Business & Career",
                content: [
                    "Why are communication skills crucial in business?",
                    "How do you improve your communication skills in the workplace?",
                    "Can a lack of communication skills negatively impact a business?",
                    "How do you handle misunderstandings or miscommunications at work?"
                ]
            },
            {
                title: "Working Remotely",
                topic: "Business & Career",
                content: [
                    "What are the benefits of working remotely?",
                    "What challenges do you face when working from home?",
                    "How do you stay productive while working remotely?",
                    "Do you think working remotely will be a permanent trend in the future?"
                ]
            },
            {
                title: "Building a Personal Brand",
                topic: "Business & Career",
                content: [
                    "What does it mean to have a personal brand?",
                    "How can you build a personal brand in your career?",
                    "What role does social media play in building your personal brand?",
                    "Do you think personal branding is important for career advancement?"
                ]
            },
            {
                title: "Entrepreneurship",
                topic: "Business & Career",
                content: [
                    "What skills are essential for becoming a successful entrepreneur?",
                    "Have you ever considered starting your own business?",
                    "What challenges do entrepreneurs face in the early stages of a business?",
                    "What factors would you consider before starting a new business?"
                ]
            },
            {
                title: "Professional Development",
                topic: "Business & Career",
                content: [
                    "How can you continue to develop professionally as you progress in your career?",
                    "What professional skills do you think are becoming more important in today’s workplace?",
                    "How can companies support their employees' professional development?",
                    "What are some ways to gain new skills in your field?"
                ]
            },
            {
                title: "Job Interviews",
                topic: "Business & Career",
                content: [
                    "What is the most important thing to remember during a job interview?",
                    "How can you prepare for a successful interview?",
                    "Have you ever faced a difficult question in an interview? How did you handle it?",
                    "What can you do if you don’t get the job after an interview?"
                ]
            },
            {
                title: "Career Growth and Promotions",
                topic: "Business & Career",
                content: [
                    "What are some strategies for getting promoted at work?",
                    "How do you handle the pressure of career advancement?",
                    "What role does networking play in career growth?",
                    "Do you think it’s important to seek new challenges in your job for career growth?"
                ]
            },
            {
                title: "Time Management",
                topic: "Business & Career",
                content: [
                    "Why is time management important in the workplace?",
                    "How do you prioritize tasks when you have multiple deadlines?",
                    "What tools or techniques do you use to stay organized and manage your time effectively?",
                    "Can poor time management affect your career progression?"
                ]
            },
            {
                title: "Negotiation Skills",
                topic: "Business & Career",
                content: [
                    "What are some key skills needed for successful negotiation?",
                    "How do you prepare for a business negotiation?",
                    "Have you ever been involved in a difficult negotiation? How did you manage it?",
                    "Why is negotiation important in the business world?"
                ]
            },
            {
                title: "The Future of Work",
                topic: "Business & Career",
                content: [
                    "What do you think the workplace will look like in 10 years?",
                    "How will technology change the way we work?",
                    "What industries do you think will see the most growth in the future?",
                    "What skills do you think will be essential in the future workplace?"
                ]
            }
        ]
    },

    {
        level: "Advanced",
        topic: "Movies & TV Shows",
        scenarios: [
            {
                title: "The Philosophy of Cinema",
                topic: "Movies & TV Shows",
                content: [
                    "What, in your opinion, defines a great movie—story, cinematography, or emotional impact?",
                    "Can a movie be considered 'art' if it is purely for entertainment?",
                    "What philosophical themes in movies have influenced your way of thinking?"
                ]
            },
            {
                title: "The Dark Side of the Film Industry",
                topic: "Movies & TV Shows",
                content: [
                    "Hollywood and other film industries are often criticized for... (exploitation, typecasting, lack of diversity).",
                    "Do you think the industry prioritizes profit over creativity?",
                    "How should filmmakers balance artistic freedom and ethical responsibility?"
                ]
            },
            {
                title: "The Psychology of Movie-Watching",
                topic: "Movies & TV Shows",
                content: [
                    "Why do people form strong emotional attachments to movies and characters?",
                    "Do you think watching violent movies influences people's behavior in real life?",
                    "How do different genres affect our mood and thinking?"
                ]
            },
            {
                title: "The Future of AI in Filmmaking",
                topic: "Movies & TV Shows",
                content: [
                    "AI is already being used in scriptwriting and editing. Do you think AI could replace human directors in the future?",
                    "Would you watch a movie completely created by AI? Why or why not?",
                    "What are the ethical concerns of using AI actors instead of real people?"
                ]
            },
            {
                title: "The Role of Propaganda in Cinema",
                topic: "Movies & TV Shows",
                content: [
                    "Can movies shape public opinion and political ideologies?",
                    "Name a movie that you think was used as propaganda, and explain why.",
                    "Should filmmakers be responsible for ensuring their movies are politically neutral?"
                ]
            },
            {
                title: "The Cultural Impact of Movies",
                topic: "Movies & TV Shows",
                content: [
                    "Can a single movie change an entire generation's perspective on a topic?",
                    "How have movies influenced global culture?",
                    "Is there a movie that made you see the world differently?"
                ]
            },
            {
                title: "The Death of Traditional Cinema?",
                topic: "Movies & TV Shows",
                content: [
                    "With the rise of streaming, will cinemas eventually disappear?",
                    "Do you think movie theaters offer an experience that cannot be replicated at home?",
                    "How would you reinvent the cinema experience to keep it relevant?"
                ]
            },
            {
                title: "Ethical Dilemmas in Movie-Making",
                topic: "Movies & TV Shows",
                content: [
                    "Should actors be allowed to play characters from cultures they do not belong to?",
                    "Is it ethical to digitally recreate deceased actors for new movies?",
                    "If a film director is involved in a scandal, should their movies be boycotted?"
                ]
            },
            {
                title: "The Influence of Movies on Human Behavior",
                topic: "Movies & TV Shows",
                content: [
                    "Can a movie inspire real social change? Give examples.",
                    "Have you ever changed your opinion about something after watching a movie?",
                    "How do movies reinforce or break stereotypes in society?"
                ]
            },
            {
                title: "The Most Thought-Provoking Movie You Have Seen",
                topic: "Movies & TV Shows",
                content: [
                    "What movie made you question your beliefs or view of the world?",
                    "What themes in that movie stood out the most to you?",
                    "How would you recommend it to someone who hasn’t seen it?"
                ]
            }
        ]
    },
    {
        level: "Advanced",
        topic: "Daily Life",
        scenarios: [
            {
                title: "Redefining Routine",
                topic: "Daily Life",
                content: [
                    "Describe how your daily routine has evolved over the years.",
                    "What caused those changes—personal growth, external circumstances, or shifting priorities?",
                    "Do you think having a strict routine is beneficial, or does it limit flexibility?"
                ]
            },
            {
                title: "Conscious Consumption",
                topic: "Daily Life",
                content: [
                    "Reflect on the way you make everyday consumer choices—groceries, clothes, subscriptions.",
                    "Do you try to be sustainable or mindful when shopping?",
                    "How does this affect your daily decisions and lifestyle?"
                ]
            },
            {
                title: "Time as a Resource",
                topic: "Daily Life",
                content: [
                    "How do you view and manage your time in daily life?",
                    "Do you think you're using it efficiently?",
                    "Are there parts of your routine that feel wasteful or unbalanced?",
                    "What strategies have helped you take control of your schedule?"
                ]
            },
            {
                title: "The Invisible Mental Load",
                topic: "Daily Life",
                content: [
                    "Discuss the concept of the \"mental load\"—the planning, remembering, and organizing of daily life.",
                    "Do you carry this load in your household or personal life?",
                    "How does it impact your stress levels, productivity, or relationships?"
                ]
            },
            {
                title: "Unplugging from Technology",
                topic: "Daily Life",
                content: [
                    "Talk about the effects of constant connectivity on your daily life.",
                    "Have you ever intentionally disconnected for a day or more?",
                    "What did you notice about your habits, focus, and emotional state?"
                ]
            },
            {
                title: "Micro-Decisions and Long-Term Impact",
                topic: "Daily Life",
                content: [
                    "How do small daily decisions—like waking up early or checking social media—shape your life over time?",
                    "Do you believe in the \"compound effect\" of habits?",
                    "Have you experienced this personally?"
                ]
            },
            {
                title: "Navigating Burnout in Everyday Life",
                topic: "Daily Life",
                content: [
                    "Have you ever felt daily life becoming overwhelming to the point of burnout?",
                    "What were the signs, and how did you respond?",
                    "What preventative routines or boundaries have you implemented since?"
                ]
            },
            {
                title: "The Role of Environment in Routine",
                topic: "Daily Life",
                content: [
                    "How does your physical environment (home, city, workspace) affect your daily habits and mindset?",
                    "Would a change in surroundings improve your routine?",
                    "Do you believe your space reflects your lifestyle?"
                ]
            },
            {
                title: "Reframing Mundane Tasks",
                topic: "Daily Life",
                content: [
                    "Choose one boring or repetitive daily task.",
                    "How do you make it more meaningful or efficient—through mindfulness, multitasking, or automation?",
                    "Can changing your attitude toward a task change your experience of it?"
                ]
            },
            {
                title: "Living with Intention",
                topic: "Daily Life",
                content: [
                    "Do you approach daily life with intention or just go through the motions?",
                    "How do you remind yourself of your values and goals on a day-to-day basis?",
                    "Can small intentional actions create a greater sense of purpose?"
                ]
            }
        ]
    },
    {
        level: "Advanced",
        topic: "Food & Cooking",
        scenarios: [
            {
                title: "The Role of Food in Different Cultures",
                topic: "Food & Cooking",
                content: [
                    "Food plays a significant role in every culture, as it reflects the values, traditions, and history of a society.",
                    "In some cultures, food is prepared with symbolism, such as...",
                    "The ingredients and preparation methods vary greatly, but one constant is...",
                    "Food brings people together during celebrations like...",
                    "The 'slow food' vs. 'fast food' debate highlights...",
                    "Food serves as a form of communication beyond language."
                ]
            },
            {
                title: "The Influence of Technology on Cooking",
                topic: "Food & Cooking",
                content: [
                    "Technology has greatly impacted how we cook.",
                    "Smart kitchen devices and online platforms have made cooking more efficient.",
                    "However, these innovations also have drawbacks, such as...",
                    "Technology allows experimentation with fusion cuisine. For example,...",
                    "AI-generated recipes raise questions about creativity in cooking.",
                    "What do you think about technology preserving culinary traditions?"
                ]
            },
            {
                title: "The Health Benefits of Cooking at Home",
                topic: "Food & Cooking",
                content: [
                    "Cooking at home gives full control over ingredients.",
                    "This is crucial for diets like vegan or keto, which are hard to maintain when eating out.",
                    "Cooking at home has psychological benefits. Studies show...",
                    "Cooking can be a mindful, stress-relieving activity.",
                    "It saves money and promotes a healthier lifestyle."
                ]
            },
            {
                title: "The Future of Sustainable Cooking",
                topic: "Food & Cooking",
                content: [
                    "Sustainability is key in modern food consumption.",
                    "Popular solutions include plant-based diets and vertical farming.",
                    "Challenges include availability and affordability.",
                    "We can reduce waste at home by...",
                    "The future lies in balancing taste, nutrition, and sustainability.",
                    "What sustainable food trend do you think is most promising?"
                ]
            },
            {
                title: "The Psychological Impact of Food Choices",
                topic: "Food & Cooking",
                content: [
                    "Food affects mental well-being.",
                    "Sugary and processed foods can lead to...",
                    "A diet rich in whole foods improves mood and brain function.",
                    "Cooking can be therapeutic and stress-relieving.",
                    "We often crave comfort foods when emotional.",
                    "Understanding this link helps improve food choices."
                ]
            },
            {
                title: "The Science of Flavors",
                topic: "Food & Cooking",
                content: [
                    "Flavor is influenced by taste, smell, and texture.",
                    "We perceive sweetness, sourness, saltiness, bitterness, and umami.",
                    "Temperature can mask or enhance flavors.",
                    "Pairing flavors is both art and science.",
                    "Knowing flavor science leads to better-balanced dishes."
                ]
            },
            {
                title: "The Rise of Celebrity Chefs and Food Trends",
                topic: "Food & Cooking",
                content: [
                    "Celebrity chefs have influenced global food trends.",
                    "They've popularized specific styles and dishes.",
                    "Some say they democratize fine dining, others disagree.",
                    "Food blogs and social media accelerate trend sharing.",
                    "This globalizes food culture, but risks homogenization.",
                    "What is your opinion on celebrity chefs’ impact?"
                ]
            },
            {
                title: "The Ethics of Eating Meat",
                topic: "Food & Cooking",
                content: [
                    "Meat consumption is a controversial ethical issue.",
                    "Some see it as necessary, others oppose it for moral reasons.",
                    "Environmental impact, like carbon footprint, is a concern.",
                    "Animal welfare is also a key issue.",
                    "Alternatives include plant-based and lab-grown meats.",
                    "Do you think plant-based diets are the answer?"
                ]
            },
            {
                title: "The Impact of Globalization on Local Cuisines",
                topic: "Food & Cooking",
                content: [
                    "Globalization has made international food more accessible.",
                    "Traditional dishes are sometimes replaced by fast food.",
                    "Fusion cuisine is a benefit of globalization.",
                    "But preserving traditional food culture is important.",
                    "How do we balance innovation with heritage?",
                    "What is the future of traditional cuisines?"
                ]
            },
            {
                title: "The Psychology Behind Food Cravings",
                topic: "Food & Cooking",
                content: [
                    "Cravings can be triggered by stress, emotions, or environment.",
                    "Some believe they reflect nutrient deficiencies.",
                    "Others think they are mostly psychological.",
                    "I crave certain foods when stressed, like...",
                    "Advertisements often influence cravings.",
                    "Understanding cravings can lead to better choices."
                ]
            }
        ]
    },
    {
        level: "Advanced",
        topic: "Music & Arts",
        scenarios: [
            {
                title: "A Famous Artist",
                topic: "Music & Arts",
                content: [
                    "One of the most famous artists I admire is... (назови художника или музыканта)",
                    "Their work is known for... (опиши стиль работы художника или музыку)",
                    "What makes their work stand out is... (что выделяет его творчество)",
                    "I first learned about this artist when... (когда и как ты узнал о нем)",
                    "I would recommend their work because... (почему ты советуешь ознакомиться с его работами)"
                ]
            },
            {
                title: "Music Genres",
                topic: "Music & Arts",
                content: [
                    "One of my favorite music genres is... (назови жанр музыки)",
                    "It has a unique characteristic such as... (особенности этого жанра)",
                    "I enjoy listening to this genre because... (почему тебе нравится этот жанр)",
                    "My favorite artist in this genre is... (назови любимого исполнителя)",
                    "This genre has influenced my taste in music because... (как этот жанр повлиял на твои музыкальные предпочтения)"
                ]
            },
            {
                title: "The Evolution of Art",
                topic: "Music & Arts",
                content: [
                    "Art has changed significantly over the years, especially in... (упомяни изменения в искусстве)",
                    "In the past, artists focused on... (что было основным в искусстве раньше)",
                    "Now, modern artists often use... (что часто используют современные художники)",
                    "The digital era has affected art by... (как цифровая эпоха повлияла на искусство)",
                    "In my opinion, the future of art will include... (как ты видишь будущее искусства)"
                ]
            },
            {
                title: "Art and Technology",
                topic: "Music & Arts",
                content: [
                    "Technology has revolutionized the way we create art, for example... (пример использования технологий в искусстве)",
                    "Digital tools have made art creation more accessible by... (как цифровые инструменты делают искусство более доступным)",
                    "Artists use technology to express their ideas in... (способы выражения идей с помощью технологий)",
                    "I believe that technology in art can... (как технологии могут повлиять на искусство)",
                    "A famous example of art influenced by technology is... (приведи пример известного искусства, использующего технологии)"
                ]
            },
            {
                title: "Art in Your Life",
                topic: "Music & Arts",
                content: [
                    "Art plays a significant role in my life because... (почему искусство важно для тебя)",
                    "I enjoy visiting art galleries or museums because... (почему ты любишь посещать галереи и музеи)",
                    "My favorite form of art is... (твоя любимая форма искусства)",
                    "I often find inspiration for my own creativity in... (что вдохновляет тебя на творчество)",
                    "If I had the opportunity, I would like to learn more about... (если бы была возможность, чему бы ты хотел научиться в искусстве)"
                ]
            },
            {
                title: "Music in Society",
                topic: "Music & Arts",
                content: [
                    "Music has always been an important part of culture because... (почему музыка важна в культуре)",
                    "Different cultures express themselves through music in... (как разные культуры выражаются через музыку)",
                    "Music can unite people in times of... (как музыка может объединять людей в трудные моменты)",
                    "In my country, traditional music is... (традиционная музыка твоей страны)",
                    "I think music has the power to... (какая сила есть у музыки, по твоему мнению)"
                ]
            },
            {
                title: "The Role of Artists in Society",
                topic: "Music & Arts",
                content: [
                    "Artists contribute to society by... (как художники способствуют обществу)",
                    "Their work often reflects... (что отражает их творчество)",
                    "In the past, artists were seen as... (каким образом художников воспринимали раньше)",
                    "Today, artists are seen as... (как сегодня воспринимают художников)",
                    "I believe that art can influence society by... (как искусство может влиять на общество)"
                ]
            },
            {
                title: "The Future of Music",
                topic: "Music & Arts",
                content: [
                    "The future of music is likely to involve... (как будет развиваться музыка в будущем)",
                    "New technologies, such as... (упомяни технологии, которые повлияют на музыку)",
                    "I believe music will continue to evolve because... (почему ты думаешь, что музыка будет продолжать развиваться)",
                    "One trend I see in the future of music is... (одна из тенденций в музыке будущего)",
                    "The impact of artificial intelligence on music will be... (как искусственный интеллект повлияет на музыку)"
                ]
            },
            {
                title: "The Influence of Art",
                topic: "Music & Arts",
                content: [
                    "Art has a profound impact on people's emotions, for example... (как искусство влияет на эмоции людей)",
                    "Many artists aim to provoke a response from their audience, such as... (как художники пытаются вызвать реакцию зрителей)",
                    "The purpose of art is to... (в чем цель искусства)",
                    "I have personally experienced how art can... (личный опыт воздействия искусства)",
                    "I think that art should... (по твоему мнению, что должно быть в искусстве)"
                ]
            },
            {
                title: "Your Artistic Preferences",
                topic: "Music & Arts",
                content: [
                    "My favorite artistic period is... (твоя любимая эпоха в искусстве)",
                    "I admire the works of artists from this period because... (почему ты любишь работы этих художников)",
                    "One of the most inspiring artworks I've seen is... (назови вдохновляющую картину или произведение искусства)",
                    "I have always been drawn to... (что привлекает тебя в искусстве)",
                    "If I were an artist, I would create... (какие произведения ты бы создал, если был бы художником)"
                ]
            }
        ]
    },
    {
        level: "Advanced",
        topic: "Travel & Adventures",
        scenarios: [
            {
                title: "The Philosophy of Travel",
                topic: "Travel & Adventures",
                content: [
                    "What does it truly mean to travel?",
                    "Is it simply movement through space, or a journey through the self?",
                    "I believe travel challenges our assumptions, exposes us to discomfort, and reshapes our identity.",
                    "In..., I encountered a worldview so different from mine that it forced me to question everything.",
                    "Travel, in essence, is the art of being transformed."
                ]
            },
            {
                title: "How Travel Shaped My Identity",
                topic: "Travel & Adventures",
                content: [
                    "My experiences abroad haven’t just added stamps to my passport — they’ve rewritten parts of who I am.",
                    "Living in..., for instance, taught me humility and patience in ways my home culture never could.",
                    "I used to see myself through a narrow cultural lens.",
                    "Now, I feel like a blend of everywhere I’ve been.",
                    "In many ways, I’ve become a citizen of the world — yet I still wrestle with where I truly belong."
                ]
            },
            {
                title: "The Ethics of Tourism in Developing Countries",
                topic: "Travel & Adventures",
                content: [
                    "Mass tourism brings economic growth but also exploitation.",
                    "I once visited a village in..., where locals performed “traditional” dances — clearly adapted for tourists.",
                    "It made me question: Are we supporting culture, or commodifying it?",
                    "Is it possible to be a tourist and still be ethical?",
                    "I think it requires conscious choices, empathy, and a willingness to step away from curated experiences."
                ]
            },
            {
                title: "Adventures That Taught Me Resilience",
                topic: "Travel & Adventures",
                content: [
                    "It’s easy to talk about adventure as something exciting.",
                    "But real adventure often involves chaos: missed buses, illnesses, and unexpected dangers.",
                    "In..., I had to navigate a medical emergency alone, with no shared language.",
                    "That experience taught me calm under pressure, self-reliance, and the value of kindness from strangers.",
                    "Resilience, I learned, is the quiet courage to keep going when things fall apart."
                ]
            },
            {
                title: "How Traveling Alone Changed Me",
                topic: "Travel & Adventures",
                content: [
                    "Solo travel is often romanticized, but it can be lonely and confronting.",
                    "Yet, during my time in..., the solitude forced me to reflect, observe, and truly listen.",
                    "Without anyone to lean on, I learned to trust my instincts.",
                    "The conversations I had with locals were deeper, more sincere.",
                    "I returned not only with memories but a much clearer understanding of who I am."
                ]
            },
            {
                title: "Language as a Window into Culture",
                topic: "Travel & Adventures",
                content: [
                    "Learning even a few words of a local language can change everything.",
                    "In..., I struggled to pronounce basic greetings, but locals appreciated the effort.",
                    "They opened up in ways they wouldn’t have if I’d stuck to English.",
                    "Language is more than a tool — it’s a gesture of respect.",
                    "It reminds me that every culture sees the world differently, even through its grammar."
                ]
            },
            {
                title: "How Travel Challenges Privilege",
                topic: "Travel & Adventures",
                content: [
                    "While traveling, I’ve often had the luxury of choice — where to go, how to move.",
                    "But in..., I met refugees for whom movement wasn’t a dream, but survival.",
                    "It was a stark reminder that not everyone travels by choice or for pleasure.",
                    "It made me rethink the privilege wrapped in my backpack.",
                    "Now I try to approach travel with more humility and awareness of the inequalities that surround it."
                ]
            },
            {      title: "Sustainability and the Future of Travel",
                topic: "Travel & Adventures",
                content: [
                    "As the climate crisis worsens, I often ask myself: should we travel at all?",
                    "Flying to remote islands contributes to emissions — yet these journeys also build empathy.",
                    "In..., I joined a local conservation effort and realized travel can be purposeful.",
                    "Perhaps the future lies not in traveling more, but in traveling better.",
                    "Less Instagram, more intention."
                ]
            },
            {
                title: "Cultural Misunderstandings and Personal Growth",
                topic: "Travel & Adventures",
                content: [
                    "In..., I once made a gesture that was considered rude, though I meant no harm.",
                    "The locals were kind enough to explain, and I felt both embarrassed and grateful.",
                    "Cultural misunderstandings are inevitable, but they’re also opportunities for learning.",
                    "They remind us that our way is not the only way.",
                    "Growth often begins with a mistake."
                ]
            },
            {
                title: "Why Adventure Still Matters in the Digital Age",
                topic: "Travel & Adventures",
                content: [
                    "We live in an era where you can “visit” anywhere through videos and virtual reality.",
                    "So why do we still seek real-world adventures?",
                    "Because there’s something irreplaceable about getting lost, tasting unfamiliar food, or hearing stories face-to-face.",
                    "Adventure isn’t just about novelty — it’s about vulnerability and presence.",
                    "In a world of filters and algorithms, real experience is still revolutionary."
                ]
            }
        ]
    },
    {
        level: "Advanced",
        topic: "Sports & Fitness",
        scenarios: [
            {
                title: "The Future of Sports",
                topic: "Sports & Fitness",
                content: [
                    "With technology advancing rapidly, sports are evolving.",
                    "How do you think sports will change in the next 10-20 years?",
                    "What new innovations or trends do you foresee impacting athletic performance and fan experience?"
                ]
            },
            {
                title: "The Pressure of Professional Sports",
                topic: "Sports & Fitness",
                content: [
                    "Professional athletes often face immense pressure to perform.",
                    "How do you think this pressure affects their mental and emotional well-being?",
                    "What measures can be taken to support athletes' mental health?"
                ]
            },
            {
                title: "The Impact of Sports on Society",
                topic: "Sports & Fitness",
                content: [
                    "Sports have a significant influence on culture and society.",
                    "How do you think sports can bring people together or drive societal change?",
                    "Can you think of an example where sports have played a role in social movements?"
                ]
            },
            {
                title: "The Role of Nutrition in Athletic Performance",
                topic: "Sports & Fitness",
                content: [
                    "Nutrition plays a crucial role in an athlete's performance.",
                    "What do you think is the most important aspect of an athlete's diet?",
                    "How do you think diet and training should complement each other for optimal results?"
                ]
            },
            {
                title: "Gender Equality in Sports",
                topic: "Sports & Fitness",
                content: [
                    "There is ongoing debate about equal opportunities for men and women in sports.",
                    "Do you think progress has been made in achieving gender equality in athletics?",
                    "What more can be done to support female athletes at all levels?"
                ]
            },
            {
                title: "The Ethics of Commercialization in Sports",
                topic: "Sports & Fitness",
                content: [
                    "Sports have become increasingly commercialized, with sponsorships and advertising everywhere.",
                    "How do you feel about the commercialization of sports?",
                    "Do you think it has affected the authenticity and integrity of the games?"
                ]
            },
            {
                title: "The Benefits of Cross-Training",
                topic: "Sports & Fitness",
                content: [
                    "Cross-training involves doing different types of exercise to improve overall performance.",
                    "What do you think are the main benefits of cross-training?",
                    "Have you ever tried incorporating different activities into your fitness routine?"
                ]
            },
            {
                title: "The Influence of Social Media on Athlete's Careers",
                topic: "Sports & Fitness",
                content: [
                    "Many athletes use social media to connect with fans and boost their careers.",
                    "How do you think social media has changed the way athletes engage with their audience?",
                    "Do you think it has positive or negative effects on their personal lives?"
                ]
            },
            {
                title: "Sports and Sustainability",
                topic: "Sports & Fitness",
                content: [
                    "Sustainability is becoming more important in every field, including sports.",
                    "What steps can professional sports leagues take to reduce their environmental impact?",
                    "Do you think sustainability is something that fans should consider when choosing which sports to support?"
                ]
            },
            {
                title: "The Impact of Sports on Aging",
                topic: "Sports & Fitness",
                content: [
                    "Physical activity is crucial for maintaining health as we age.",
                    "What kinds of sports or exercises do you think are best suited for older adults?",
                    "How can we encourage elderly individuals to stay active and engage in fitness throughout their lives?"
                ]
            }
        ]
    },
    {
        level: "Advanced",
        topic: "Science & Nature",
        scenarios: [
            {
                title: "The Future of Artificial Intelligence",
                topic: "Science & Nature",
                content: [
                    "How do you envision the future of artificial intelligence in the next 20 years?",
                    "What are the potential risks of advanced AI?",
                    "How can we ensure AI is developed in an ethical and responsible way?",
                    "In what areas could AI have the most positive impact on society?"
                ]
            },
            {
                title: "Climate Change and its Global Effects",
                topic: "Science & Nature",
                content: [
                    "What are the long-term consequences of climate change on a global scale?",
                    "How do different regions of the world experience climate change differently?",
                    "What role do developed and developing countries play in addressing climate change?",
                    "What innovative solutions can be implemented to mitigate the effects of climate change?"
                ]
            },
            {
                title: "Genetic Modification and Its Ethical Dilemmas",
                topic: "Science & Nature",
                content: [
                    "Do you think genetic modification is the future of medicine and agriculture?",
                    "What are the potential ethical concerns surrounding the use of genetic modification in humans?",
                    "How could genetically modified organisms (GMOs) help solve food scarcity?",
                    "What measures should be taken to regulate genetic engineering?"
                ]
            },
            {
                title: "The Importance of Space Exploration for Humanity",
                topic: "Science & Nature",
                content: [
                    "What are the most significant benefits of space exploration for humanity?",
                    "How do space discoveries help us better understand our own planet?",
                    "What are the potential dangers of exploring other planets and moons?",
                    "How should we balance the costs of space exploration with the pressing needs on Earth?"
                ]
            },
            {
                title: "The Role of Renewable Energy in a Sustainable Future",
                topic: "Science & Nature",
                content: [
                    "How feasible is it for the world to transition entirely to renewable energy sources?",
                    "What are the main obstacles in adopting renewable energy on a global scale?",
                    "How can new technologies enhance the efficiency of renewable energy?",
                    "Do you think renewable energy can fully replace fossil fuels in the next century?"
                ]
            },
            {
                title: "Biotechnology and Its Potential in Medicine",
                topic: "Science & Nature",
                content: [
                    "What are some of the most promising areas of biotechnology in modern medicine?",
                    "How could biotechnology revolutionize the treatment of diseases like cancer or genetic disorders?",
                    "What ethical dilemmas could arise from advances in biotechnology?",
                    "Should there be limits to the use of biotechnology, and if so, what should they be?"
                ]
            },
            {
                title: "The Impact of Deforestation on Global Ecosystems",
                topic: "Science & Nature",
                content: [
                    "How does deforestation affect global biodiversity and climate?",
                    "What are the primary causes of deforestation, and how can they be addressed?",
                    "What are some innovative methods to restore forests and halt deforestation?",
                    "How do you think international cooperation can be improved to tackle deforestation?"
                ]
            },
            {
                title: "The Future of Human Space Colonization",
                topic: "Science & Nature",
                content: [
                    "Do you think human colonization of other planets is feasible in the near future?",
                    "What technological advancements would be necessary for successful space colonization?",
                    "What ethical issues should be considered before sending humans to other planets?",
                    "How might space colonization change our understanding of Earth and humanity?"
                ]
            },
            {
                title: "The Concept of Sustainability in Modern Society",
                topic: "Science & Nature",
                content: [
                    "What does sustainability mean to you, and why is it important?",
                    "How can businesses be incentivized to adopt more sustainable practices?",
                    "What role does technology play in achieving sustainability goals?",
                    "Do you think modern consumerism is compatible with sustainable living?"
                ]
            },
            {
                title: "The Exploration of Deep Oceans and Marine Life",
                topic: "Science & Nature",
                content: [
                    "Why is the exploration of deep ocean environments important for scientific research?",
                    "What have we learned from studying marine life that could benefit other fields of science?",
                    "How do human activities threaten deep-sea ecosystems, and how can we protect them?",
                    "What technological innovations are helping scientists explore the deep ocean?"
                ]
            }
        ]
    },
    {
        level: "Advanced",
        topic: "Language Learning",
        scenarios: [
            {
                title: "Personal Language Philosophy",
                topic: "Language Learning",
                content: [
                    "What is your personal philosophy or approach to language learning?",
                    "Do you believe in structured learning or immersive, organic methods?",
                    "How has your approach evolved over time?",
                    "What advice would you give to someone just starting out?"
                ]
            },
            {
                title: "Cultural Nuance and Language",
                topic: "Language Learning",
                content: [
                    "How important is it to understand culture when learning a language?",
                    "Can you share an example of a cultural misunderstanding caused by language?",
                    "Do you think language learning can truly succeed without cultural context?",
                    "How do you integrate cultural learning into your routine?"
                ]
            },
            {
                title: "Language and Career Opportunities",
                topic: "Language Learning",
                content: [
                    "How has knowing English (or other languages) influenced your career or academic path?",
                    "Have you ever been offered a job or opportunity specifically because of your language skills?",
                    "Do you think language learning should be part of professional development? Why or why not?"
                ]
            },
            {
                title: "Thinking in Another Language",
                topic: "Language Learning",
                content: [
                    "Do you often think in English? If so, when does it happen most naturally?",
                    "How does thinking in another language change your decision-making or emotions?",
                    "Can you describe what it feels like to switch between languages mentally?",
                    "Do you ever experience 'language fatigue'? What do you do about it?"
                ]
            },
            {
                title: "The Role of Accent in Communication",
                topic: "Language Learning",
                content: [
                    "How important is accent in spoken communication?",
                    "Have you ever been judged (positively or negatively) based on your accent?",
                    "Should learners try to lose their accent, or is intelligibility enough?",
                    "What is your personal experience with pronunciation challenges?"
                ]
            },
            {
                title: "Deepening Vocabulary Knowledge",
                topic: "Language Learning",
                content: [
                    "How do you approach learning complex or academic vocabulary?",
                    "Do you actively study idioms, phrasal verbs, or slang? Why or why not?",
                    "What are the challenges in mastering advanced vocabulary?",
                    "Do you believe a richer vocabulary leads to deeper thinking?"
                ]
            },
            {
                title: "Language as a Tool for Expression",
                topic: "Language Learning",
                content: [
                    "Do you find it easier or harder to express emotions in English compared to your native language?",
                    "Are there any ideas or feelings you can express better in English?",
                    "How does language shape what you feel comfortable sharing with others?"
                ]
            },
            {
                title: "Cognitive Benefits of Language Learning",
                topic: "Language Learning",
                content: [
                    "Do you notice any mental or cognitive improvements from learning languages?",
                    "Has your memory, focus, or problem-solving ability changed?",
                    "Do you think multilingualism protects against mental decline with age?",
                    "What scientific evidence or personal experiences support your view?"
                ]
            },
            {
                title: "Identity and Bilingualism",
                topic: "Language Learning",
                content: [
                    "Do you identify equally with both your native language and English?",
                    "Has English become part of your personality or identity?",
                    "How do you navigate identity when interacting in different languages?",
                    "Do you feel 'more yourself' in one language over another?"
                ]
            },
            {
                title: "Mastery vs. Fluency",
                topic: "Language Learning",
                content: [
                    "What’s the difference between being fluent and being truly advanced or 'native-like'?",
                    "Do you consider yourself fluent, proficient, or still improving?",
                    "Is it necessary or realistic to aim for native-like speech?",
                    "How do you define 'language mastery' for yourself?"
                ]
            }
        ]
    },
    {
        level: "Advanced",
        topic: "Business & Career",
        scenarios: [
            {
                title: "Globalization and Its Impact on Business",
                topic: "Business & Career",
                content: [
                    "How has globalization affected businesses in your country?",
                    "What are some of the challenges that companies face when expanding internationally?",
                    "Do you think globalization is beneficial or harmful for small businesses?",
                    "How do you think businesses can stay competitive in a globalized market?"
                ]
            },
            {
                title: "Leadership and Management Styles",
                topic: "Business & Career",
                content: [
                    "What are the differences between leadership and management?",
                    "Which leadership style do you think is the most effective in today’s workplace?",
                    "How do management styles vary across cultures?",
                    "Can you think of a time when a leader’s style influenced the success or failure of a team?"
                ]
            },
            {
                title: "Work-Life Balance",
                topic: "Business & Career",
                content: [
                    "How do you define work-life balance?",
                    "Do you think achieving work-life balance is important for long-term career success?",
                    "What are some strategies for maintaining work-life balance in a demanding job?",
                    "Do you think companies should do more to promote work-life balance?"
                ]
            },
            {
                title: "The Role of Artificial Intelligence in Business",
                topic: "Business & Career",
                content: [
                    "What impact do you think AI will have on jobs in the next 10 years?",
                    "In which industries do you see AI having the greatest impact?",
                    "Do you think AI will replace certain roles in your field? How do you prepare for that?",
                    "How can businesses leverage AI to improve efficiency and customer experience?"
                ]
            },
            {
                title: "Ethical Issues in Business",
                topic: "Business & Career",
                content: [
                    "What ethical challenges do businesses face in today’s world?",
                    "How should companies address issues like environmental sustainability or labor rights?",
                    "Have you ever worked for a company that faced an ethical dilemma? How did it affect the employees and the business?",
                    "Do you think businesses are doing enough to address ethical concerns in their practices?"
                ]
            },
            {
                title: "Corporate Social Responsibility (CSR)",
                topic: "Business & Career",
                content: [
                    "What is Corporate Social Responsibility, and why is it important?",
                    "How can companies ensure they are fulfilling their CSR obligations?",
                    "Do you think consumers are more likely to support companies that focus on CSR?",
                    "How can CSR initiatives improve a company’s reputation and bottom line?"
                ]
            },
            {
                title: "Networking in the Digital Age",
                topic: "Business & Career",
                content: [
                    "How has networking changed with the rise of social media and professional platforms like LinkedIn?",
                    "Do you think online networking is as effective as in-person networking? Why or why not?",
                    "What strategies do you use to build and maintain professional relationships online?",
                    "How can someone network effectively in a highly competitive industry?"
                ]
            },
            {
                title: "The Gig Economy and Freelancing",
                topic: "Business & Career",
                content: [
                    "How has the gig economy changed the traditional workforce?",
                    "What are the advantages and disadvantages of freelancing compared to a traditional full-time job?",
                    "What skills are most important for someone working in the gig economy?",
                    "Do you think the gig economy will continue to grow in the coming years?"
                ]
            },
            {
                title: "Diversity and Inclusion in the Workplace",
                topic: "Business & Career",
                content: [
                    "Why is diversity important in the workplace?",
                    "What are the benefits of creating an inclusive work environment?",
                    "How can businesses promote diversity and inclusion in their hiring practices?",
                    "Can diversity lead to better business performance? Why or why not?"
                ]
            },
            {
                title: "Future Career Paths",
                topic: "Business & Career",
                content: [
                    "How do you think the job market will evolve in the next decade?",
                    "What skills will be most important for future professionals?",
                    "How can individuals prepare for career shifts or changes in their industry?",
                    "Do you think it’s better to specialize in one area or develop a broad set of skills?"
                ]
            }
        ]
    },
];
module.exports = scenarios;