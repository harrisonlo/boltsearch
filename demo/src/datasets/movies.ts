// IMDb Top 250
const movies = [
  {
    "title": "The Shawshank Redemption",
    "description": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red. Written by J-S-Golden",
    "rating": 9.3,
    "year": "1994",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Tim Robbins",
      "Morgan Freeman",
      "Bob Gunton"
    ]
  },
  {
    "title": "The Godfather",
    "description": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen. Written by J. S. Golden",
    "rating": 9.2,
    "year": "1972",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Marlon Brando",
      "Al Pacino",
      "James Caan"
    ]
  },
  {
    "title": "The Godfather: Part II",
    "description": "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba. Written by Keith Loh <loh@sfu.ca>",
    "rating": 9,
    "year": "1974",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Al Pacino",
      "Robert De Niro",
      "Robert Duvall"
    ]
  },
  {
    "title": "The Dark Knight",
    "description": "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \"confront everything he believes\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes. Written by Leon Lombardi",
    "rating": 9,
    "year": "2008",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "actors": [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart"
    ]
  },
  {
    "title": "12 Angry Men",
    "description": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room. Written by pjk <PETESID@VNET.IBM.COM>",
    "rating": 8.9,
    "year": "1957",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Henry Fonda",
      "Lee J. Cobb",
      "Martin Balsam"
    ]
  },
  {
    "title": "Schindler's List",
    "description": "Oskar Schindler is a vainglorious and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us. Written by Harald Mayr <marvin@bike.augusta.de>",
    "rating": 8.9,
    "year": "1993",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "actors": [
      "Liam Neeson",
      "Ralph Fiennes",
      "Ben Kingsley"
    ]
  },
  {
    "title": "Pulp Fiction",
    "description": "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his weight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents. Written by Soumitra",
    "rating": 8.9,
    "year": "1994",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "John Travolta",
      "Uma Thurman",
      "Samuel L. Jackson"
    ]
  },
  {
    "title": "The Lord of the Rings: The Return of the King",
    "description": "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits Frodo and Sam reach Mordor in their quest to destroy the \"one ring\", while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith. Written by Jwelch5742",
    "rating": 8.9,
    "year": "2003",
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "actors": [
      "Elijah Wood",
      "Viggo Mortensen",
      "Ian McKellen"
    ]
  },
  {
    "title": "Il buono, il brutto, il cattivo",
    "description": "Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off Tuco's bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor (Bill Carson) that he and a few other men have buried a stash of gold in a cemetery. Unfortunately Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know the location of the gold. All he needs is for the two to ... Written by Jeremy Thomson",
    "rating": 8.9,
    "year": "1966",
    "genres": [
      "Western"
    ],
    "actors": [
      "Clint Eastwood",
      "Eli Wallach",
      "Lee Van Cleef"
    ]
  },
  {
    "title": "Fight Club",
    "description": "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is. Written by Rhiannon",
    "rating": 8.8,
    "year": "1999",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Brad Pitt",
      "Edward Norton",
      "Meat Loaf"
    ]
  },
  {
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "description": "An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign! Written by Paul Twomey <toomsp@hotmail.com>",
    "rating": 8.8,
    "year": "2001",
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "actors": [
      "Elijah Wood",
      "Ian McKellen",
      "Orlando Bloom"
    ]
  },
  {
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "description": "Luke Skywalker, Han Solo, Princess Leia and Chewbacca face attack by the Imperial forces and its AT-AT walkers on the ice planet Hoth. While Han and Leia escape in the Millennium Falcon, Luke travels to Dagobah in search of Yoda. Only with the Jedi master's help will Luke survive when the dark side of the Force beckons him into the ultimate duel with Darth Vader. Written by Jwelch5742",
    "rating": 8.8,
    "year": "1980",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "actors": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher"
    ]
  },
  {
    "title": "Forrest Gump",
    "description": "Forrest Gump is a simple man with a low I.Q. but good intentions. He is running through childhood with his best and only friend Jenny. His 'mama' teaches him the ways of life and leaves him to choose his destiny. Forrest joins the army for service in Vietnam, finding new friends called Dan and Bubba, he wins medals, creates a famous shrimp fishing fleet, inspires people to jog, starts a ping-pong craze, creates the smiley, writes bumper stickers and songs, donates to people and meets the president several times. However, this is all irrelevant to Forrest who can only think of his childhood sweetheart Jenny Curran, who has messed up her life. Although in the end all he wants to prove is that anyone can love anyone. Written by aliw135",
    "rating": 8.8,
    "year": "1994",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "actors": [
      "Tom Hanks",
      "Robin Wright",
      "Gary Sinise"
    ]
  },
  {
    "title": "Inception",
    "description": "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible - inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming. Written by Warner Bros. Pictures",
    "rating": 8.8,
    "year": "2010",
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "actors": [
      "Leonardo DiCaprio",
      "Joseph Gordon-Levitt",
      "Ellen Page"
    ]
  },
  {
    "title": "The Lord of the Rings: The Two Towers",
    "description": "While Frodo and Sam, now accompanied by a new guide, continue their hopeless journey towards the land of shadow to destroy the One Ring, each member of the broken fellowship plays their part in the battle against the evil wizard Saruman and his armies of Isengard.",
    "rating": 8.7,
    "year": "2002",
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "actors": [
      "Elijah Wood",
      "Ian McKellen",
      "Viggo Mortensen"
    ]
  },
  {
    "title": "One Flew Over the Cuckoo's Nest",
    "description": "McMurphy has a criminal past and has once again gotten himself into trouble and is sentenced by the court. To escape labor duties in prison, McMurphy pleads insanity and is sent to a ward for the mentally unstable. Once here, McMurphy both endures and stands witness to the abuse and degradation of the oppressive Nurse Ratched, who gains superiority and power through the flaws of the other inmates. McMurphy and the other inmates band together to make a rebellious stance against the atrocious Nurse. Written by Jacob Oberfrank",
    "rating": 8.7,
    "year": "1975",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Jack Nicholson",
      "Louise Fletcher",
      "Michael Berryman"
    ]
  },
  {
    "title": "Goodfellas",
    "description": "Henry Hill might be a small time gangster, who may have taken part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who might have set their sights a bit higher. His two partners could kill off everyone else involved in the robbery, and slowly start to think about climbing up through the hierarchy of the Mob. Henry, however, might be badly affected by his partners' success, but will he consider stooping low enough to bring about the downfall of Jimmy and Tommy? Written by Colin Tinto <cst@imdb.com>",
    "rating": 8.7,
    "year": "1990",
    "genres": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "actors": [
      "Robert De Niro",
      "Ray Liotta",
      "Joe Pesci"
    ]
  },
  {
    "title": "The Matrix",
    "description": "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines that live off of the humans' body heat and electrochemical energy and who imprison their minds within an artificial reality known as the Matrix. As a rebel against the machines, Neo must return to the Matrix and confront the agents: super-powerful computer programs devoted to snuffing out Neo and the entire human rebellion. Written by redcommander27",
    "rating": 8.7,
    "year": "1999",
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "actors": [
      "Keanu Reeves",
      "Laurence Fishburne",
      "Carrie-Anne Moss"
    ]
  },
  {
    "title": "Shichinin no samurai",
    "description": "A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they supply the samurai with three small meals a day. The film culminates in a giant battle when 40 bandits attack the village. Written by Colin Tinto <cst@imdb.com>",
    "rating": 8.7,
    "year": "1954",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "actors": [
      "Toshirô Mifune",
      "Takashi Shimura",
      "Keiko Tsushima"
    ]
  },
  {
    "title": "Star Wars",
    "description": "The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker and Han Solo, captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 and C-3PO to rescue the beautiful princess, help the Rebel Alliance and restore freedom and justice to the Galaxy. Written by Jwelch5742",
    "rating": 8.7,
    "year": "1977",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "actors": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher"
    ]
  },
  {
    "title": "Cidade de Deus",
    "description": "Brazil, 1960s, City of God. The Tender Trio robs motels and gas trucks. Younger kids watch and learn well...too well. 1970s: Li'l Zé has prospered very well and owns the city. He causes violence and fear as he wipes out rival gangs without mercy. His best friend Bené is the only one to keep him on the good side of sanity. Rocket has watched these two gain power for years, and he wants no part of it. Yet he keeps getting swept up in the madness. All he wants to do is take pictures. 1980s: Things are out of control between the last two remaining gangs...will it ever end? Welcome to the City of God. Written by Jeff Mellinger <jeffmellinger@astound.net>",
    "rating": 8.7,
    "year": "2002",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Alexandre Rodrigues",
      "Matheus Nachtergaele",
      "Leandro Firmino"
    ]
  },
  {
    "title": "Se7en",
    "description": "A film about two homicide detectives' (Morgan Freeman and (Brad Pitt desperate hunt for a serial killer who justifies his crimes as absolution for the world's ignorance of the Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as the sociopathic \"John Doe\" (Kevin Spacey) sermonizes to Detectives Somerset and Mills -- one sin at a time. The sin of Gluttony comes first and the murderer's terrible capacity is graphically demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured but jaded Somerset researches the Seven Deadly Sins in an effort to understand the killer's modus operandi while the bright but green and impulsive Detective Mills (Pitt) scoffs at his efforts to get inside the mind of a killer... Written by Mark Fleetwood <mfleetwo@mail.coin.missouri.edu>",
    "rating": 8.6,
    "year": "1995",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Morgan Freeman",
      "Brad Pitt",
      "Kevin Spacey"
    ]
  },
  {
    "title": "The Silence of the Lambs",
    "description": "FBI trainee Clarice Starling works hard to advance her career, including trying to hide or put behind her West Virginia roots, of which if some knew would automatically classify her as being backward or white trash. After graduation, she aspires to work in the agency's Behavioral Science Unit under the leadership of Jack Crawford. While she is still a trainee, Crawford does ask her to question Dr. Hannibal Lecter, a psychiatrist imprisoned thus far for eight years in maximum security isolation for being a serial killer, he who cannibalized his victims. Clarice is able to figure out the assignment is to pick Lecter's brains to help them solve another serial murder case, that of someone coined by the media as Buffalo Bill who has so far killed five victims, all located in the eastern US, all young women who are slightly overweight especially around the hips, all who were drowned in natural bodies of water, and all who were stripped of large swaths of skin. She also figures that Crawford... Written by Huggo",
    "rating": 8.6,
    "year": "1991",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Jodie Foster",
      "Anthony Hopkins",
      "Lawrence A. Bonney"
    ]
  },
  {
    "title": "It's a Wonderful Life",
    "description": "George Bailey has spent his entire life giving of himself to the people of Bedford Falls. He has always longed to travel but never had the opportunity in order to prevent rich skinflint Mr. Potter from taking over the entire town. All that prevents him from doing so is George's modest building and loan company, which was founded by his generous father. But on Christmas Eve, George's Uncle Billy loses the business's $8,000 while intending to deposit it in the bank. Potter finds the misplaced money and hides it from Billy. When the bank examiner discovers the shortage later that night, George realizes that he will be held responsible and sent to jail and the company will collapse, finally allowing Potter to take over the town. Thinking of his wife, their young children, and others he loves will be better off with him dead, he contemplates suicide. But the prayers of his loved ones result in a gentle angel named Clarence coming to earth to help George, with the promise of earning his ... Written by alfiehitchie",
    "rating": 8.6,
    "year": "1946",
    "genres": [
      "Drama",
      "Family",
      "Fantasy"
    ],
    "actors": [
      "James Stewart",
      "Donna Reed",
      "Lionel Barrymore"
    ]
  },
  {
    "title": "The Usual Suspects",
    "description": "Following a truck hijack in New York, five conmen are arrested and brought together for questioning. As none of them are guilty, they plan a revenge operation against the police. The operation goes well, but then the influence of a legendary mastermind criminal called Keyser Söze is felt. It becomes clear that each one of them has wronged Söze at some point and must pay back now. The payback job leaves 27 men dead in a boat explosion, but the real question arises now: Who actually is Keyser Söze? Written by Soumitra",
    "rating": 8.6,
    "year": "1995",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Kevin Spacey",
      "Gabriel Byrne",
      "Chazz Palminteri"
    ]
  },
  {
    "title": "La vita è bella",
    "description": "In 1930s Italy, a carefree Jewish book keeper named Guido starts a fairy tale life by courting and marrying a lovely woman from a nearby city. Guido and his wife have a son and live happily together until the occupation of Italy by German forces. In an attempt to hold his family together and help his son survive the horrors of a Jewish Concentration Camp, Guido imagines that the Holocaust is a game and that the grand prize for winning is a tank. Written by Anthony Hughes <husnock31@hotmail.com>",
    "rating": 8.6,
    "year": "1997",
    "genres": [
      "Comedy",
      "Drama",
      "War"
    ],
    "actors": [
      "Roberto Benigni",
      "Nicoletta Braschi",
      "Giorgio Cantarini"
    ]
  },
  {
    "title": "Léon",
    "description": "After her father, mother, older sister and little brother are killed by her father's employers, the 12-year-old daughter of an abject drug dealer is forced to take refuge in the apartment of a professional hitman who at her request teaches her the methods of his job so she can take her revenge on the corrupt DEA agent who ruined her life by killing her beloved brother. Written by J. S. Golden",
    "rating": 8.6,
    "year": "1994",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Jean Reno",
      "Gary Oldman",
      "Natalie Portman"
    ]
  },
  {
    "title": "Sen to Chihiro no kamikakushi",
    "description": "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town. When her parents see a restaurant with great-smelling food but no staff, they decide to eat and pay later. However, Chihiro refuses to eat and decides to explore the theme park a bit more. She meets a boy named Haku who tells her that Chihiro and her parents are in danger, and they must leave immediately. She runs to the restaurant and finds that her parents have turned into pigs. In addition, the theme park turns out to be a town inhabited by demons, spirits, and evil gods. At the center of the town is a bathhouse where these creatures go to relax. The owner of the bathhouse ... Written by Zachary Harper",
    "rating": 8.6,
    "year": "2001",
    "genres": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "actors": [
      "Daveigh Chase",
      "Suzanne Pleshette",
      "Miyu Irino"
    ]
  },
  {
    "title": "Saving Private Ryan",
    "description": "Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action. Earlier in New Guinea, a third brother is KIA. Their mother, Mrs. Ryan, is to receive all three of the grave telegrams on the same day. The United States Army Chief of Staff, George C. Marshall, is given an opportunity to alleviate some of her grief when he learns of a fourth brother, Private James Ryan, and decides to send out 8 men (Cpt. Miller and select members from 2nd Rangers) to find him and bring him back home to his mother... Written by J.Zelman",
    "rating": 8.6,
    "year": "1998",
    "genres": [
      "Drama",
      "War"
    ],
    "actors": [
      "Tom Hanks",
      "Matt Damon",
      "Tom Sizemore"
    ]
  },
  {
    "title": "C'era una volta il West",
    "description": "Story of a young woman, Mrs. McBain, who moves from New Orleans to frontier Utah, on the very edge of the American West. She arrives to find her new husband and family slaughtered, but by whom? The prime suspect, coffee-lover Cheyenne, befriends her and offers to go after the real killer, assassin gang leader Frank, in her honor. He is accompanied by Harmonica, a man already on a quest to get even. Written by DrGoodBeat / edited by statmanjeff",
    "rating": 8.6,
    "year": "1968",
    "genres": [
      "Western"
    ],
    "actors": [
      "Henry Fonda",
      "Charles Bronson",
      "Claudia Cardinale"
    ]
  },
  {
    "title": "American History X",
    "description": "Derek Vineyard is paroled after serving 3 years in prison for brutally killing two black men who tried to break into/steal his truck. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did. Written by Nitesh D.(nmxpa7@msn.com)",
    "rating": 8.6,
    "year": "1998",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Edward Norton",
      "Edward Furlong",
      "Beverly D'Angelo"
    ]
  },
  {
    "title": "Interstellar",
    "description": "Earth's future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind's survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.",
    "rating": 8.6,
    "year": "2014",
    "genres": [
      "Adventure",
      "Drama",
      "Sci-Fi"
    ],
    "actors": [
      "Matthew McConaughey",
      "Anne Hathaway",
      "Jessica Chastain"
    ]
  },
  {
    "title": "Casablanca",
    "description": "In World War II Casablanca, Rick Blaine, exiled American and former freedom fighter, runs the most popular nightspot in town. The cynical lone wolf Blaine comes into the possession of two valuable letters of transit. When Nazi Major Strasser arrives in Casablanca, the sycophantic police Captain Renault does what he can to please him, including detaining a Czechoslovak underground leader Victor Laszlo. Much to Rick's surprise, Lazslo arrives with Ilsa, Rick's one time love. Rick is very bitter towards Ilsa, who ran out on him in Paris, but when he learns she had good reason to, they plan to run off together again using the letters of transit. Well, that was their original plan.... Written by Gary Jackson <garyjack5@cogeco.ca>",
    "rating": 8.6,
    "year": "1942",
    "genres": [
      "Drama",
      "Romance",
      "War"
    ],
    "actors": [
      "Humphrey Bogart",
      "Ingrid Bergman",
      "Paul Henreid"
    ]
  },
  {
    "title": "Psycho",
    "description": "Phoenix officeworker Marion Crane is fed up with the way life has treated her. She has to meet her lover Sam in lunch breaks and they cannot get married because Sam has to give most of his money away in alimony. One Friday Marion is trusted to bank $40,000 by her employer. Seeing the opportunity to take the money and start a new life, Marion leaves town and heads towards Sam's California store. Tired after the long drive and caught in a storm, she gets off the main highway and pulls into The Bates Motel. The motel is managed by a quiet young man called Norman who seems to be dominated by his mother. Written by Col Needham <col@imdb.com>",
    "rating": 8.5,
    "year": "1960",
    "genres": [
      "Horror",
      "Mystery",
      "Thriller"
    ],
    "actors": [
      "Anthony Perkins",
      "Janet Leigh",
      "Vera Miles"
    ]
  },
  {
    "title": "City Lights",
    "description": "A tramp falls in love with a beautiful blind girl. Her family is in financial trouble. The tramp's on-and-off friendship with a wealthy man allows him to be the girl's benefactor and suitor. Written by John J. Magee <magee@helix.mgh.harvard.edu>",
    "rating": 8.6,
    "year": "1931",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "actors": [
      "Charles Chaplin",
      "Virginia Cherrill",
      "Florence Lee"
    ]
  },
  {
    "title": "The Green Mile",
    "description": "Death Row guards at a penitentiary, in the 1930's, have a moral dilemma with their job when they discover one of their prisoners, a convicted murderer, has a special gift. Written by Guy Johns",
    "rating": 8.5,
    "year": "1999",
    "genres": [
      "Crime",
      "Drama",
      "Fantasy"
    ],
    "actors": [
      "Tom Hanks",
      "Michael Clarke Duncan",
      "David Morse"
    ]
  },
  {
    "title": "Intouchables",
    "description": "In Paris, the aristocratic and intellectual Philippe is a quadriplegic millionaire who is interviewing candidates for the position of his carer, with his red-haired secretary Magalie. Out of the blue, the rude African Driss cuts the line of candidates and brings a document from the Social Security and asks Phillipe to sign it to prove that he is seeking a job position so he can receive his unemployment benefit. Philippe challenges Driss, offering him a trial period of one month to gain experience helping him. Then Driss can decide whether he would like to stay with him or not. Driss accepts the challenge and moves to the mansion, changing the boring life of Phillipe and his employees. Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "rating": 8.6,
    "year": "2011",
    "genres": [
      "Biography",
      "Comedy",
      "Drama"
    ],
    "actors": [
      "François Cluzet",
      "Omar Sy",
      "Anne Le Ny"
    ]
  },
  {
    "title": "Modern Times",
    "description": "Chaplins last 'silent' film, filled with sound effects, was made when everyone else was making talkies. Charlie turns against modern society, the machine age, (The use of sound in films ?) and progress. Firstly we see him frantically trying to keep up with a production line, tightening bolts. He is selected for an experiment with an automatic feeding machine, but various mishaps leads his boss to believe he has gone mad, and Charlie is sent to a mental hospital... When he gets out, he is mistaken for a communist while waving a red flag, sent to jail, foils a jailbreak, and is let out again. We follow Charlie through many more escapades before the film is out. Written by Colin Tinto <cst@imdb.com>",
    "rating": 8.5,
    "year": "1936",
    "genres": [
      "Comedy",
      "Drama",
      "Family"
    ],
    "actors": [
      "Charles Chaplin",
      "Paulette Goddard",
      "Henry Bergman"
    ]
  },
  {
    "title": "Raiders of the Lost Ark",
    "description": "The year is 1936. An archeology professor named Indiana Jones is venturing in the jungles of South America searching for a golden statue. Unfortunately, he sets off a deadly trap but miraculously escapes. Then, Jones hears from a museum curator named Marcus Brody about a biblical artifact called The Ark of the Covenant, which can hold the key to humanly existence. Jones has to venture to vast places such as Nepal and Egypt to find this artifact. However, he will have to fight his enemy Rene Belloq and a band of Nazis in order to reach it. Written by John Wiggins",
    "rating": 8.5,
    "year": "1981",
    "genres": [
      "Action",
      "Adventure"
    ],
    "actors": [
      "Harrison Ford",
      "Karen Allen",
      "Paul Freeman"
    ]
  },
  {
    "title": "Rear Window",
    "description": "Professional photographer L.B. \"Jeff\" Jeffries breaks his leg while getting an action shot at an auto race. Confined to his New York apartment, he spends his time looking out of the rear window observing the neighbors. He begins to suspect that a man across the courtyard may have murdered his wife. Jeff enlists the help of his high society fashion-consultant girlfriend Lisa Freemont and his visiting nurse Stella to investigate. Written by Col Needham <col@imdb.com>",
    "rating": 8.5,
    "year": "1954",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "actors": [
      "James Stewart",
      "Grace Kelly",
      "Wendell Corey"
    ]
  },
  {
    "title": "The Pianist",
    "description": "In this adaptation of the autobiography \"The Pianist: The Extraordinary True Story of One Man's Survival in Warsaw, 1939-1945,\" Wladyslaw Szpilman, a Polish Jewish radio station pianist, sees Warsaw change gradually as World War II begins. Szpilman is forced into the Warsaw Ghetto, but is later separated from his family during Operation Reinhard. From this time until the concentration camp prisoners are released, Szpilman hides in various locations among the ruins of Warsaw. Written by Jwelch5742",
    "rating": 8.5,
    "year": "2002",
    "genres": [
      "Biography",
      "Drama",
      "War"
    ],
    "actors": [
      "Adrien Brody",
      "Thomas Kretschmann",
      "Frank Finlay"
    ]
  },
  {
    "title": "The Departed",
    "description": "In South Boston, the state police force is waging war on Irish-American organized crime. Young undercover cop Billy Costigan is assigned to infiltrate the mob syndicate run by gangland chief Frank Costello. While Billy quickly gains Costello's confidence, Colin Sullivan, a hardened young criminal who has infiltrated the state police as an informer for the syndicate is rising to a position of power in the Special Investigation Unit. Each man becomes deeply consumed by their double lives, gathering information about the plans and counter-plans of the operations they have penetrated. But when it becomes clear to both the mob and the police that there is a mole in their midst, Billy and Colin are suddenly in danger of being caught and exposed to the enemy - and each must race to uncover the identity of the other man in time to save themselves. But is either willing to turn on their friends and comrades they've made during their long stints undercover? Written by Anonymous",
    "rating": 8.5,
    "year": "2006",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Leonardo DiCaprio",
      "Matt Damon",
      "Jack Nicholson"
    ]
  },
  {
    "title": "Terminator 2: Judgment Day",
    "description": "Over 10 years have passed since the first cyborg called The Terminator tried to kill Sarah Connor and her unborn son, John Connor. John Connor, the future leader of the human resistance, is now a healthy young boy. However another Terminator is sent back through time called the T-1000, which is more advanced and more powerful than its predecessor. The Mission: to kill John Connor when he's still a child. However, Sarah and John do not have to face this threat of a Terminator alone. Another Terminator is also sent back through time. The mission: to protect John and Sarah Connor at all costs. The battle for tomorrow has begun... Written by Eric ggg",
    "rating": 8.5,
    "year": "1991",
    "genres": [
      "Action",
      "Sci-Fi",
      "Thriller"
    ],
    "actors": [
      "Arnold Schwarzenegger",
      "Linda Hamilton",
      "Edward Furlong"
    ]
  },
  {
    "title": "Back to the Future",
    "description": "Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean \"time machine\" invented by a slightly mad scientist. During his often hysterical, always amazing trip back in time, Marty must make certain his teenage parents-to-be meet and fall in love - so he can get back to the future. Written by Robert Lynch <docrlynch@yahoo.com>",
    "rating": 8.5,
    "year": "1985",
    "genres": [
      "Adventure",
      "Comedy",
      "Sci-Fi"
    ],
    "actors": [
      "Michael J. Fox",
      "Christopher Lloyd",
      "Lea Thompson"
    ]
  },
  {
    "title": "Whiplash",
    "description": "A young and talented drummer attending a prestigious music academy finds himself under the wing of the most respected professor at the school, one who does not hold back on abuse towards his students. The two form an odd relationship as the student wants to achieve greatness, and the professor pushes him. Written by andrewhodkinson",
    "rating": 8.5,
    "year": "2014",
    "genres": [
      "Drama",
      "Music"
    ],
    "actors": [
      "Miles Teller",
      "J.K. Simmons",
      "Melissa Benoist"
    ]
  },
  {
    "title": "Gladiator",
    "description": "Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge. Written by Chris \"Morphy\" Terry",
    "rating": 8.5,
    "year": "2000",
    "genres": [
      "Action",
      "Adventure",
      "Drama"
    ],
    "actors": [
      "Russell Crowe",
      "Joaquin Phoenix",
      "Connie Nielsen"
    ]
  },
  {
    "title": "Memento",
    "description": "Memento chronicles two separate stories of Leonard, an ex-insurance investigator who can no longer build new memories, as he attempts to find the murderer of his wife, which is the last thing he remembers. One story line moves forward in time while the other tells the story backwards revealing more each time. Written by Scion013",
    "rating": 8.5,
    "year": "2000",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "actors": [
      "Guy Pearce",
      "Carrie-Anne Moss",
      "Joe Pantoliano"
    ]
  },
  {
    "title": "Apocalypse Now",
    "description": "It is the height of the war in Vietnam, and U.S. Army Captain Willard is sent by Colonel Lucas and a General to carry out a mission that, officially, 'does not exist - nor will it ever exist'. The mission: To seek out a mysterious Green Beret Colonel, Walter Kurtz, whose army has crossed the border into Cambodia and is conducting hit-and-run missions against the Viet Cong and NVA. The army believes Kurtz has gone completely insane and Willard's job is to eliminate him! Willard, sent up the Nung River on a U.S. Navy patrol boat, discovers that his target is one of the most decorated officers in the U.S. Army. His crew meets up with surfer-type Lt-Colonel Kilgore, head of a U.S Army helicopter cavalry group which eliminates a Viet Cong outpost to provide an entry point into the Nung River. After some hair-raising encounters, in which some of his crew are killed, Willard, Lance and Chef reach Colonel Kurtz's outpost, beyond the Do Lung Bridge. Now, after becoming prisoners of Kurtz, will... Written by Derek O'Cain",
    "rating": 8.5,
    "year": "1979",
    "genres": [
      "Drama",
      "War"
    ],
    "actors": [
      "Martin Sheen",
      "Marlon Brando",
      "Robert Duvall"
    ]
  },
  {
    "title": "The Prestige",
    "description": "In the end of the Nineteenth Century, in London, Robert Angier, his beloved wife Julia McCullough and Alfred Borden are friends and assistants of a magician. When Julia accidentally dies during a performance, Robert blames Alfred for her death and they become enemies. Both become famous and rival magicians, sabotaging the performance of the other on the stage. When Alfred performs a successful trick, Robert becomes obsessed trying to disclose the secret of his competitor with tragic consequences. Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "rating": 8.5,
    "year": "2006",
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "actors": [
      "Christian Bale",
      "Hugh Jackman",
      "Scarlett Johansson"
    ]
  },
  {
    "title": "The Lion King",
    "description": "A young lion Prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young Prince must decide his fate: will he remain an outcast, or face his demons and become what he needs to be? Written by femaledragon1234",
    "rating": 8.5,
    "year": "1994",
    "genres": [
      "Animation",
      "Adventure",
      "Drama"
    ],
    "actors": [
      "Matthew Broderick",
      "Jeremy Irons",
      "James Earl Jones"
    ]
  },
  {
    "title": "Alien",
    "description": "A commercial crew aboard the deep space towing vessel, Nostromo is on its way home when they pick up an SOS warning from a distant moon. What they don't know is that the SOS warning is not like any other ordinary warning call. Picking up the signal, the crew realize that they are not alone on the spaceship when an alien stowaway is on the cargo ship. Written by blazesnakes9",
    "rating": 8.5,
    "year": "1979",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "actors": [
      "Sigourney Weaver",
      "Tom Skerritt",
      "John Hurt"
    ]
  },
  {
    "title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "description": "Paranoid Brigadier General Jack D. Ripper of Burpelson Air Force Base, believing that fluoridation of the American water supply is a Soviet plot to poison the U.S. populace, is able to deploy through a back door mechanism a nuclear attack on the Soviet Union without the knowledge of his superiors, including the Chair of the Joint Chiefs of Staff, General Buck Turgidson, and President Merkin Muffley. Only Ripper knows the code to recall the B-52 bombers and he has shut down communication in and out of Burpelson as a measure to protect this attack. Ripper's executive officer, RAF Group Captain Lionel Mandrake (on exchange from Britain), who is being held at Burpelson by Ripper, believes he knows the recall codes if he can only get a message to the outside world. Meanwhile at the Pentagon War Room, key persons including Muffley, Turgidson and nuclear scientist and adviser, a former Nazi named Dr. Strangelove, are discussing measures to stop the attack or mitigate its blow-up into an all ... Written by Huggo",
    "rating": 8.5,
    "year": "1964",
    "genres": [
      "Comedy"
    ],
    "actors": [
      "Peter Sellers",
      "George C. Scott",
      "Sterling Hayden"
    ]
  },
  {
    "title": "Sunset Blvd.",
    "description": "In Hollywood of the 50's, the obscure screenplay writer Joe Gillis is not able to sell his work to the studios, is full of debts and is thinking in returning to his hometown to work in an office. While trying to escape from his creditors, he has a flat tire and parks his car in a decadent mansion in Sunset Boulevard. He meets the owner and former silent-movie star Norma Desmond, who lives alone wit her butler and driver Max von Mayerling. Norma is demented and believes she will return to the cinema industry, and is protected and isolated from the world by Max, who was his director and husband in the past and still loves her. Norma proposes Joe to move to the mansion and help her in writing a screenplay for her comeback to the cinema, and the small-time writer becomes her lover and gigolo. When Joe falls in love for the young aspirant writer Betty Schaefer, Norma becomes jealous and completely insane and her madness leads to a tragic end. Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "rating": 8.5,
    "year": "1950",
    "genres": [
      "Drama",
      "Film-Noir"
    ],
    "actors": [
      "William Holden",
      "Gloria Swanson",
      "Erich von Stroheim"
    ]
  },
  {
    "title": "The Great Dictator",
    "description": "Twenty years after the end of WWI in which the nation of Tomainia was on the losing side, Adenoid Hynkel has risen to power as the ruthless dictator of the country. He believes in a pure Aryan state, and the decimation of the Jews. This situation is unknown to a simple Jewish-Tomainian barber who has since been hospitalized the result of a WWI battle. Upon his release, the barber, who had been suffering from memory loss about the war, is shown the new persecuted life of the Jews by many living in the Jewish ghetto, including a washerwoman named Hannah, with whom he begins a relationship. The barber is ultimately spared such persecution by Commander Schultz, who he saved in that WWI battle. The lives of all Jews in Tomainia are eventually spared with a policy shift by Hynkel himself, who is doing so for ulterior motives. But those motives include a want for world domination, starting with the invasion of neighboring Osterlich, which may be threatened by Benzino Napaloni, the dictator ... Written by Huggo",
    "rating": 8.5,
    "year": "1940",
    "genres": [
      "Comedy",
      "Drama",
      "War"
    ],
    "actors": [
      "Charles Chaplin",
      "Paulette Goddard",
      "Jack Oakie"
    ]
  },
  {
    "title": "Nuovo Cinema Paradiso",
    "description": "A famous film director remembers his childhood at the Cinema Paradiso where Alfredo, the projectionist, first brought about his love of films. He returns home to his Sicilian village for the first time after almost 30 years and is reminded of his first love, Elena, who disappeared from his life before he left for Rome. Written by Graeme Roy <gsr@cbmamiga.demon.co.uk>",
    "rating": 8.5,
    "year": "1988",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Philippe Noiret",
      "Enzo Cannavale",
      "Antonella Attili"
    ]
  },
  {
    "title": "Das Leben der Anderen",
    "description": "Gerd Wiesler is an officer with the Stasi, the East German secret police. The film begins in 1984 when Wiesler attends a play written by Georg Dreyman, who is considered by many to be the ultimate example of the loyal citizen. Wiesler has a gut feeling that Dreyman can't be as ideal as he seems and believes surveillance is called for. The Minister of Culture agrees but only later does Wiesler learn that the Minister sees Dreyman as a rival and lusts after his partner Christa-Maria. The more time he spends listening in on them, the more he comes to care about them. The once rigid Stasi officer begins to intervene in their lives, in a positive way, protecting them whenever possible. Eventually, Wiesler activities catch up to him and while there is no proof of wrongdoing, he finds himself in menial jobs - until the unbelievable happens. Written by garykmcd",
    "rating": 8.5,
    "year": "2006",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Ulrich Mühe",
      "Martina Gedeck",
      "Sebastian Koch"
    ]
  },
  {
    "title": "Hotaru no haka",
    "description": "The story of Seita and Satsuko, two young Japanese siblings, living in the declining days of World War II. When an American firebombing separates the two children from their parents, the two siblings must rely completely on one another while they struggle to fight for their survival. Written by Kyle Perez",
    "rating": 8.5,
    "year": "1988",
    "genres": [
      "Animation",
      "Drama",
      "War"
    ],
    "actors": [
      "Tsutomu Tatsumi",
      "Ayano Shiraishi",
      "Akemi Yamaguchi"
    ]
  },
  {
    "title": "Paths of Glory",
    "description": "The futility and irony of the war in the trenches in WWI is shown as a unit commander in the French army must deal with the mutiny of his men and a glory-seeking general after part of his force falls back under fire in an impossible attack. Written by Keith Loh <loh@sfu.ca>",
    "rating": 8.5,
    "year": "1957",
    "genres": [
      "Drama",
      "War"
    ],
    "actors": [
      "Kirk Douglas",
      "Ralph Meeker",
      "Adolphe Menjou"
    ]
  },
  {
    "title": "Django Unchained",
    "description": "A German dentist buys the freedom of a slave and trains him with the intent to make him his deputy bounty hunter. Instead, he is led to the site of the slave's wife who belongs to a ruthless plantation owner. Written by BenLobel",
    "rating": 8.4,
    "year": "2012",
    "genres": [
      "Drama",
      "Western"
    ],
    "actors": [
      "Jamie Foxx",
      "Christoph Waltz",
      "Leonardo DiCaprio"
    ]
  },
  {
    "title": "The Shining",
    "description": "Signing a contract, Jack Torrance, a normal writer and former teacher agrees to take care of a hotel which has a long, violent past that puts everyone in the hotel in a nervous situation. While Jack slowly gets more violent and angry of his life, his son, Danny, tries to use a special talent, the \"Shining\", to inform the people outside about whatever that is going on in the hotel. Written by J. S. Golden",
    "rating": 8.4,
    "year": "1980",
    "genres": [
      "Drama",
      "Horror"
    ],
    "actors": [
      "Jack Nicholson",
      "Shelley Duvall",
      "Danny Lloyd"
    ]
  },
  {
    "title": "La La Land",
    "description": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart. Written by Eirini",
    "rating": 8.5,
    "year": "2016",
    "genres": [
      "Comedy",
      "Drama",
      "Musical"
    ],
    "actors": [
      "Ryan Gosling",
      "Emma Stone",
      "Rosemarie DeWitt"
    ]
  },
  {
    "title": "WALL·E",
    "description": "In a distant, but not so unrealistic, future where mankind has abandoned earth because it has become covered with trash from products sold by the powerful multi-national Buy N Large corporation, WALL-E, a garbage collecting robot has been left to clean up the mess. Mesmerized with trinkets of Earth's history and show tunes, WALL-E is alone on Earth except for a sprightly pet cockroach. One day, EVE, a sleek (and dangerous) reconnaissance robot, is sent to Earth to find proof that life is once again sustainable. WALL-E falls in love with EVE. WALL-E rescues EVE from a dust storm and shows her a living plant he found amongst the rubble. Consistent with her \"directive\", EVE takes the plant and automatically enters a deactivated state except for a blinking green beacon. WALL-E, doesn't understand what has happened to his new friend, but, true to his love, he protects her from wind, rain, and lightning, even as she is unresponsive. One day a massive ship comes to reclaim EVE, but WALL-E, ...",
    "rating": 8.4,
    "year": "2008",
    "genres": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "actors": [
      "Ben Burtt",
      "Elissa Knight",
      "Jeff Garlin"
    ]
  },
  {
    "title": "American Beauty",
    "description": "Lester and Carolyn Burnham are, on the outside, a perfect husband and wife in a perfect house in a perfect neighborhood. But inside, Lester is slipping deeper and deeper into a hopeless depression. He finally snaps when he becomes infatuated with one of his daughter's friends. Meanwhile, his daughter Jane is developing a happy friendship with a shy boy-next-door named Ricky, who lives with an abusive father. Written by Jessie Skinner <eietherbinge@hotmail.com>",
    "rating": 8.4,
    "year": "1999",
    "genres": [
      "Drama",
      "Romance"
    ],
    "actors": [
      "Kevin Spacey",
      "Annette Bening",
      "Thora Birch"
    ]
  },
  {
    "title": "The Dark Knight Rises",
    "description": "Despite his tarnished reputation after the events of The Dark Knight, in which he took the rap for Dent's crimes, Batman feels compelled to intervene to assist the city and its police force which is struggling to cope with Bane's plans to destroy the city. Written by WellardRockard",
    "rating": 8.5,
    "year": "2012",
    "genres": [
      "Action",
      "Thriller"
    ],
    "actors": [
      "Christian Bale",
      "Tom Hardy",
      "Anne Hathaway"
    ]
  },
  {
    "title": "Mononoke-hime",
    "description": "While protecting his village from rampaging boar-god/demon, a confident young warrior, Ashitaka, is stricken by a deadly curse. To save his life, he must journey to the forests of the west. Once there, he's embroiled in a fierce campaign that humans were waging on the forest. The ambitious Lady Eboshi and her loyal clan use their guns against the gods of the forest and a brave young woman, Princess Mononoke, who was raised by a wolf-god. Ashitaka sees the good in both sides and tries to stem the flood of blood. This is met be animosity by both sides as they each see him as supporting the enemy. Written by Christopher Taguchi",
    "rating": 8.4,
    "year": "1997",
    "genres": [
      "Animation",
      "Adventure",
      "Fantasy"
    ],
    "actors": [
      "Yôji Matsuda",
      "Yuriko Ishida",
      "Yûko Tanaka"
    ]
  },
  {
    "title": "Aliens",
    "description": "Fifty seven years after Ellen Ripley survived her disastrous ordeal, her escape vessel is recovered after drifting across the galaxy as she slept in cryogenic stasis. Back on Earth, nobody believed her story about the \"Aliens\" on the moon LV-426. After the \"Company\" orders the colony on LV-426 to investigate, however, all communication with the colony is lost. The Company enlists Ripley to aid a team of tough, rugged space marines on a rescue mission to the now partially terraformed moon to find out if there are aliens or survivors. As the mission unfolds, Ripley will be forced to come to grips with her worst nightmare, but even as she does, she finds that the worst is yet to come. Written by Brian Rawlings",
    "rating": 8.4,
    "year": "1986",
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "actors": [
      "Sigourney Weaver",
      "Michael Biehn",
      "Carrie Henn"
    ]
  },
  {
    "title": "Oldeuboi",
    "description": "An average man is kidnapped and imprisoned in a shabby cell for 15 years without explanation. He then is released, equipped with money, a cellphone and expensive clothes. As he strives to explain his imprisonment and get his revenge, Oh Dae-Su soon finds out that his kidnapper has a greater plan for him and is set onto a path of pain and suffering in an attempt to uncover the motive of his mysterious tormentor. Written by Jacksrevenge",
    "rating": 8.4,
    "year": "2003",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "actors": [
      "Min-sik Choi",
      "Ji-tae Yu",
      "Hye-jeong Kang"
    ]
  },
  {
    "title": "Once Upon a Time in America",
    "description": "Epic tale of a group of Jewish gangsters in New York, from childhood, through their glory years during prohibition, and their meeting again 35 years later. Written by Andrew Welsh <andreww@bnr.ca>",
    "rating": 8.4,
    "year": "1984",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Robert De Niro",
      "James Woods",
      "Elizabeth McGovern"
    ]
  },
  {
    "title": "Citizen Kane",
    "description": "A group of reporters are trying to decipher the last word ever spoken by Charles Foster Kane, the millionaire newspaper tycoon: \"Rosebud.\" The film begins with a news reel detailing Kane's life for the masses, and then from there, we are shown flashbacks from Kane's life. As the reporters investigate further, the viewers see a display of a fascinating man's rise to fame, and how he eventually fell off the top of the world. Written by Zack H.",
    "rating": 8.4,
    "year": "1941",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Orson Welles",
      "Joseph Cotten",
      "Dorothy Comingore"
    ]
  },
  {
    "title": "Das Boot",
    "description": "It is 1942 and the German submarine fleet is heavily engaged in the so-called \"Battle of the Atlantic\" to harass and destroy British shipping. With better escorts of the Destroyer Class, however, German U-Boats have begun to take heavy losses. \"Das Boot\" is the story of one such U-Boat crew, with the film examining how these submariners maintained their professionalism as soldiers and attempted to accomplish impossible missions, all the while attempting to understand and obey the ideology of the government under which they served. Written by Anthony Hughes <husnock31@hotmail.com>",
    "rating": 8.4,
    "year": "1981",
    "genres": [
      "Adventure",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Jürgen Prochnow",
      "Herbert Grönemeyer",
      "Klaus Wennemann"
    ]
  },
  {
    "title": "Witness for the Prosecution",
    "description": "It's Britain, 1953. Upon his return to work following a heart attack, irrepressible barrister Sir Wilfrid Robarts, known as a barrister for the hopeless, takes on a murder case, much to the exasperation of his medical team, led by his overly regulated private nurse, Miss Plimsoll, who tries her hardest to ensure that he not return to his hard living ways - including excessive cigar smoking and drinking - while he takes his medication and gets his much needed rest. That case is defending American war veteran Leonard Vole, a poor, out of work, struggling inventor who is accused of murdering his fifty-six year old lonely and wealthy widowed acquaintance, Emily French. The initial evidence is circumstantial but points to Leonard as the murderer. Despite being happily married to East German former beer hall performer Christine Vole, he fostered that friendship with Mrs. French in the hopes that she would finance one of his many inventions to the tune of a few hundred pounds. It thus does ... Written by Huggo",
    "rating": 8.4,
    "year": "1957",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Tyrone Power",
      "Marlene Dietrich",
      "Charles Laughton"
    ]
  },
  {
    "title": "North by Northwest",
    "description": "Madison Avenue advertising man Roger Thornhill finds himself thrust into the world of spies when he is mistaken for a man by the name of George Kaplan. Foreign spy Philip Vandamm and his henchman Leonard try to eliminate him but when Thornhill tries to make sense of the case, he is framed for murder. Now on the run from the police, he manages to board the 20th Century Limited bound for Chicago where he meets a beautiful blond, Eve Kendall, who helps him to evade the authorities. His world is turned upside down yet again when he learns that Eve isn't the innocent bystander he thought she was. Not all is as it seems however, leading to a dramatic rescue and escape at the top of Mt. Rushmore. Written by garykmcd",
    "rating": 8.4,
    "year": "1959",
    "genres": [
      "Action",
      "Adventure",
      "Mystery"
    ],
    "actors": [
      "Cary Grant",
      "Eva Marie Saint",
      "James Mason"
    ]
  },
  {
    "title": "Vertigo",
    "description": "John \"Scottie\" Ferguson is a retired San Francisco police detective who suffers from acrophobia and Madeleine is the lady who leads him to high places. A wealthy shipbuilder who is an acquaintance from college days approaches Scottie and asks him to follow his beautiful wife, Madeleine. He fears she is going insane, maybe even contemplating suicide, he believes she is possessed by a dead ancestor. Scottie is skeptical, but agrees after he sees the beautiful Madeleine. Written by filmfactsman",
    "rating": 8.4,
    "year": "1958",
    "genres": [
      "Mystery",
      "Romance",
      "Thriller"
    ],
    "actors": [
      "James Stewart",
      "Kim Novak",
      "Barbara Bel Geddes"
    ]
  },
  {
    "title": "Star Wars: Episode VI - Return of the Jedi",
    "description": "Luke Skywalker battles horrible Jabba the Hut and cruel Darth Vader to save his comrades in the Rebel Alliance and triumph over the Galactic Empire. Han Solo and Princess Leia reaffirm their love and team with Chewbacca, Lando Calrissian, the Ewoks and the androids C-3PO and R2-D2 to aid in the disruption of the Dark Side and the defeat of the evil emperor. Written by Jwelch5742",
    "rating": 8.4,
    "year": "1983",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "actors": [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher"
    ]
  },
  {
    "title": "Reservoir Dogs",
    "description": "Six criminals, who are strangers to each other, are hired by a crime boss, Joe Cabot, to carry out a diamond robbery. Right at the outset, they are given false names with the intention that they won't get too close and will concentrate on the job instead. They are completely sure that the robbery is going to be a success. But, when the police show up right at the time and the site of the robbery, panic spreads amongst the group members, and two of them are killed in the subsequent shootout, along with a few policemen and civilians. When the remaining people assemble at the premeditated rendezvous point (a warehouse), they begin to suspect that one of them is an undercover cop. Written by Soumitra",
    "rating": 8.4,
    "year": "1992",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Harvey Keitel",
      "Tim Roth",
      "Michael Madsen"
    ]
  },
  {
    "title": "M",
    "description": "In Germany, Hans Beckert is an unknown killer of girls. He whistles Edvard Grieg's 'In The Hall of the Mountain King', from the 'Peer Gynt' Suite I Op. 46 while attracting the little girls for death. The police force pressed by the Minister give its best effort trying unsuccessfully to arrest the serial killer. The organized crime has great losses due to the intense search and siege of the police and decides to chase the murderer, with the support of the beggars association. They catch Hans and briefly judge him. Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "rating": 8.4,
    "year": "1931",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Peter Lorre",
      "Ellen Widmann",
      "Inge Landgut"
    ]
  },
  {
    "title": "Braveheart",
    "description": "William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler Edward the Longshanks, who wishes to inherit the crown of Scotland for himself. When he was a young boy, William Wallace's father and brother, along with many others, lost their lives trying to free Scotland. Once he loses another of his loved ones, William Wallace begins his long quest to make Scotland free once and for all, along with the assistance of Robert the Bruce. Written by Anonymous",
    "rating": 8.4,
    "year": "1995",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "actors": [
      "Mel Gibson",
      "Sophie Marceau",
      "Patrick McGoohan"
    ]
  },
  {
    "title": "Requiem for a Dream",
    "description": "Sara Goldfarb (Ellen Burstyn) is a retired widow, living in a small apartment. She spends most of her time watching TV, especially a particular self-help show. She has delusions of rising above her current dull existence by being a guest on that show. Her son, Harry (Jared Leto) is a junkie but along with his friend Tyrone (Marlon Wayans) has visions of making it big by becoming a drug dealer. Harry's girlfriend Marion (Jennifer Connelly) could be fashion designer or artist but is swept along in Harry's drug-centric world. Meanwhile Sara has developed an addiction of her own. She desperately wants to lose weight and so goes on a crash course involving popping pills, pills which turn out to be very addictive and harmful to her mental state. Written by grantss",
    "rating": 8.4,
    "year": "2000",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Ellen Burstyn",
      "Jared Leto",
      "Jennifer Connelly"
    ]
  },
  {
    "title": "Le fabuleux destin d'Amélie Poulain",
    "description": "Amélie is a story about a girl named Amélie whose childhood was suppressed by her Father's mistaken concerns of a heart defect. With these concerns Amélie gets hardly any real life contact with other people. This leads Amélie to resort to her own fantastical world and dreams of love and beauty. She later on becomes a young woman and moves to the central part of Paris as a waitress. After finding a lost treasure belonging to the former occupant of her apartment, she decides to return it to him. After seeing his reaction and his new found perspective - she decides to devote her life to the people around her. Such as, her father who is obsessed with his garden-gnome, a failed writer, a hypochondriac, a man who stalks his ex girlfriends, the \"ghost\", a suppressed young soul, the love of her life and a man whose bones are as brittle as glass. But after consuming herself with these escapades - she finds out that she is disregarding her own life and damaging her quest for love. Amélie then ... Written by spragg_s",
    "rating": 8.4,
    "year": "2001",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "actors": [
      "Audrey Tautou",
      "Mathieu Kassovitz",
      "Rufus"
    ]
  },
  {
    "title": "A Clockwork Orange",
    "description": "Protagonist Alex DeLarge is an \"ultraviolent\" youth in futuristic Britain. As with all luck, his eventually runs out and he's arrested and convicted of murder and rape. While in prison, Alex learns of an experimental program in which convicts are programmed to detest violence. If he goes through the program, his sentence will be reduced and he will be back on the streets sooner than expected. But Alex's ordeals are far from over once he hits the mean streets of Britain that he had a hand in creating. Written by Nikki Carlyle",
    "rating": 8.3,
    "year": "1971",
    "genres": [
      "Crime",
      "Drama",
      "Sci-Fi"
    ],
    "actors": [
      "Malcolm McDowell",
      "Patrick Magee",
      "Michael Bates"
    ]
  },
  {
    "title": "Taxi Driver",
    "description": "Travis Bickle is an ex-Marine and Vietnam War veteran living in New York City. As he suffers from insomnia, he spends his time working as a taxi driver at night, watching porn movies at seedy cinemas during the day, or thinking about how the world, New York in particular, has deteriorated into a cesspool. He's a loner who has strong opinions about what is right and wrong with mankind. For him, the one bright spot in New York humanity is Betsy, a worker on the presidential nomination campaign of Senator Charles Palantine. He becomes obsessed with her. After an incident with her, he believes he has to do whatever he needs to make the world a better place in his opinion. One of his priorities is to be the savior for Iris, a twelve-year-old runaway and prostitute who he believes wants out of the profession and under the thumb of her pimp and lover Matthew. Written by Huggo",
    "rating": 8.3,
    "year": "1976",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Robert De Niro",
      "Jodie Foster",
      "Cybill Shepherd"
    ]
  },
  {
    "title": "Taare Zameen Par",
    "description": "Ishaan Awasthi is an eight-year-old whose world is filled with wonders that no one else seems to appreciate; colours, fish, dogs and kites are just not important in the world of adults, who are much more interested in things like homework, marks and neatness. And Ishaan just cannot seem to get anything right in class. When he gets into far more trouble than his parents can handle, he is packed off to a boarding school to 'be disciplined'. Things are no different at his new school, and Ishaan has to contend with the added trauma of separation from his family. One day a new art teacher bursts onto the scene, Ram Shankar Nikumbh, who infects the students with joy and optimism. He breaks all the rules of 'how things are done' by asking them to think, dream and imagine, and all the children respond with enthusiasm, all except Ishaan. Nikumbh soon realizes that Ishaan is very unhappy, and he sets out to discover why. With time, patience and care, he ultimately helps Ishaan find himself. Written by Anonymous",
    "rating": 8.5,
    "year": "2007",
    "genres": [
      "Drama",
      "Family",
      "Music"
    ],
    "actors": [
      "Darsheel Safary",
      "Aamir Khan",
      "Tanay Chheda"
    ]
  },
  {
    "title": "Lawrence of Arabia",
    "description": "Due to his knowledge of the native Bedouin tribes, British Lieutenant T.E. Lawrence is sent to Arabia to find Prince Faisal and serve as a liaison between the Arabs and the British in their fight against the Turks. With the aid of native Sherif Ali, Lawrence rebels against the orders of his superior officer and strikes out on a daring camel journey across the harsh desert to attack a well-guarded Turkish port. Written by Jwelch5742",
    "rating": 8.3,
    "year": "1962",
    "genres": [
      "Adventure",
      "Biography",
      "Drama"
    ],
    "actors": [
      "Peter O'Toole",
      "Alec Guinness",
      "Anthony Quinn"
    ]
  },
  {
    "title": "Double Indemnity",
    "description": "In 1938, Walter Neff, an experienced salesman of the Pacific All Risk Insurance Co., meets the seductive wife of one of his clients, Phyllis Dietrichson, and they have an affair. Phyllis proposes to kill her husband to receive the proceeds of an accident insurance policy and Walter devises a scheme to receive twice the amount based on a double indemnity clause. When Mr. Dietrichson is found dead on a train track, the police accept the determination of accidental death. However, the insurance analyst and Walter's best friend Barton Keyes does not buy the story and suspects that Phyllis has murdered her husband with the help of another man. Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "rating": 8.4,
    "year": "1944",
    "genres": [
      "Crime",
      "Drama",
      "Film-Noir"
    ],
    "actors": [
      "Fred MacMurray",
      "Barbara Stanwyck",
      "Edward G. Robinson"
    ]
  },
  {
    "title": "Eternal Sunshine of the Spotless Mind",
    "description": "A man, Joel Barish, heartbroken that his girlfriend Clementine underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realizes that he still loves her, and may be too late to correct his mistake. Written by anonymous",
    "rating": 8.3,
    "year": "2004",
    "genres": [
      "Drama",
      "Romance",
      "Sci-Fi"
    ],
    "actors": [
      "Jim Carrey",
      "Kate Winslet",
      "Tom Wilkinson"
    ]
  },
  {
    "title": "To Kill a Mockingbird",
    "description": "Small-town Alabama, 1932. Atticus Finch (played by Gregory Peck) is a lawyer and a widower. He has two young children, Jem and Scout. Atticus Finch is currently defending Tom Robinson, a black man accused of raping a white woman. Meanwhile, Jem and Scout are intrigued by their neighbours, the Radleys, and the mysterious, seldom-seen Boo Radley in particular. Written by grantss",
    "rating": 8.3,
    "year": "1962",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Gregory Peck",
      "John Megna",
      "Frank Overton"
    ]
  },
  {
    "title": "Amadeus",
    "description": "Antonio Salieri believes that Wolfgang Amadeus Mozart's music is divine and miraculous. He wishes he was himself as good a musician as Mozart so that he can praise the Lord through composing. He began his career as a devout man who believes his success and talent as a composer are God's rewards for his piety. He's also content as the respected, financially well-off, court composer of Austrian Emperor Joseph II. But he's shocked to learn that Mozart is such a vulgar creature, and can't understand why God favored Mozart to be his instrument. Salieri's envy has made him an enemy of God whose greatness was evident in Mozart. He is ready to take revenge against God and Mozart for his own musical mediocrity. Written by Khaled Salem",
    "rating": 8.3,
    "year": "1984",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "actors": [
      "F. Murray Abraham",
      "Tom Hulce",
      "Elizabeth Berridge"
    ]
  },
  {
    "title": "Toy Story 3",
    "description": "Woody, Buzz and the whole gang are back. As their owner Andy prepares to depart for college, his loyal toys find themselves in daycare where untamed tots with their sticky little fingers do not play nice. So, it's all for one and one for all as they join Barbie's counterpart Ken, a thespian hedgehog named Mr. Pricklepants and a pink, strawberry-scented teddy bear called Lots-o'-Huggin' Bear to plan their great escape. Written by Walt Disney Studios",
    "rating": 8.3,
    "year": "2010",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "actors": [
      "Tom Hanks",
      "Tim Allen",
      "Joan Cusack"
    ]
  },
  {
    "title": "Full Metal Jacket",
    "description": "A two-segment look at the effect of the military mindset and war itself on Vietnam era Marines. The first half follows a group of recruits in boot camp under the command of the punishing Gunnery Sergeant Hartman. The second half shows one of those recruits, Joker, covering the war as a correspondent for Stars and Stripes, focusing on the Tet offensive. Written by Scott Renshaw <as.idc@forsythe.stanford.edu>",
    "rating": 8.3,
    "year": "1987",
    "genres": [
      "Drama",
      "War"
    ],
    "actors": [
      "Matthew Modine",
      "R. Lee Ermey",
      "Vincent D'Onofrio"
    ]
  },
  {
    "title": "Dangal",
    "description": "Biopic of Mahavir Singh Phogat, who taught wrestling to his daughters Babita Kumari and Geeta Phogat. Geeta Phogat was India's first female wrestler to win at the 2010 Commonwealth Games, where she won the gold medal (55 kg) while her sister Babita Kumari won the silver (52 kg). Written by Dibyayan_Chakravorty",
    "rating": 8.9,
    "year": "2016",
    "genres": [
      "Action",
      "Biography",
      "Drama"
    ],
    "actors": [
      "Aamir Khan",
      "Sakshi Tanwar",
      "Fatima Sana Shaikh"
    ]
  },
  {
    "title": "The Sting",
    "description": "When a mutual friend is killed by a mob boss, two con men, one experienced and one young try to get even by pulling off the big con on the mob boss. The story unfolds with several twists and last minute alterations. Written by John Vogel <jlvogel@comcast.net>",
    "rating": 8.3,
    "year": "1973",
    "genres": [
      "Comedy",
      "Crime",
      "Drama"
    ],
    "actors": [
      "Paul Newman",
      "Robert Redford",
      "Robert Shaw"
    ]
  },
  {
    "title": "2001: A Space Odyssey",
    "description": "\"2001\" is a story of evolution. Sometime in the distant past, someone or something nudged evolution by placing a monolith on Earth (presumably elsewhere throughout the universe as well). Evolution then enabled humankind to reach the moon's surface, where yet another monolith is found, one that signals the monolith placers that humankind has evolved that far. Now a race begins between computers (HAL) and human (Bowman) to reach the monolith placers. The winner will achieve the next step in evolution, whatever that may be. Written by Larry Cousins",
    "rating": 8.3,
    "year": "1968",
    "genres": [
      "Adventure",
      "Sci-Fi"
    ],
    "actors": [
      "Keir Dullea",
      "Gary Lockwood",
      "William Sylvester"
    ]
  },
  {
    "title": "Babam ve Oglum",
    "description": "Sadik is one of the rebellious youth who has been politically active as a university student and became a left-wing journalist in the 70's, despite his father's expectations of him becoming an agricultural engineer and taking control of their family farm in an Aegean village. On the dawn of September 12, 1980, when a merciless military coup hits the country, they cannot find access to any hospital or a doctor and his wife dies while giving birth to their only child, Deniz. After a long-lasting period of torture, trials, and jail time, Sadik returns to his village with 7-8 years old Deniz, knowing that it will be hard to correct things with his father, Huseyin. Written by Ali Riza Bolukbasi",
    "rating": 8.6,
    "year": "2005",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Fikret Kuskan",
      "Çetin Tekindor",
      "Hümeyra"
    ]
  },
  {
    "title": "Singin' in the Rain",
    "description": "1927 Hollywood. Monumental Pictures' biggest stars, glamorous on-screen couple Lina Lamont and Don Lockwood, are also an off-screen couple if the trade papers and gossip columns are to be believed. Both perpetuate the public perception if only to please their adoring fans and bring people into the movie theaters. In reality, Don barely tolerates her, while Lina, despite thinking Don beneath her, simplemindedly believes what she sees on screen in order to bolster her own stardom and sense of self-importance. R.F. Simpson, Monumental's head, dismisses what he thinks is a flash in the pan: talking pictures. It isn't until Jazzsångaren (1927) becomes a bona fide hit which results in all the movie theaters installing sound equipment that R.F. knows Monumental, most specifically in the form of Don and Lina, have to jump on the talking picture bandwagon, despite no one at the studio knowing anything about the technology. Musician Cosmo Brown, Don's best friend, gets hired as ... Written by Huggo",
    "rating": 8.3,
    "year": "1952",
    "genres": [
      "Comedy",
      "Musical",
      "Romance"
    ],
    "actors": [
      "Gene Kelly",
      "Donald O'Connor",
      "Debbie Reynolds"
    ]
  },
  {
    "title": "Toy Story",
    "description": "A little boy named Andy loves to be in his room, playing with his toys, especially his doll named \"Woody\". But, what do the toys do when Andy is not with them, they come to life. Woody believes that he has life (as a toy) good. However, he must worry about Andy's family moving, and what Woody does not know is about Andy's birthday party. Woody does not realize that Andy's mother gave him an action figure known as Buzz Lightyear, who does not believe that he is a toy, and quickly becomes Andy's new favorite toy. Woody, who is now consumed with jealousy, tries to get rid of Buzz. Then, both Woody and Buzz are now lost. They must find a way to get back to Andy before he moves without them, but they will have to pass through a ruthless toy killer, Sid Phillips. Written by John Wiggins",
    "rating": 8.3,
    "year": "1995",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "actors": [
      "Tom Hanks",
      "Tim Allen",
      "Don Rickles"
    ]
  },
  {
    "title": "Ladri di biciclette",
    "description": "Ricci, an unemployed man in the depressed post-WWII economy of Italy, gets at last a good job - for which he needs a bike - hanging up posters. But soon his bicycle is stolen. He and his son walk the streets of Rome, looking for the bicycle. Ricci finally manages to locate the thief but with no proof, he has to abandon his cause. But he and his son know perfectly well that without a bike, Ricci won't be able to keep his job. Written by jolusoma",
    "rating": 8.3,
    "year": "1948",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Lamberto Maggiorani",
      "Enzo Staiola",
      "Lianella Carell"
    ]
  },
  {
    "title": "The Kid",
    "description": "The opening title reads: \"A comedy with a smile--and perhaps a tear\". As she leaves the charity hospital and passes a church wedding, Edna deposits her new baby with a pleading note in a limousine and goes off to commit suicide. The limo is stolen by thieves who dump the baby by a garbage can. Charlie the Tramp finds the baby and makes a home for him. Five years later Edna has become an opera star but does charity work for slum youngsters in hope of finding her boy. A doctor called by Edna discovers the note with the truth about the Kid and reports it to the authorities who come to take him away from Charlie. Before he arrives at the Orphan Asylum Charlie steals him back and takes him to a flophouse. The proprietor reads of a reward for the Kid and takes him to Edna. Charlie is later awakened by a kind policeman who reunites him with the Kid at Edna's mansion. Written by Ed Stephan <stephan@cc.wwu.edu>",
    "rating": 8.3,
    "year": "1921",
    "genres": [
      "Comedy",
      "Drama",
      "Family"
    ],
    "actors": [
      "Charles Chaplin",
      "Edna Purviance",
      "Jackie Coogan"
    ]
  },
  {
    "title": "Inglourious Basterds",
    "description": "In German-occupied France, young Jewish refugee Shosanna Dreyfus witnesses the slaughter of her family by Colonel Hans Landa. Narrowly escaping with her life, she plots her revenge several years later when German war hero Fredrick Zoller takes a rapid interest in her and arranges an illustrious movie premiere at the theater she now runs. With the promise of every major Nazi officer in attendance, the event catches the attention of the \"Basterds\", a group of Jewish-American guerrilla soldiers led by the ruthless Lt. Aldo Raine. As the relentless executioners advance and the conspiring young girl's plans are set in motion, their paths will cross for a fateful evening that will shake the very annals of history. Written by The Massie Twins",
    "rating": 8.3,
    "year": "2009",
    "genres": [
      "Adventure",
      "Drama",
      "War"
    ],
    "actors": [
      "Brad Pitt",
      "Diane Kruger",
      "Eli Roth"
    ]
  },
  {
    "title": "Snatch",
    "description": "Turkish and his close friend/accomplice Tommy get pulled into the world of match fixing by the notorious Brick Top. Things get complicated when the boxer they had lined up gets badly beaten by Pitt, a 'pikey' ( slang for an Irish Gypsy)- who comes into the equation after Turkish, an unlicensed boxing promoter wants to buy a caravan off the Irish Gypsies. They then try to convince Pitt not only to fight for them, but to lose for them too. Whilst all this is going on, a huge diamond heist takes place, and a fistful of motley characters enter the story, including 'Cousin Avi', 'Boris The Blade', 'Franky Four Fingers' and 'Bullet Tooth Tony'. Things go from bad to worse as it all becomes about the money, the guns, and the damned dog! Written by Filmtwob <webmaster@filmfreak.co.za>",
    "rating": 8.3,
    "year": "2000",
    "genres": [
      "Comedy",
      "Crime"
    ],
    "actors": [
      "Jason Statham",
      "Brad Pitt",
      "Benicio Del Toro"
    ]
  },
  {
    "title": "Monty Python and the Holy Grail",
    "description": "History is turned on its comic head when, in 10th century England, King Arthur travels the countryside to find knights who will join him at the Round Table in Camelot. Gathering up the men is a tale in itself but after a bit of a party at Camelot, many decide to leave only to be stopped by God who sends them on a quest: to find the Holy Grail. After a series of individual adventures, the knights are reunited but must face a wizard named Tim, killer rabbits and lessons in the use of holy hand grenades. Their quest comes to an end however when the police intervene - just what you would expect in a Monty Python movie. Written by garykmcd",
    "rating": 8.3,
    "year": "1975",
    "genres": [
      "Adventure",
      "Comedy",
      "Fantasy"
    ],
    "actors": [
      "Graham Chapman",
      "John Cleese",
      "Eric Idle"
    ]
  },
  {
    "title": "3 Idiots",
    "description": "Farhan Qureshi and Raju Rastogi want to re-unite with their fellow collegian, Rancho, after faking a stroke aboard an Air India plane, and excusing himself from his wife - trouser less - respectively. Enroute, they encounter another student, Chatur Ramalingam, now a successful businessman, who reminds them of a bet they had undertaken 10 years ago. The trio, while recollecting hilarious antics, including their run-ins with the Dean of Delhi's Imperial College of Engineering, Viru Sahastrabudhe, race to locate Rancho, at his last known address - little knowing the secret that was kept from them all this time. Written by rAjOo (gunwanti@hotmail.com)",
    "rating": 8.4,
    "year": "2009",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "actors": [
      "Aamir Khan",
      "Madhavan",
      "Mona Singh"
    ]
  },
  {
    "title": "L.A. Confidential",
    "description": "1950's Los Angeles is the seedy backdrop for this intricate noir-ish tale of police corruption and Hollywood sleaze. Three very different cops are all after the truth, each in their own style: Ed Exley, the golden boy of the police force, willing to do almost anything to get ahead, except sell out; Bud White, ready to break the rules to seek justice, but barely able to keep his raging violence under control; and Jack Vincennes, always looking for celebrity and a quick buck until his conscience drives him to join Exley and White down the one-way path to find the truth behind the dark world of L.A. crime. Written by Greg Bole <bole@life.bio.sunysb.edu>",
    "rating": 8.3,
    "year": "1997",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Kevin Spacey",
      "Russell Crowe",
      "Guy Pearce"
    ]
  },
  {
    "title": "Per qualche dollaro in più",
    "description": "Monco is a bounty killer chasing El Indio and his gang. During his hunting, he meets Col. Douglas Mortimer, another bounty killer, and they decide to make a partnership, chase the bad guys together and split the reward. During their enterprise, there will be lots of bullets and funny situations. In the end, one of the bounty hunters shows the real intention of his hunting. Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "rating": 8.3,
    "year": "1965",
    "genres": [
      "Western"
    ],
    "actors": [
      "Clint Eastwood",
      "Lee Van Cleef",
      "Gian Maria Volontè"
    ]
  },
  {
    "title": "Scarface",
    "description": "Tony Montana manages to leave Cuba during the Mariel exodus of 1980. He finds himself in a Florida refugee camp but his friend Manny has a way out for them: undertake a contract killing and arrangements will be made to get a green card. He's soon working for drug dealer Frank Lopez and shows his mettle when a deal with Colombian drug dealers goes bad. He also brings a new level of violence to Miami. Tony is protective of his younger sister but his mother knows what he does for a living and disowns him. Tony is impatient and wants it all however, including Frank's empire and his mistress Elvira Hancock. Once at the top however, Tony's outrageous actions make him a target and everything comes crumbling down. Written by garykmcd",
    "rating": 8.3,
    "year": "1983",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Al Pacino",
      "Michelle Pfeiffer",
      "Steven Bauer"
    ]
  },
  {
    "title": "Jagten",
    "description": "Lucas is a Kindergarten teacher who takes great care of his students. Unfortunately for him, young Klara has a run-away imagination and concocts a lie about her teacher. Before Lucas is even able to understand the consequences, he has become the outcast of the town. The hunt is on to prove his innocence before it's taken from him for good. Written by napierslogs",
    "rating": 8.3,
    "year": "2012",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Mads Mikkelsen",
      "Thomas Bo Larsen",
      "Annika Wedderkopp"
    ]
  },
  {
    "title": "Rashômon",
    "description": "A priest, a woodcutter and another man are taking refuge from a rainstorm in the shell of a former gatehouse called Rashômon. The priest and the woodcutter are recounting the story of a murdered samurai whose body the woodcutter discovered three days earlier in a forest grove. Both were summoned to testify at the murder trial, the priest who ran into the samurai and his wife traveling through the forest just before the murder occurred. Three other people who testified at the trial are supposedly the only direct witnesses: a notorious bandit named Tajômaru, who allegedly murdered the samurai and raped his wife; the white veil cloaked wife of the samurai; and the samurai himself who testifies through the use of a medium. The three tell a similarly structured story - that Tajômaru kidnapped and bound the samurai so that he could rape the wife - but which ultimately contradict each other, the motivations and the actual killing being what differ. The woodcutter reveals at Rashômon that he ... Written by Huggo",
    "rating": 8.3,
    "year": "1950",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Toshirô Mifune",
      "Machiko Kyô",
      "Masayuki Mori"
    ]
  },
  {
    "title": "The Apartment",
    "description": "As of November 1, 1959, mild mannered C.C. Baxter has been working at Consolidated Life, an insurance company, for close to four years, and is one of close to thirty-two thousand employees located in their Manhattan head office. To distinguish himself from all the other lowly cogs in the company in the hopes of moving up the corporate ladder, he often works late, but only because he can't get into his apartment, located off of Central Park West, since he has provided it to a handful of company executives - Mssrs. Dobisch, Kirkeby, Vanderhoff and Eichelberger - on a rotating basis for their extramarital liaisons in return for a good word to the personnel director, Jeff D. Sheldrake. When Baxter is called into Sheldrake's office for the first time, he learns that it isn't just to be promoted as he expects, but also to add married Sheldrake to the list to who he will lend his apartment. What Baxter is unaware of is that Sheldrake's mistress is Fran Kubelik, an elevator girl in the ... Written by Huggo",
    "rating": 8.3,
    "year": "1960",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "actors": [
      "Jack Lemmon",
      "Shirley MacLaine",
      "Fred MacMurray"
    ]
  },
  {
    "title": "Good Will Hunting",
    "description": "A touching tale of a wayward young man who struggles to find his identity, living in a world where he can solve any problem, except the one brewing deep within himself, until one day he meets his soul mate who opens his mind and his heart. Written by Dima & Danielle",
    "rating": 8.3,
    "year": "1997",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Robin Williams",
      "Matt Damon",
      "Ben Affleck"
    ]
  },
  {
    "title": "Jodaeiye Nader az Simin",
    "description": "Nader (Peyman Moaadi) and Simin (Leila Hatami) argue about living abroad. Simin prefers to live abroad to provide better opportunities for their only daughter, Termeh. However, Nader refuses to go because he thinks he must stay in Iran and take care of his father (Ali-Asghar Shahbazi), who suffers from Alzheimers. However, Simin is determined to get a divorce and leave the country with her daughter. Written by Amin Davoodi",
    "rating": 8.4,
    "year": "2011",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Peyman Moaadi",
      "Leila Hatami",
      "Sareh Bayat"
    ]
  },
  {
    "title": "Indiana Jones and the Last Crusade",
    "description": "An art collector appeals to Jones to embark on a search for the Holy Grail. He learns that another archaeologist has disappeared while searching for the precious goblet, and the missing man is his own father, Dr. Henry Jones. The artifact is much harder to find than they expected, and its powers are too much for those impure in heart. Written by Jwelch5742",
    "rating": 8.3,
    "year": "1989",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "actors": [
      "Harrison Ford",
      "Sean Connery",
      "Alison Doody"
    ]
  },
  {
    "title": "Metropolis",
    "description": "Sometime in the future, the city of Metropolis is home to a Utopian society where its wealthy residents live a carefree life. One of those is Freder Fredersen. One day, he spots a beautiful woman with a group of children, she and the children who quickly disappear. Trying to follow her, he, oblivious to such, is horrified to find an underground world of workers, apparently who run the machinery which keeps the above ground Utopian world functioning. One of the few people above ground who knows about the world below is Freder's father, Joh Fredersen, who is the founder and master of Metropolis. Freder learns that the woman is Maria, who espouses the need to join the \"hands\" - the workers - to the \"head\" - those in power above - by a mediator or the \"heart\". Freder wants to help the plight of the workers in the want for a better life. But when Joh learns of what Maria is espousing and that Freder is joining their cause, Joh, with the assistance of an old colleague and now nemesis named ... Written by Huggo",
    "rating": 8.3,
    "year": "1927",
    "genres": [
      "Drama",
      "Sci-Fi"
    ],
    "actors": [
      "Brigitte Helm",
      "Alfred Abel",
      "Gustav Fröhlich"
    ]
  },
  {
    "title": "All About Eve",
    "description": "Eve (Anne Baxter) is waiting backstage to meet her \"idol\" aging Broadway Star, Margo Channing (Bette Davis). It all seems innocent enough as Eve explains that she has seen Margo in EVERY performance of the current play she is in. Only Playright critic DeWitt (George Sanders) sees through Eve's evil plan, which is to take her parts and fiancé, Bill Simpson (Gary Merrill) When the fiancé shows no interest, she tries for playwright Hugh Marlowe (Lloyd Richards) but DeWitt stops her. After she accepts her award, she decides to skip the after-party and goes to her room, where we find a young woman named Phoebe, who snuck into her room and fell asleep. This is where the \"Circle of Life\" now comes to fruition as Eve is going to get played the way she did Margo.",
    "rating": 8.3,
    "year": "1950",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Bette Davis",
      "Anne Baxter",
      "George Sanders"
    ]
  },
  {
    "title": "Yôjinbô",
    "description": "Sanjuro, a wandering samurai enters a rural town in nineteenth century Japan. After learning from the innkeeper that the town is divided between two gangsters, he plays one side off against the other. His efforts are complicated by the arrival of the wily Unosuke, the son of one of the gangsters, who owns a revolver. Unosuke has Sanjuro beaten after he reunites an abducted woman with her husband and son, then massacres his father's opponents. During the slaughter, the samurai escapes with the help of the innkeeper; but while recuperating at a nearby temple, he learns of innkeeper's abduction by Unosuke, and returns to the town to confront him. Written by Bernard Keane <BKeane2@email.dot.gov.au>",
    "rating": 8.3,
    "year": "1961",
    "genres": [
      "Action",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Toshirô Mifune",
      "Eijirô Tôno",
      "Tatsuya Nakadai"
    ]
  },
  {
    "title": "Batman Begins",
    "description": "When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as 'Batman'. But it doesn't stay quiet for long. Written by konstantinwe",
    "rating": 8.3,
    "year": "2005",
    "genres": [
      "Action",
      "Adventure"
    ],
    "actors": [
      "Christian Bale",
      "Michael Caine",
      "Ken Watanabe"
    ]
  },
  {
    "title": "Up",
    "description": "Carl Fredricksen as a boy wanted to explore South America and find the forbidden Paradise Falls. About 64 years later he gets to begin his journey along with a Boy Scout named Russel with help from 500 balloons. On their journey they discover many new friends including a talking dog and Carl and Russel figure out that someone evil plans. Carl soon realizes that this evildoer is his childhood idol. Will they be able to defeat him and will they find Paradise Falls?",
    "rating": 8.3,
    "year": "2009",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "actors": [
      "Edward Asner",
      "Jordan Nagai",
      "John Ratzenberger"
    ]
  },
  {
    "title": "Some Like It Hot",
    "description": "When two Chicago musicians, Joe and Jerry, witness the the St. Valentine's Day massacre, they want to get out of town and get away from the gangster responsible, Spats Colombo. They're desperate to get a gig out of town but the only job they know of is in an all-girl band heading to Florida. They show up at the train station as Josephine and Daphne, the replacement saxophone and bass players. They certainly enjoy being around the girls, especially Sugar Kane Kowalczyk who sings and plays the ukulele. Joe in particular sets out to woo her while Jerry/Daphne is wooed by a millionaire, Osgood Fielding III. Mayhem ensues as the two men try to keep their true identities hidden and Spats Colombo and his crew show up for a meeting with several other crime lords. Written by garykmcd",
    "rating": 8.3,
    "year": "1959",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "actors": [
      "Marilyn Monroe",
      "Tony Curtis",
      "Jack Lemmon"
    ]
  },
  {
    "title": "The Treasure of the Sierra Madre",
    "description": "Fred C. Dobbs and Bob Curtin, both down on their luck in Tampico, Mexico in 1925, meet up with a grizzled prospector named Howard and decide to join with him in search of gold in the wilds of central Mexico. Through enormous difficulties, they eventually succeed in finding gold, but bandits, the elements, and most especially greed threaten to turn their success into disaster. Written by Jim Beaver <jumblejim@prodigy.net>",
    "rating": 8.3,
    "year": "1948",
    "genres": [
      "Adventure",
      "Drama",
      "Western"
    ],
    "actors": [
      "Humphrey Bogart",
      "Walter Huston",
      "Tim Holt"
    ]
  },
  {
    "title": "Unforgiven",
    "description": "The town of Big Whisky is full of normal people trying to lead quiet lives. Cowboys try to make a living. Sheriff 'Little Bill' tries to build a house and keep a heavy-handed order. The town whores just try to get by.Then a couple of cowboys cut up a whore. Dissatisfied with Bill's justice, the prostitutes put a bounty on the cowboys. The bounty attracts a young gun billing himself as 'The Schofield Kid', and aging killer William Munny. Munny reformed for his young wife, and has been raising crops and two children in peace. But his wife is gone. Farm life is hard. And Munny is no good at it. So he calls his old partner Ned, saddles his ornery nag, and rides off to kill one more time, blurring the lines between heroism and villainy, man and myth. Written by Charlie Ness",
    "rating": 8.3,
    "year": "1992",
    "genres": [
      "Drama",
      "Western"
    ],
    "actors": [
      "Clint Eastwood",
      "Gene Hackman",
      "Morgan Freeman"
    ]
  },
  {
    "title": "Der Untergang",
    "description": "In April of 1945, Germany stands at the brink of defeat with the Soviet Armies closing in from the west and south. In Berlin, capital of the Third Reich, Adolf Hitler proclaims that Germany will still achieve victory and orders his Generals and advisers to fight to the last man. \"Downfall\" explores these final days of the Reich, where senior German leaders (such as Himmler and Goring) began defecting from their beloved Fuhrer, in an effort to save their own lives, while still others (Joseph Goebbels) pledge to die with Hitler. Hitler, himself, degenerates into a paranoid shell of a man, full of optimism one moment and suicidal depression the next. When the end finally does comes, and Hitler lies dead by his own hand, what is left of his military must find a way to end the killing that is the Battle of Berlin, and lay down their arms in surrender. Written by Anthony Hughes {husnock31@hotmail.com}",
    "rating": 8.3,
    "year": "2004",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "actors": [
      "Bruno Ganz",
      "Alexandra Maria Lara",
      "Ulrich Matthes"
    ]
  },
  {
    "title": "Raging Bull",
    "description": "When Jake LaMotta steps into a boxing ring and obliterates his opponent, he's a prizefighter. But when he treats his family and friends the same way, he's a ticking time bomb, ready to go off at any moment. Though LaMotta wants his family's love, something always seems to come between them. Perhaps it's his violent bouts of paranoia and jealousy. This kind of rage helped make him a champ, but in real life, he winds up in the ring alone. Written by alfiehitchie",
    "rating": 8.2,
    "year": "1980",
    "genres": [
      "Biography",
      "Drama",
      "Sport"
    ],
    "actors": [
      "Robert De Niro",
      "Cathy Moriarty",
      "Joe Pesci"
    ]
  },
  {
    "title": "The Third Man",
    "description": "An out of work pulp fiction novelist, Holly Martins, arrives in a post war Vienna divided into sectors by the victorious allies, and where a shortage of supplies has lead to a flourishing black market. He arrives at the invitation of an ex-school friend, Harry Lime, who has offered him a job, only to discover that Lime has recently died in a peculiar traffic accident. From talking to Lime's friends and associates Martins soon notices that some of the stories are inconsistent, and determines to discover what really happened to Harry Lime. Written by Mark Thompson <mrt@oasis.icl.co.uk>",
    "rating": 8.3,
    "year": "1949",
    "genres": [
      "Film-Noir",
      "Mystery",
      "Thriller"
    ],
    "actors": [
      "Orson Welles",
      "Joseph Cotten",
      "Alida Valli"
    ]
  },
  {
    "title": "Die Hard",
    "description": "NYPD cop John McClane goes on a Christmas vacation to visit his wife Holly in Los Angeles where she works for the Nakatomi Corporation. While they are at the Nakatomi headquarters for a Christmas party, a group of bank robbers led by Hans Gruber take control of the building and hold everyone hostage, with the exception of John, while they plan to perform a lucrative heist. Unable to escape and with no immediate police response, John is forced to take matters into his own hands. Written by Sam",
    "rating": 8.2,
    "year": "1988",
    "genres": [
      "Action",
      "Thriller"
    ],
    "actors": [
      "Bruce Willis",
      "Alan Rickman",
      "Bonnie Bedelia"
    ]
  },
  {
    "title": "Bacheha-Ye aseman",
    "description": "Zahra's shoes are gone; her older brother Ali lost them. They are poor, there are no shoes for Zahra until they come up with an idea: they will share one pair of shoes, Ali's. School awaits. Will the plan succeed? Written by Eileen Berdon <eberdon@aol.com>",
    "rating": 8.4,
    "year": "1997",
    "genres": [
      "Drama",
      "Family"
    ],
    "actors": [
      "Mohammad Amir Naji",
      "Amir Farrokh Hashemian",
      "Bahare Seddiqi"
    ]
  },
  {
    "title": "Heat",
    "description": "Hunters and their prey--Neil and his professional criminal crew hunt to score big money targets (banks, vaults, armored cars) and are, in turn, hunted by Lt. Vincent Hanna and his team of cops in the Robbery/Homicide police division. A botched job puts Hanna onto their trail while they regroup and try to put together one last big 'retirement' score. Neil and Vincent are similar in many ways, including their troubled personal lives. At a crucial moment in his life, Neil disobeys the dictum taught to him long ago by his criminal mentor--'Never have anything in your life that you can't walk out on in thirty seconds flat, if you spot the heat coming around the corner'--as he falls in love. Thus the stage is set for the suspenseful ending.... Written by Tad Dibbern <DIBBERN_D@a1.mscf.upenn.edu>",
    "rating": 8.2,
    "year": "1995",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "actors": [
      "Al Pacino",
      "Robert De Niro",
      "Val Kilmer"
    ]
  },
  {
    "title": "The Great Escape",
    "description": "Based on a true story, a group of allied escape artist-type prisoners-of-war (POWs) are all put in an 'escape proof' camp. Their leader decides to try to take out several hundred all at once. The first half of the film is played for comedy as the prisoners mostly outwit their jailers to dig the escape tunnel. The second half is high adventure as they use boats and trains and planes to get out of occupied Europe. Written by John Vogel <jlvogel@comcast.net>",
    "rating": 8.2,
    "year": "1963",
    "genres": [
      "Adventure",
      "Drama",
      "History"
    ],
    "actors": [
      "Steve McQueen",
      "James Garner",
      "Richard Attenborough"
    ]
  },
  {
    "title": "Chinatown",
    "description": "JJ 'Jake' Gittes is a private detective who seems to specialize in matrimonial cases. He is hired by Evelyn Mulwray when she suspects her husband Hollis, builder of the city's water supply system, of having an affair. Gittes does what he does best and photographs him with a young girl but in the ensuing scandal, it seems he was hired by an impersonator and not the real Mrs. Mulwray. When Mr. Mulwray is found dead, Jake is plunged into a complex web of deceit involving murder, incest and municipal corruption all related to the city's water supply. Written by garykmcd",
    "rating": 8.2,
    "year": "1974",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "actors": [
      "Jack Nicholson",
      "Faye Dunaway",
      "John Huston"
    ]
  },
  {
    "title": "El laberinto del fauno",
    "description": "In 1944 falangist Spain, a girl, fascinated with fairy-tales, is sent along with her pregnant mother to live with her new stepfather, a ruthless captain of the Spanish army. During the night, she meets a fairy who takes her to an old faun in the center of the labyrinth. He tells her she's a princess, but must prove her royalty by surviving three gruesome tasks. If she fails, she will never prove herself to be the the true princess and will never see her real father, the king, again. Written by Tim",
    "rating": 8.2,
    "year": "2006",
    "genres": [
      "Drama",
      "Fantasy",
      "War"
    ],
    "actors": [
      "Ivana Baquero",
      "Ariadna Gil",
      "Sergi López"
    ]
  },
  {
    "title": "Inside Out",
    "description": "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school. Written by Pixar",
    "rating": 8.2,
    "year": "2015",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "actors": [
      "Amy Poehler",
      "Bill Hader",
      "Lewis Black"
    ]
  },
  {
    "title": "Ikiru",
    "description": "Kanji Watanabe is a civil servant. He has worked in the same department for 30 years. His life is pretty boring and monotonous, though he once used to have passion and drive. Then one day he discovers that he has stomach cancer and has less than a year to live. After the initial depression he sets about living for the first time in over 20 years. Then he realises that his limited time left is not just for living life to the full but to leave something meaningful behind... Written by grantss",
    "rating": 8.3,
    "year": "1952",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Takashi Shimura",
      "Nobuo Kaneko",
      "Shin'ichi Himori"
    ]
  },
  {
    "title": "Tonari no Totoro",
    "description": "Two young girls, Satsuki and her younger sister Mei, move into a house in the country with their father to be closer to their hospitalized mother. Satsuki and Mei discover that the nearby forest is inhabited by magical creatures called Totoros (pronounced toe-toe-ro). They soon befriend these Totoros, and have several magical adventures. Written by Christopher E. Meadows <cmeadows@nyx.cs.du.edu>",
    "rating": 8.2,
    "year": "1988",
    "genres": [
      "Animation",
      "Family",
      "Fantasy"
    ],
    "actors": [
      "Hitoshi Takagi",
      "Noriko Hidaka",
      "Chika Sakamoto"
    ]
  },
  {
    "title": "On the Waterfront",
    "description": "Terry Malloy dreams about being a prize fighter, while tending his pigeons and running errands at the docks for Johnny Friendly, the corrupt boss of the dockers union. Terry witnesses a murder by two of Johnny's thugs, and later meets the dead man's sister and feels responsible for his death. She introduces him to Father Barry, who tries to force him to provide information for the courts that will smash the dock racketeers. Written by Colin Tinto <cst@imdb.com>",
    "rating": 8.2,
    "year": "1954",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Marlon Brando",
      "Karl Malden",
      "Lee J. Cobb"
    ]
  },
  {
    "title": "Ran",
    "description": "Japanese warlord Hidetori Ichimonji decides the time has come to retire and divide his fiefdom among his three sons. His eldest and middle sons - Taro and Jiro - agree with his decision and promise to support him for his remaining days. The youngest son Saburo disagrees with all of them arguing that there is little likelihood the three brothers will remain united. Insulted by his son's brashness, the warlord banishes Saburo. As the warlord begins his retirement, he quickly realizes that his two eldest sons selfish and have no intention of keeping their promises. It leads to war and only banished Saburo can possibly save him. Written by garykmcd",
    "rating": 8.2,
    "year": "1985",
    "genres": [
      "Action",
      "Drama"
    ],
    "actors": [
      "Tatsuya Nakadai",
      "Akira Terao",
      "Jinpachi Nezu"
    ]
  },
  {
    "title": "Room",
    "description": "ROOM tells the extraordinary story of Jack, a spirited 5-year-old who is looked after by his loving and devoted mother. Like any good mother, Ma dedicates herself to keeping Jack happy and safe, nurturing him with warmth and love and doing typical things like playing games and telling stories. Their life, however, is anything but typical--they are trapped--confined to a 10-by-10-foot space that Ma has euphemistically named Room. Ma has created a whole universe for Jack within Room, and she will stop at nothing to ensure that, even in this treacherous environment, Jack is able to live a complete and fulfilling life. But as Jack's curiosity about their situation grows, and Ma's resilience reaches its breaking point, they enact a risky plan to escape, ultimately bringing them face-to-face with what may turn out to be the scariest thing yet: the real world. Written by A24",
    "rating": 8.2,
    "year": "2015",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Brie Larson",
      "Jacob Tremblay",
      "Sean Bridgers"
    ]
  },
  {
    "title": "The Gold Rush",
    "description": "A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm. Written by John J. Magee <magee@helix.mgh.harvard.edu>",
    "rating": 8.2,
    "year": "1925",
    "genres": [
      "Adventure",
      "Comedy",
      "Drama"
    ],
    "actors": [
      "Charles Chaplin",
      "Mack Swain",
      "Tom Murray"
    ]
  },
  {
    "title": "Hacksaw Ridge",
    "description": "The true story of Desmond Doss, the conscientious objector who, at the Battle of Okinawa, won the Medal of Honor for his incredible bravery and regard for his fellow soldiers. We see his upbringing and how this shaped his views, especially his religious view and anti-killing stance. We see Doss's trials and tribulations after enlisting in the US Army and trying to become a medic. Finally, we see the hell on Earth that was Hacksaw Ridge. Written by grantss",
    "rating": 8.3,
    "year": "2016",
    "genres": [
      "Drama",
      "History",
      "War"
    ],
    "actors": [
      "Andrew Garfield",
      "Sam Worthington",
      "Luke Bracey"
    ]
  },
  {
    "title": "El secreto de sus ojos",
    "description": "In 1999, retired Argentinian federal justice agent Benjamín Espósito is writing a novel, using an old closed case as the source material. That case is the brutal rape and murder of Liliana Coloto. In addition to seeing the extreme grief of the victim's husband Ricardo Morales, Benjamín, his assistant Pablo Sandoval, and newly hired department chief Irene Menéndez-Hastings were personally affected by the case as Benjamín and Pablo tracked the killer, hence the reason why the unsatisfactory ending to the case has always bothered him. Despite the department already having two other suspects, Benjamín and Pablo ultimately were certain that a man named Isidoro Gómez is the real killer. Although he is aware that historical accuracy is not paramount for the novel, the process of revisiting the case is more an issue of closure for him. He tries to speak to the key players in the case, most specifically Irene, who still works in the justice department and who he has always been attracted to ... Written by Huggo",
    "rating": 8.2,
    "year": "2009",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "actors": [
      "Ricardo Darín",
      "Soledad Villamil",
      "Pablo Rago"
    ]
  },
  {
    "title": "The Bridge on the River Kwai",
    "description": "The film deals with the situation of British prisoners of war during World War II who are ordered to build a bridge to accommodate the Burma-Siam railway. Their instinct is to sabotage the bridge but, under the leadership of Colonel Nicholson, they are persuaded that the bridge should be constructed as a symbol of British morale, spirit and dignity in adverse circumstances. At first, the prisoners admire Nicholson when he bravely endures torture rather than compromise his principles for the benefit of the Japanese commandant Saito. He is an honorable but arrogant man, who is slowly revealed to be a deluded obsessive. He convinces himself that the bridge is a monument to British character, but actually is a monument to himself, and his insistence on its construction becomes a subtle form of collaboration with the enemy. Unknown to him, the Allies have sent a mission into the jungle, led by Warden and an American, Shears, to blow up the bridge. Written by alfiehitchie",
    "rating": 8.2,
    "year": "1957",
    "genres": [
      "Adventure",
      "Drama",
      "War"
    ],
    "actors": [
      "William Holden",
      "Alec Guinness",
      "Jack Hawkins"
    ]
  },
  {
    "title": "Blade Runner",
    "description": "In the futuristic year of 2019, Los Angeles has become a dark and depressing metropolis, filled with urban decay. Rick Deckard, an ex-cop, is a \"Blade Runner\". Blade runners are people assigned to assassinate \"replicants\". The replicants are androids that look like real human beings. When four replicants commit a bloody mutiny on the Off World colony, Deckard is called out of retirement to track down the androids. As he tracks the replicants, eliminating them one by one, he soon comes across another replicant, Rachel, who evokes human emotion, despite the fact that she's a replicant herself. As Deckard closes in on the leader of the replicant group, his true hatred toward artificial intelligence makes him question his own identity in this future world, including what's human and what's not human. Written by blazesnakes9",
    "rating": 8.2,
    "year": "1982",
    "genres": [
      "Sci-Fi",
      "Thriller"
    ],
    "actors": [
      "Harrison Ford",
      "Rutger Hauer",
      "Sean Young"
    ]
  },
  {
    "title": "Mr. Smith Goes to Washington",
    "description": "Naive and idealistic Jefferson Smith, leader of the Boy Rangers, is appointed on a lark by the spineless governor of his state. He is reunited with the state's senior senator--presidential hopeful and childhood hero, Senator Joseph Paine. In Washington, however, Smith discovers many of the shortcomings of the political process as his earnest goal of a national boys' camp leads to a conflict with the state political boss, Jim Taylor. Taylor first tries to corrupt Smith and then later attempts to destroy Smith through a scandal. Written by James Yu <jamestyu@ccwf.cc.utexas.edu>",
    "rating": 8.2,
    "year": "1939",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "actors": [
      "James Stewart",
      "Jean Arthur",
      "Claude Rains"
    ]
  },
  {
    "title": "Hauru no ugoku shiro",
    "description": "A love story between an 18-year-old girl named Sophie, cursed by a witch into an old woman's body, and a magician named Howl. Under the curse, Sophie sets out to seek her fortune, which takes her to Howl's strange moving castle. In the castle, Sophie meets Howl's fire demon, named Karishifâ. Seeing that she is under a curse, the demon makes a deal with Sophie--if she breaks the contract he is under with Howl, then Karushifâ will lift the curse that Sophie is under, and she will return to her 18-year-old shape. Written by Sophie Ball",
    "rating": 8.2,
    "year": "2004",
    "genres": [
      "Animation",
      "Adventure",
      "Family"
    ],
    "actors": [
      "Chieko Baishô",
      "Takuya Kimura",
      "Tatsuya Gashûin"
    ]
  },
  {
    "title": "Det sjunde inseglet",
    "description": "A Knight and his squire are home from the crusades. Black Death is sweeping their country. As they approach home, Death appears to the knight and tells him it is his time. The knight challenges Death to a chess game for his life. The Knight and Death play as the cultural turmoil envelopes the people around them as they try, in different ways, to deal with the upheaval the plague has caused. Written by John Vogel <jlvogel@comcast.net>",
    "rating": 8.2,
    "year": "1957",
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "actors": [
      "Max von Sydow",
      "Gunnar Björnstrand",
      "Bengt Ekerot"
    ]
  },
  {
    "title": "Lock, Stock and Two Smoking Barrels",
    "description": "Four Jack-the-lads find themselves heavily - seriously heavily - in debt to an East End hard man and his enforcers after a crooked card game. Overhearing their neighbours in the next flat plotting to hold up a group of out-of-their-depth drug growers, our heros decide to stitch up the robbers in turn. In a way the confusion really starts when a pair of antique double-barrelled shotguns go missing in a completely different scam. Written by Anonymous",
    "rating": 8.2,
    "year": "1998",
    "genres": [
      "Comedy",
      "Crime"
    ],
    "actors": [
      "Jason Flemyng",
      "Dexter Fletcher",
      "Nick Moran"
    ]
  },
  {
    "title": "Judgment at Nuremberg",
    "description": "It has been three years since the most important Nazi leaders had already been tried. This trial is about 4 judges who used their offices to conduct Nazi sterilization and cleansing policies. Retired American judge, Dan Haywood has a daunting task ahead of him. The Cold War is heating up and no one wants any more trials as Germany, and Allied governments, want to forget the past. But is that the right thing to do is the question that the tribunal must decide. Written by Tony Fontana <tony.fontana@spacebbs.com>",
    "rating": 8.3,
    "year": "1961",
    "genres": [
      "Drama",
      "War"
    ],
    "actors": [
      "Spencer Tracy",
      "Burt Lancaster",
      "Richard Widmark"
    ]
  },
  {
    "title": "Casino",
    "description": "This Martin Scorsese film depicts the Janus-like quality of Las Vegas--it has a glittering, glamorous face, as well as a brutal, cruel one. Ace Rothstein and Nicky Santoro, mobsters who move to Las Vegas to make their mark, live and work in this paradoxical world. Seen through their eyes, each as a foil to the other, the details of mob involvement in the casinos of the 1970's and '80's are revealed. Ace is the smooth operator of the Tangiers casino, while Nicky is his boyhood friend and tough strongman, robbing and shaking down the locals. However, they each have a tragic flaw--Ace falls in love with a hustler, Ginger, and Nicky falls into an ever-deepening spiral of drugs and violence. Written by Tad Dibbern <DIBBERN_D@a1.mscf.upenn.edu>",
    "rating": 8.2,
    "year": "1995",
    "genres": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "actors": [
      "Robert De Niro",
      "Sharon Stone",
      "Joe Pesci"
    ]
  },
  {
    "title": "Incendies",
    "description": "A mother's last wishes send twins Jeanne and Simon on a journey to the Middle East in search of their tangled roots. Adapted from Wajdi Mouawad's acclaimed play, Incendies tells the powerful and moving tale of two young adults' voyage to the core of deep-rooted hatred, never-ending wars and enduring love. Written by Mylène Chollet",
    "rating": 8.2,
    "year": "2010",
    "genres": [
      "Drama",
      "Mystery",
      "War"
    ],
    "actors": [
      "Lubna Azabal",
      "Mélissa Désormeaux-Poulin",
      "Maxim Gaudette"
    ]
  },
  {
    "title": "A Beautiful Mind",
    "description": "From the heights of notoriety to the depths of depravity, John Forbes Nash, Jr. experienced it all. A mathematical genius, he made an astonishing discovery early in his career and stood on the brink of international acclaim. But the handsome and arrogant Nash soon found himself on a painful and harrowing journey of self-discovery. After many years of struggle, he eventually triumphed over his tragedy, and finally - late in life - received the Nobel Prize. Written by Universal Pictures and DreamWorks Pictures",
    "rating": 8.2,
    "year": "2001",
    "genres": [
      "Biography",
      "Drama"
    ],
    "actors": [
      "Russell Crowe",
      "Ed Harris",
      "Jennifer Connelly"
    ]
  },
  {
    "title": "Eskiya",
    "description": "The epic adventures of the legendary Baran the Bandit following his release from prison. After serving 35 years, it is no surprise that the world has changed dramatically. Still, Baran can't help but be shocked to discover that his home village is now underwater thanks to the construction of a new dam. He then heads for Istanbul to get revenge upon his former best friend, the man who snitched on him and stole his lover Keje. Along the way, Baran teams up with Cumali, a tough young punk who finds the thief's old-fashioned ways rather quaint. When Cumali gets into deep trouble with a crime boss, Baran adds another vengeful task to his roster. Written by Anonymous",
    "rating": 8.5,
    "year": "1996",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Sener Sen",
      "Ugur Yücel",
      "Sermin Hürmeriç"
    ]
  },
  {
    "title": "The Elephant Man",
    "description": "John Merrick (whose real name was Joseph, as this is based on a true story) is an intelligent and friendly man, but he is hated by his Victorian-era English society because he is severely deformed. Once he is discovered by a doctor, however, he is saved from his life in a freak show and he is treated like the human being that he really is. Written by Sam Cibula",
    "rating": 8.2,
    "year": "1980",
    "genres": [
      "Biography",
      "Drama"
    ],
    "actors": [
      "Anthony Hopkins",
      "John Hurt",
      "Anne Bancroft"
    ]
  },
  {
    "title": "Smultronstället",
    "description": "With the exception of his elderly housekeeper Miss Agda who he treats almost like a surrogate platonic wife, widowed seventy-eight year old Dr. Isak Borg, a former medical doctor and professor, has retreated from any human contact, partly his own want but partly the decision of others who do not want to spend time with him because of his cold demeanor. He is traveling from his home in Stockholm to Lund to accept an honorary degree. Instead of flying as was the original plan, he decides to take the day long drive instead. Along for the ride is his daughter-in-law Marianne, who had been staying with him for the month but has now decided to go home. The many stops and encounters along the way make him reminisce about various parts of his life. Those stops which make him reminisce directly are at his childhood summer home, at the home of his equally emotionally cold mother, and at a gas station where the attendants praise him as a man for his work. But the lives of other people they ... Written by Huggo",
    "rating": 8.2,
    "year": "1957",
    "genres": [
      "Drama",
      "Romance"
    ],
    "actors": [
      "Victor Sjöström",
      "Bibi Andersson",
      "Ingrid Thulin"
    ]
  },
  {
    "title": "The General",
    "description": "Johnnie loves his train (\"The General\") and Annabelle Lee. When the Civil War begins he is turned down for service because he's more valuable as an engineer. Annabelle thinks it's because he's a coward. Union spies capture The General with Annabelle on board. Johnnie must rescue both his loves. Written by Ed Stephan <stephan@cc.wwu.edu>",
    "rating": 8.2,
    "year": "1926",
    "genres": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "actors": [
      "Buster Keaton",
      "Marion Mack",
      "Glen Cavender"
    ]
  },
  {
    "title": "V for Vendetta",
    "description": "Tells the story of Evey Hammond and her unlikely but instrumental part in bringing down the fascist government that has taken control of a futuristic Great Britain. Saved from a life-and-death situation by a man in a Guy Fawkes mask who calls himself V, she learns a general summary of V's past and, after a time, decides to help him bring down those who committed the atrocities that led to Britain being in the shape that it is in. Written by ameelmore",
    "rating": 8.2,
    "year": "2005",
    "genres": [
      "Action",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Hugo Weaving",
      "Natalie Portman",
      "Rupert Graves"
    ]
  },
  {
    "title": "Warrior",
    "description": "Two brothers face the fight of a lifetime - and the wreckage of their broken family - within the brutal, high-stakes world of Mixed Martial Arts (MMA) fighting in Lionsgate's action/drama, WARRIOR. A former Marine, haunted by a tragic past, Tommy Riordan returns to his hometown of Pittsburgh and enlists his father, a recovered alcoholic and his former coach, to train him for an MMA tournament awarding the biggest purse in the history of the sport. As Tommy blazes a violent path towards the title prize, his brother, Brendan, a former MMA fighter unable to make ends meet as a public school teacher, returns to the amateur ring to provide for his family. Even though years have passed, recriminations and past betrayals keep Brendan bitterly estranged from both Tommy and his father. But when Brendan's unlikely rise as an underdog sets him on a collision course with Tommy, the two brothers must finally confront the forces that tore them apart, all the while waging the most intense, ... Written by MConnell",
    "rating": 8.2,
    "year": "2011",
    "genres": [
      "Action",
      "Drama",
      "Sport"
    ],
    "actors": [
      "Tom Hardy",
      "Nick Nolte",
      "Joel Edgerton"
    ]
  },
  {
    "title": "The Wolf of Wall Street",
    "description": "Jordan Belfort is a Long Island penny stockbroker who served 22 months in prison for defrauding investors in a massive 1990s securities scam that involved widespread corruption on Wall Street and in the corporate banking world, including shoe designer Steve Madden. Written by anonymous",
    "rating": 8.2,
    "year": "2013",
    "genres": [
      "Biography",
      "Comedy",
      "Crime"
    ],
    "actors": [
      "Leonardo DiCaprio",
      "Jonah Hill",
      "Margot Robbie"
    ]
  },
  {
    "title": "A Wednesday",
    "description": "A man calls up the Mumbai police, and tells them he has placed five different bombs in the city -- all set to go off in some time. He wants four terrorists in exchange. Does he get them? Who is behind it all? What's his motive? Is there more than meets the eye? Written by Saurabh Roy",
    "rating": 8.4,
    "year": "2008",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Anupam Kher",
      "Naseeruddin Shah",
      "Jimmy Shergill"
    ]
  },
  {
    "title": "Sunrise: A Song of Two Humans",
    "description": "In this fable-morality subtitled \"A Song of Two Humans\", the \"evil\" temptress is a city woman who bewitches farmer Anses and tries to convince him to murder his neglected wife, Indre. Written by alfiehitchie",
    "rating": 8.3,
    "year": "1927",
    "genres": [
      "Drama",
      "Romance"
    ],
    "actors": [
      "George O'Brien",
      "Janet Gaynor",
      "Margaret Livingston"
    ]
  },
  {
    "title": "Gran Torino",
    "description": "Walt Kowalski is a widower who holds onto his prejudices despite the changes in his Michigan neighborhood and the world around him. Kowalski is a grumpy, tough-minded, unhappy old man who can't get along with either his kids or his neighbors. He is a Korean War veteran whose prize possession is a 1972 Gran Torino he keeps in mint condition. When his neighbor Thao, a young Hmong teenager under pressure from his gang member cousin, tries to steal his Gran Torino, Kowalski sets out to reform the youth. Drawn against his will into the life of Thao's family, Kowalski is soon taking steps to protect them from the gangs that infest their neighborhood. Written by alfiehitchie",
    "rating": 8.2,
    "year": "2008",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Clint Eastwood",
      "Bee Vang",
      "Christopher Carley"
    ]
  },
  {
    "title": "Trainspotting",
    "description": "A wild, freeform, Rabelaisian trip through the darkest recesses of Edinburgh low-life, focusing on Mark Renton and his attempt to give up his heroin habit, and how the latter affects his relationship with family and friends: Sean Connery wannabe Sick Boy, dimbulb Spud, psycho Begbie, 14-year-old girlfriend Diane, and clean-cut athlete Tommy, who's never touched drugs but can't help being curious about them... Written by Michael Brooke <michael@everyman.demon.co.uk>",
    "rating": 8.2,
    "year": "1996",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Ewan McGregor",
      "Ewen Bremner",
      "Jonny Lee Miller"
    ]
  },
  {
    "title": "La passion de Jeanne d'Arc",
    "description": "The sufferings of a martyr, Jeanne D'Arc (1412-1431). Jeanne appears in court where Cauchon questions her and d'Estivet spits on her. She predicts her rescue, is taken to her cell, and judges forge evidence against her. In her cell, priests interrogate her and judges deny her the Mass. Threatened first in a torture chamber and then offered communion if she will recant, she refuses. At a cemetery, in front of a crowd, a priest and supporters urge her to recant; she does, and Cauchon announces her sentence. In her cell, she explains her change of mind and receives communion. In the courtyard at Rouen castle, she burns at the stake; the soldiers turn on the protesting crowd. Written by <jhailey@hotmail.com>",
    "rating": 8.3,
    "year": "1928",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "actors": [
      "Maria Falconetti",
      "Eugene Silvain",
      "André Berley"
    ]
  },
  {
    "title": "Rang De Basanti",
    "description": "A young idealistic English filmmaker, Sue, arrives in India to make a film on Indian revolutionaries Bhagat Singh, Chandrashekhar Azad and their contemporaries and their fight for freedom from the British Raj. Owing to a lack of funds, she recruits students from Delhi University to act in her docu-drama. She finds DJ, who graduated five years ago but still wants to be a part of the University because he doesn't think there's too much out there in the real world to look forward to. Karan, the son of Industrialist Rajnath Singhania, who shares an uncomfortable relationship with his father, but continues to live off him, albeit very grudgingly. Aslam, is a middle class Muslim boy, who lives in the by-lanes near Jama Masjid, poet, philosopher and guide to his friends. Sukhi, the group's baby, innocent, vulnerable and with a weakness for only one thing - girls. Laxman Pandey, the fundamentalist in the group, the only one who still believes that politics can make the world a better place ... Written by fish_wow6",
    "rating": 8.3,
    "year": "2006",
    "genres": [
      "Comedy",
      "Drama",
      "History"
    ],
    "actors": [
      "Aamir Khan",
      "Soha Ali Khan",
      "Siddharth"
    ]
  },
  {
    "title": "Dial M for Murder",
    "description": "In London, wealthy Margot Mary Wendice had a brief love affair with the American writer Mark Halliday while her husband and professional tennis player Tony Wendice was on a tennis tour. Tony quits playing to dedicate to his wife and finds a regular job. She decides to give him a second chance for their marriage. When Mark arrives from America to visit the couple, Margot tells him that she had destroyed all his letters but one that was stolen. Subsequently she was blackmailed, but she had never retrieved the stolen letter. Tony arrives home, claims that he needs to work and asks Margot to go with Mark to the theater. Meanwhile Tony calls Captain Lesgate (aka Charles Alexander Swann who studied with him at college) and blackmails him to murder his wife, so that he can inherit her fortune. But there is no perfect crime, and things do not work as planned. Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "rating": 8.2,
    "year": "1954",
    "genres": [
      "Crime",
      "Film-Noir",
      "Thriller"
    ],
    "actors": [
      "Ray Milland",
      "Grace Kelly",
      "Robert Cummings"
    ]
  },
  {
    "title": "The Big Lebowski",
    "description": "When \"The Dude\" Lebowski is mistaken for a millionaire Lebowski, two thugs urinate on his rug to coerce him into paying a debt he knows nothing about. While attempting to gain recompense for the ruined rug from his wealthy counterpart, he accepts a one-time job with high pay-off. He enlists the help of his bowling buddy, Walter, a gun-toting Jewish-convert with anger issues. Deception leads to more trouble, and it soon seems that everyone from porn empire tycoons to nihilists want something from The Dude. Written by J. Lake",
    "rating": 8.2,
    "year": "1998",
    "genres": [
      "Comedy",
      "Crime",
      "Mystery"
    ],
    "actors": [
      "Jeff Bridges",
      "John Goodman",
      "Julianne Moore"
    ]
  },
  {
    "title": "The Deer Hunter",
    "description": "Michael, Steven and Nick are young factory workers from Pennsylvania who enlist into the Army to fight in Vietnam. Before they go, Steven marries the pregnant Angela, and their wedding party also serves as the men's farewell party. After some time and many horrors, the three friends fall in the hands of the Vietcong and are brought to a prison camp in which they are forced to play Russian roulette against each other. Michael makes it possible for them to escape, but they soon get separated again. Written by Leon Wolters <wolters@strw.LeidenUniv.nl>",
    "rating": 8.2,
    "year": "1978",
    "genres": [
      "Drama",
      "War"
    ],
    "actors": [
      "Robert De Niro",
      "Christopher Walken",
      "John Cazale"
    ]
  },
  {
    "title": "Gone with the Wind",
    "description": "Scarlett is a woman who can deal with a nation at war, Atlanta burning, the Union Army carrying off everything from her beloved Tara, the carpetbaggers who arrive after the war. Scarlett is beautiful. She has vitality. But Ashley, the man she has wanted for so long, is going to marry his placid cousin, Melanie. Mammy warns Scarlett to behave herself at the party at Twelve Oaks. There is a new man there that day, the day the Civil War begins. Rhett Butler. Scarlett does not know he is in the room when she pleads with Ashley to choose her instead of Melanie. Written by Dale O'Connor <daleoc@interaccess.com>",
    "rating": 8.2,
    "year": "1939",
    "genres": [
      "Drama",
      "History",
      "Romance"
    ],
    "actors": [
      "Clark Gable",
      "Vivien Leigh",
      "Thomas Mitchell"
    ]
  },
  {
    "title": "Fargo",
    "description": "Jerry works in his father-in-law's car dealership and has gotten himself in financial problems. He tries various schemes to come up with money needed for a reason that is never really explained. It has to be assumed that his huge embezzlement of money from the dealership is about to be discovered by father-in-law. When all else falls through, plans he set in motion earlier for two men to kidnap his wife for ransom to be paid by her wealthy father (who doesn't seem to have the time of day for son-in-law). From the moment of the kidnapping, things go wrong and what was supposed to be a non-violent affair turns bloody with more blood added by the minute. Jerry is upset at the bloodshed, which turns loose a pregnant sheriff from Brainerd, MN who is tenacious in attempting to solve the three murders in her jurisdiction. Written by Anonymous",
    "rating": 8.1,
    "year": "1996",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "William H. Macy",
      "Frances McDormand",
      "Steve Buscemi"
    ]
  },
  {
    "title": "Tôkyô monogatari",
    "description": "An elderly couple journey to Tokyo to visit their children and are confronted by indifference, ingratitude and selfishness. When the parents are packed off to a resort by their impatient children, the film deepens into an unbearably moving meditation on mortality. Written by Paul Watabe",
    "rating": 8.3,
    "year": "1953",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Chishû Ryû",
      "Chieko Higashiyama",
      "Sô Yamamura"
    ]
  },
  {
    "title": "Finding Nemo",
    "description": "A clown fish named Marlin lives in the Great Barrier Reef loses his son, Nemo. After he ventures into the open sea, despite his father's constant warnings about many of the ocean's dangers. Nemo is abducted by a boat and netted up and sent to a dentist's office in Sydney. So, while Marlin ventures off to try to retrieve Nemo, Marlin meets a fish named Dory, a blue tang suffering from short-term memory loss. The companions travel a great distance, encountering various dangerous sea creatures such as sharks, anglerfish and jellyfish, in order to rescue Nemo from the dentist's office, which is situated by Sydney Harbor. While the two are doing this, Nemo and the other sea animals in the dentist's fish tank plot a way to return to Sydney Harbor to live their lives free again. Written by Anonymous",
    "rating": 8.1,
    "year": "2003",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "actors": [
      "Albert Brooks",
      "Ellen DeGeneres",
      "Alexander Gould"
    ]
  },
  {
    "title": "The Sixth Sense",
    "description": "Malcom Crowe (Bruce Willis)is a child psychologist who receives an award on the same night that he is visited by a very unhappy ex-patient. After this encounter, Crowe takes on the task of curing a young boy with the same ills as the ex-patient (Donnie Wahlberg) . This boy \"sees dead people\". Crowe spends a lot of time with the boy much to the dismay of his wife (Olivia Williams). Cole's mom (Toni Collette) is at her wit's end with what to do about her son's increasing problems. Crowe is the boy's only hope. Written by Jeff Mellinger <jmell@uclink4.berkeley.edu>",
    "rating": 8.1,
    "year": "1999",
    "genres": [
      "Drama",
      "Mystery",
      "Thriller"
    ],
    "actors": [
      "Bruce Willis",
      "Haley Joel Osment",
      "Toni Collette"
    ]
  },
  {
    "title": "The Thing",
    "description": "A US research station, Antarctica, early-winter 1982. The base is suddenly buzzed by a helicopter from the nearby Norwegian research station. They are trying to kill a dog that has escaped from their base. After the destruction of the Norwegian chopper the members of the US team fly to the Norwegian base, only to discover them all dead or missing. They do find the remains of a strange creature the Norwegians burned. The Americans take it to their base and deduce that it an alien life form. After a while it is apparent that the alien can take over and assimilate into other life forms, including humans, and can spread like a virus. This means that anyone at the base could be inhabited by The Thing, and tensions escalate. Written by grantss",
    "rating": 8.2,
    "year": "1982",
    "genres": [
      "Horror",
      "Mystery",
      "Sci-Fi"
    ],
    "actors": [
      "Kurt Russell",
      "Wilford Brimley",
      "Keith David"
    ]
  },
  {
    "title": "Cool Hand Luke",
    "description": "Luke Jackson is a cool, gutsy prisoner in a Southern chain gang, who, while refusing to buckle under to authority, keeps escaping and being recaptured. The prisoners admire Luke because, as Dragline explains it, \"You're an original, that's what you are!\" Nevertheless, the camp staff actively works to crush Luke until he finally breaks. Written by alfiehitchie",
    "rating": 8.2,
    "year": "1967",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Paul Newman",
      "George Kennedy",
      "Strother Martin"
    ]
  },
  {
    "title": "No Country for Old Men",
    "description": "In rural Texas, welder and hunter Llewelyn Moss (Josh Brolin) discovers the remains of several drug runners who have all killed each other in an exchange gone violently wrong. Rather than report the discovery to the police, Moss decides to simply take the two million dollars present for himself. This puts the psychopathic killer, Anton Chigurh (Javier Bardem), on his trail as he dispassionately murders nearly every rival, bystander and even employer in his pursuit of his quarry and the money. As Moss desperately attempts to keep one step ahead, the blood from this hunt begins to flow behind him with relentlessly growing intensity as Chigurh closes in. Meanwhile, the laconic Sherrif Ed Tom Bell (Tommy Lee Jones) blithely oversees the investigation even as he struggles to face the sheer enormity of the crimes he is attempting to thwart. Written by Kenneth Chisholm (kchishol@rogers.com)",
    "rating": 8.1,
    "year": "2007",
    "genres": [
      "Crime",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Tommy Lee Jones",
      "Javier Bardem",
      "Josh Brolin"
    ]
  },
  {
    "title": "Rebecca",
    "description": "A shy ladies' companion, staying in Monte Carlo with her stuffy employer, meets the wealthy Maxim de Winter. She and Max fall in love, marry and return to Manderley, his large country estate in Cornwall. Max is still troubled by the death of his first wife, Rebecca, in a boating accident the year before. The second Mrs. de Winter clashes with the housekeeper, Mrs. Danvers, and discovers that Rebecca still has a strange hold on everyone at Manderley. Written by Col Needham <col@imdb.com>",
    "rating": 8.2,
    "year": "1940",
    "genres": [
      "Drama",
      "Mystery",
      "Romance"
    ],
    "actors": [
      "Laurence Olivier",
      "Joan Fontaine",
      "George Sanders"
    ]
  },
  {
    "title": "How to Train Your Dragon",
    "description": "Long ago up North on the Island of Berk, the young Viking, Hiccup, wants to join his town's fight against the dragons that continually raid their town. However, his macho father and village leader, Stoik the Vast, will not allow his small, clumsy, but inventive son to do so. Regardless, Hiccup ventures out into battle and downs a mysterious Night Fury dragon with his invention, but can't bring himself to kill it. Instead, Hiccup and the dragon, whom he dubs Toothless, begin a friendship that would open up both their worlds as the observant boy learns that his people have misjudged the species. But even as the two each take flight in their own way, they find that they must fight the destructive ignorance plaguing their world. Written by Kenneth Chisholm (kchishol@rogers.com)",
    "rating": 8.2,
    "year": "2010",
    "genres": [
      "Animation",
      "Action",
      "Adventure"
    ],
    "actors": [
      "Jay Baruchel",
      "Gerard Butler",
      "Christopher Mintz-Plasse"
    ]
  },
  {
    "title": "Kill Bill: Vol. 1",
    "description": "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.' Upon realizing she was pregnant with Bill's child, 'The Bride' decided to escape her life as a killer. She fled to Texas, met a young man, who, on the day of their wedding rehearsal was gunned down by an angry and jealous Bill (with the assistance of the Deadly Viper Assassination Squad). Four years later, 'The Bride' wakes from a coma, and discovers her baby is gone. She, then, decides to seek revenge upon the five people who destroyed her life and killed her baby. The saga of Kill Bill Volume I begins. Written by JD",
    "rating": 8.1,
    "year": "2003",
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "actors": [
      "Uma Thurman",
      "David Carradine",
      "Daryl Hannah"
    ]
  },
  {
    "title": "Into the Wild",
    "description": "Based on a true story. After graduating from Emory University, Christopher McCandless abandoned his possessions, gave his entire savings account to charity, and hitchhiked to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters who shape his life. Written by Lisa Kelley",
    "rating": 8.2,
    "year": "2007",
    "genres": [
      "Adventure",
      "Biography",
      "Drama"
    ],
    "actors": [
      "Emile Hirsch",
      "Vince Vaughn",
      "Catherine Keener"
    ]
  },
  {
    "title": "Mary and Max",
    "description": "In the mid-1970's, a homely, friendless Australian girl of 8 picks a name out of a Manhattan phone book and writes to him; she includes a chocolate bar. She's Mary Dinkle, the only child of an alcoholic mother and a distracted father. He's Max Horowitz, an overweight man with Asperger's, living alone in New York. He writes back, with chocolate. Thus begins a 20-year correspondence, interrupted by a stay in an asylum and a few misunderstandings. Mary falls in love with a neighbor, saves money to have a birthmark removed and deals with loss. Max has a friendship with a neighbor, tries to control his weight, and finally gets the dream job. Will the two ever meet face to face? Written by <jhailey@hotmail.com>",
    "rating": 8.2,
    "year": "2009",
    "genres": [
      "Animation",
      "Comedy",
      "Drama"
    ],
    "actors": [
      "Toni Collette",
      "Philip Seymour Hoffman",
      "Eric Bana"
    ]
  },
  {
    "title": "There Will Be Blood",
    "description": "The intersecting life stories of Daniel Plainview and Eli Sunday in early twentieth century California presents miner-turned-oilman Daniel Plainview, a driven man who will do whatever it takes to achieve his goals. He works hard but also takes advantage of those around him at their expense if need be. His business partner/son (H.W.) is, in reality, an \"acquired\" child whose true biological single-parent father (working on one of Daniel's rigs) died in a workplace accident. Daniel is deeply protective of H.W. if only for what H.W. brings to the partnership. Eli Sunday is one in a pair of twins whose family farm Daniel purchases for the major oil deposit located on it. Eli, a local preacher and a self-proclaimed faith healer, wants the money from the sale of the property to finance his own church. The lives of the two competitive men often clash as Daniel pumps oil off the property and tries to acquire all the surrounding land at bargain prices to be able to build a pipeline to the ... Written by Huggo / edited by statmanjeff",
    "rating": 8.1,
    "year": "2007",
    "genres": [
      "Drama",
      "History"
    ],
    "actors": [
      "Daniel Day-Lewis",
      "Paul Dano",
      "Ciarán Hinds"
    ]
  },
  {
    "title": "Gone Girl",
    "description": "On the occasion of his fifth wedding anniversary, Nick Dunne reports that his wife, Amy, has gone missing. Under pressure from the police and a growing media frenzy, Nick's portrait of a blissful union begins to crumble. Soon his lies, deceits and strange behavior have everyone asking the same dark question: Did Nick Dunne kill his wife? Written by Twentieth Century Fox",
    "rating": 8.1,
    "year": "2014",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Ben Affleck",
      "Rosamund Pike",
      "Neil Patrick Harris"
    ]
  },
  {
    "title": "Munna Bhai M.B.B.S.",
    "description": "In India gangsters are called Bhai (brothers). One such Bhai is Munna, who is feared by everyone in Mumbai, a big city in India. He cons his village-based parents into believing that he is a doctor. He gets a shock when he finds out that they are coming to verify for themselves. So he transforms a rooming shanty house into a makeshift hospital, populated by patients, people he beats up. His parents arrive, are pleased, and happy that their son is well settled. They would like him to get married to a doctor's daughter. The marriage is arranged, but before the engagement, the bride's father finds out the truth about Munna, and cancels the marriage. Munna's humiliated parents see the truth for themselves, and hurt, they return home, leaving Munna with a strong desire to hurt the doctor - and force him to let his daughter get married to him - even if it means getting admitted in the medical college - with forged documents!!! Written by Sumitra (corrected by Carrie)",
    "rating": 8.3,
    "year": "2003",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "actors": [
      "Sunil Dutt",
      "Sanjay Dutt",
      "Arshad Warsi"
    ]
  },
  {
    "title": "Idi i smotri",
    "description": "During WWII, a Belarusian boy is thrust into the atrocities of war, fighting with a hopelessly unequipped Soviet resistance movement against ruthless German forces. Witnessing scenes of abject terror and surviving horrifying situations, he loses his innocence and then his mind. Written by TheDistantPanic",
    "rating": 8.3,
    "year": "1985",
    "genres": [
      "Drama",
      "War"
    ],
    "actors": [
      "Aleksey Kravchenko",
      "Olga Mironova",
      "Liubomiras Laucevicius"
    ]
  },
  {
    "title": "Hera Pheri",
    "description": "Baburao is a landlord in India, who is very near-sighted, and always in financial trouble. He has a tenant named Raja, who has not paid his rent for several months. He also has anther tenant named Shyam, who has come to the city to look for a job in his late father's place, but is unable to find employment. The three men quarrel amongst themselves frequently. Then one day, the three men get a phone call from a kidnapper named Kabira, and decide to make use of this phone call to overcome their financial problems - pretend to be the real kidnappers, increase the ransom amount, keep the incremental amount for themselves, and then give the original ransom demanded to Kabira. Will they get away with this idea? Written by Tanya",
    "rating": 8.4,
    "year": "2000",
    "genres": [
      "Comedy",
      "Crime",
      "Thriller"
    ],
    "actors": [
      "Akshay Kumar",
      "Paresh Rawal",
      "Sunil Shetty"
    ]
  },
  {
    "title": "It Happened One Night",
    "description": "Ellie Andrews has just tied the knot with society aviator King Westley when she is whisked away to her father's yacht and out of King's clutches. Ellie jumps ship and eventually winds up on a bus headed back to her husband. Reluctantly she must accept the help of out-of- work reporter Peter Warne. Actually, Warne doesn't give her any choice: either she sticks with him until he gets her back to her husband, or he'll blow the whistle on Ellie to her father. Either way, Peter gets what (he thinks!) he wants .... a really juicy newspaper story. Written by A.L.Beneteau <albl@inforamp.net>",
    "rating": 8.2,
    "year": "1934",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "actors": [
      "Clark Gable",
      "Claudette Colbert",
      "Walter Connolly"
    ]
  },
  {
    "title": "Sholay",
    "description": "Sholay means embers in Hindi. In this particular movie, a Police Officer, who's family was killed by a bandit named Gabbar Singh, decides to fight fire with fire and recruits two convicts, Jai and Veeru to capture Gabbar. He approaches them in jail, puts the proposal in front of them, and they agree to bring in Gabbar Singh alive - for a hefty price. After their discharge from jail, they travel by train to the village where the Police Officer lives - now with only his widowed daughter-in-law. The three band together to fight one of the most elusive and dreaded bandits of all time. Will the two ex-cons be able to bring Gabbar alive to the Police Officer? Written by Calista",
    "rating": 8.4,
    "year": "1975",
    "genres": [
      "Action",
      "Adventure",
      "Comedy"
    ],
    "actors": [
      "Dharmendra",
      "Sanjeev Kumar",
      "Hema Malini"
    ]
  },
  {
    "title": "Life of Brian",
    "description": "The story of Brian of Nazareth, born on the same day as Jesus of Nazareth, who takes a different path in life that leads to the same conclusion. Brian joins a political resistance movement aiming to get the Romans out of Judea. Brian scores a victory of sorts when he manages to paint political slogans on an entire wall in the city of Jerusalem. The movement is not very effective but somehow Brian becomes a prophet and gathers his own following. His fate is sealed however and he lives a very short life. Written by garykmcd",
    "rating": 8.1,
    "year": "1979",
    "genres": [
      "Comedy"
    ],
    "actors": [
      "Graham Chapman",
      "John Cleese",
      "Michael Palin"
    ]
  },
  {
    "title": "Andaz Apna Apna",
    "description": "Amar and Prem are two rivals who belonging to middle-class families with no scope of future advancement. Both individually, without the knowledge of the other decide to take matters into their hands and find ways to get rich quickly. Chaos and acrimony result when both find each other at loggerheads when both arrive to win the hand of the daughter of multi-millionaire Ram Gopal Bajaj amidst considerable upheavals when Shyam, the twin brother of Ram, decides to do away with Ram and assume his identity and thus take over the estate of the Bajaj family. Written by Sonia",
    "rating": 8.4,
    "year": "1994",
    "genres": [
      "Comedy",
      "Family",
      "Romance"
    ],
    "actors": [
      "Aamir Khan",
      "Salman Khan",
      "Raveena Tandon"
    ]
  },
  {
    "title": "Shutter Island",
    "description": "It's 1954, and up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital. He's been pushing for an assignment on the island for personal reasons, but before long he wonders whether he hasn't been brought there as part of a twisted plot by hospital doctors whose radical treatments range from unethical to illegal to downright sinister. Teddy's shrewd investigating skills soon provide a promising lead, but the hospital refuses him access to records he suspects would break the case wide open. As a hurricane cuts off communication with the mainland, more dangerous criminals \"escape\" in the confusion, and the puzzling, improbable clues multiply, Teddy begins to doubt everything - his memory, his partner, even his own sanity. Written by alfiehitchie",
    "rating": 8.1,
    "year": "2010",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "actors": [
      "Leonardo DiCaprio",
      "Emily Mortimer",
      "Mark Ruffalo"
    ]
  },
  {
    "title": "Platoon",
    "description": "Chris Taylor is a young, naive American who gives up college and volunteers for combat in Vietnam. Upon arrival, he quickly discovers that his presence is quite nonessential, and is considered insignificant to the other soldiers, as he has not fought for as long as the rest of them and felt the effects of combat. Chris has two non-commissioned officers, the ill-tempered and indestructible Staff Sergeant Robert Barnes and the more pleasant and cooperative Sergeant Elias Grodin. A line is drawn between the two NCOs and a number of men in the platoon when an illegal killing occurs during a village raid. As the war continues, Chris himself draws towards psychological meltdown. And as he struggles for survival, he soon realizes he is fighting two battles, the conflict with the enemy and the conflict between the men within his platoon. Written by Jeremy Thomson",
    "rating": 8.1,
    "year": "1986",
    "genres": [
      "Drama",
      "War"
    ],
    "actors": [
      "Charlie Sheen",
      "Tom Berenger",
      "Willem Dafoe"
    ]
  },
  {
    "title": "Hotel Rwanda",
    "description": "During the 1990s, some of the worst atrocities in the history of mankind took place in the country of Rwanda--and in an era of high-speed communication and round the clock news, the events went almost unnoticed by the rest of the world. In only three months, one million people were brutally murdered. In the face of these unspeakable actions, inspired by his love for his family, an ordinary man summons extraordinary courage to save the lives of over a thousand helpless refugees, by granting them shelter in the hotel he manages. Written by Sujit R. Varma",
    "rating": 8.1,
    "year": "2004",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "actors": [
      "Don Cheadle",
      "Sophie Okonedo",
      "Joaquin Phoenix"
    ]
  },
  {
    "title": "Rush",
    "description": "Set against the sexy, glamorous golden age of Formula 1 racing in the 1970s, the film is based on the true story of a great sporting rivalry between handsome English playboy James Hunt (Hemsworth), and his methodical, brilliant opponent, Austrian driver Niki Lauda (Bruhl). The story follows their distinctly different personal styles on and off the track, their loves and the astonishing 1976 season in which both drivers were willing to risk everything to become world champion in a sport with no margin for error: if you make a mistake, you die. Written by P. Morgan",
    "rating": 8.1,
    "year": "2013",
    "genres": [
      "Action",
      "Biography",
      "Drama"
    ],
    "actors": [
      "Daniel Brühl",
      "Chris Hemsworth",
      "Olivia Wilde"
    ]
  },
  {
    "title": "Network",
    "description": "In the 1970s, terrorist violence is the stuff of networks' nightly news programming and the corporate structure of the UBS Television Network is changing. Meanwhile, Howard Beale, the aging UBS news anchor, has lost his once strong ratings share and so the network fires him. Beale reacts in an unexpected way. We then see how this affects the fortunes of Beale, his coworkers (Max Schumacher and Diana Christensen), and the network. Written by Bruce Janson <bruce@cs.su.oz.au>",
    "rating": 8.1,
    "year": "1976",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Faye Dunaway",
      "William Holden",
      "Peter Finch"
    ]
  },
  {
    "title": "Le salaire de la peur",
    "description": "In the South American jungle supplies of nitroglycerin are needed at a remote oil field. The oil company pays four men to deliver the supplies in two trucks. A tense rivalry develops between the two sets of drivers and on the rough remote roads the slightest jolt can result in death. Written by Col Needham <col@imdb.com>",
    "rating": 8.2,
    "year": "1953",
    "genres": [
      "Adventure",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Yves Montand",
      "Charles Vanel",
      "Peter van Eyck"
    ]
  },
  {
    "title": "Relatos salvajes",
    "description": "The film is divided into six segments. (1) \"Pasternak\": While being on a plane, a model and a music critic realise they have a common acquaintance called Pasternak. Soon they discover that every passenger and crew member on board know Pasternak. Is this coincidence? (2) \"The Rats\": A waitress recognizes her client - it's the loan shark who caused a tragedy in her family. The cook suggests mixing rat poison with his food, but the waitress refuses. The stubborn cook, however, decides to proceed with her plan. (3) \"The Strongest\": Two drivers on a lone highway have an argument with tragic consequences. (4) \"Little Bomb\": A demolition engineer has his car towed by a truck for parking in a wrong place and he has an argument with the employee of the towing company. This event destroys his private and professional life, and he plots revenge against the corrupt towing company and the city hall. (5) \"The Proposal\": A reckless son of a wealthy family has an overnight hit-and-run accident, in ... Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "rating": 8.1,
    "year": "2014",
    "genres": [
      "Comedy",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Darío Grandinetti",
      "María Marull",
      "Mónica Villa"
    ]
  },
  {
    "title": "Stand by Me",
    "description": "It's the summer of 1959 in Castlerock, Oregon and four 12 year-old boys - Gordie, Chris, Teddy and Vern - are fast friends. After learning of the general location of the body of a local boy who has been missing for several days, they set off into woods to see it. Along the way, they learn about themselves, the meaning of friendship and the need to stand up for what is right. Written by garykmcd",
    "rating": 8.1,
    "year": "1986",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "actors": [
      "Wil Wheaton",
      "River Phoenix",
      "Corey Feldman"
    ]
  },
  {
    "title": "In the Name of the Father",
    "description": "A small time thief from Belfast, Gerry Conlon, is falsely implicated in the IRA bombing of a pub that kills several people while he is in London. Bullied by the British police, he and four of his friends are coerced into confessing their guilt. Gerry's father and other relatives in London are also implicated in the crime. He spends 15 years in prison with his father trying to prove his innocence with the help of a British attorney, Gareth Peirce. Based on a true story. Written by Liza Esser <essereli@student.msu.edu>",
    "rating": 8.1,
    "year": "1993",
    "genres": [
      "Biography",
      "Drama"
    ],
    "actors": [
      "Daniel Day-Lewis",
      "Pete Postlethwaite",
      "Alison Crosbie"
    ]
  },
  {
    "title": "Spotlight",
    "description": "When the Boston Globe's tenacious \"Spotlight\" team of reporters delves into allegations of abuse in the Catholic Church, their year-long investigation uncovers a decades-long cover-up at the highest levels of Boston's religious, legal, and government establishment, touching off a wave of revelations around the world. Written by Open Road",
    "rating": 8.1,
    "year": "2015",
    "genres": [
      "Crime",
      "Drama",
      "History"
    ],
    "actors": [
      "Mark Ruffalo",
      "Michael Keaton",
      "Rachel McAdams"
    ]
  },
  {
    "title": "Les quatre cents coups",
    "description": "Seemingly in constant trouble at school, 14 year-old Antoine Doinel returns at the end of every day to a drab and unhappy home life. His parents have little money and he sleeps on a couch that's been pushed into the kitchen. He knows his mother is having an affair and his parents bicker constantly. He decides to skip school and begins a downward spiral of lies and later stealing. His parents are at their wits end and after he's stopped by the police, they decide the best thing to do would be to let Antoine face the consequences. He's sent to a juvenile detention facility where he doesn't do much better. He does manage to escape however......... Written by garykmcd",
    "rating": 8.1,
    "year": "1959",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Jean-Pierre Léaud",
      "Albert Rémy",
      "Claire Maurier"
    ]
  },
  {
    "title": "Mad Max: Fury Road",
    "description": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and almost everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland. Written by Production",
    "rating": 8.1,
    "year": "2015",
    "genres": [
      "Action",
      "Adventure",
      "Sci-Fi"
    ],
    "actors": [
      "Tom Hardy",
      "Charlize Theron",
      "Nicholas Hoult"
    ]
  },
  {
    "title": "Butch Cassidy and the Sundance Kid",
    "description": "Butch and Sundance are the two leaders of the Hole-in-the-Wall Gang. Butch is all ideas, Sundance is all action and skill. The west is becoming civilized and when Butch and Sundance rob a train once too often, a special posse begins trailing them no matter where they run. Over rock, through towns, across rivers, the group is always just behind them. When they finally escape through sheer luck, Butch has another idea, \"Let's go to Bolivia\". Based on the exploits of the historical characters. Written by John Vogel <jlvogel@comcast.net>",
    "rating": 8.1,
    "year": "1969",
    "genres": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "actors": [
      "Paul Newman",
      "Robert Redford",
      "Katharine Ross"
    ]
  },
  {
    "title": "12 Years a Slave",
    "description": "Based on an incredible true story of one man's fight for survival and freedom. In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty personified by a malevolent slave owner, as well as unexpected kindnesses, Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon's chance meeting with a Canadian abolitionist will forever alter his life. Written by Fox Searchlight",
    "rating": 8.1,
    "year": "2013",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "actors": [
      "Chiwetel Ejiofor",
      "Michael Kenneth Williams",
      "Michael Fassbender"
    ]
  },
  {
    "title": "The Grand Budapest Hotel",
    "description": "GRAND BUDAPEST HOTEL recounts the adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend. The story involves the theft and recovery of a priceless Renaissance painting and the battle for an enormous family fortune -- all against the back-drop of a suddenly and dramatically changing Continent. Written by Fox Searchlight Pictures",
    "rating": 8.1,
    "year": "2014",
    "genres": [
      "Adventure",
      "Comedy",
      "Drama"
    ],
    "actors": [
      "Ralph Fiennes",
      "F. Murray Abraham",
      "Mathieu Amalric"
    ]
  },
  {
    "title": "Ben-Hur",
    "description": "Judah Ben-Hur lives as a rich Jewish prince and merchant in Jerusalem at the beginning of the 1st century. Together with the new governor his old friend Messala arrives as commanding officer of the Roman legions. At first they are happy to meet after a long time but their different politic views separate them. During the welcome parade a roof tile falls down from Judah's house and injures the governor. Although Messala knows they are not guilty, he sends Judah to the galleys and throws his mother and sister into prison. But Judah swears to come back and take revenge. Written by Matthias Scheler <tron@lyssa.owl.de>",
    "rating": 8.1,
    "year": "1959",
    "genres": [
      "Adventure",
      "Drama",
      "History"
    ],
    "actors": [
      "Charlton Heston",
      "Jack Hawkins",
      "Stephen Boyd"
    ]
  },
  {
    "title": "The Maltese Falcon",
    "description": "Spade and Archer is the name of a San Francisco detective agency. That's for Sam Spade and Miles Archer. The two men are partners, but Sam doesn't like Miles much. A knockout, who goes by the name of Miss Wonderly, walks into their office; and by that night everything's changed. Miles is dead. And so is a man named Floyd Thursby. It seems Miss Wonderly is surrounded by dangerous men. There's Joel Cairo, who uses gardenia-scented calling cards. There's Kasper Gutman, with his enormous girth and feigned civility. Her only hope of protection comes from Sam, who is suspected by the police of one or the other murder. More murders are yet to come, and it will all be because of these dangerous men -- and their lust for a statuette of a bird: the Maltese Falcon. Written by J. Spurlin",
    "rating": 8.1,
    "year": "1941",
    "genres": [
      "Crime",
      "Film-Noir",
      "Mystery"
    ],
    "actors": [
      "Humphrey Bogart",
      "Mary Astor",
      "Gladys George"
    ]
  },
  {
    "title": "Star Wars: Episode VII - The Force Awakens",
    "description": "30 years after the defeat of Darth Vader and the Empire, Rey, a scavenger from the planet Jakku, finds a BB-8 droid that knows the whereabouts of the long lost Luke Skywalker. Rey, as well as a rogue stormtrooper and two smugglers, are thrown into the middle of a battle between the Resistance and the daunting legions of the First Order. Written by Noah White",
    "rating": 8.1,
    "year": "2015",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "actors": [
      "Daisy Ridley",
      "John Boyega",
      "Oscar Isaac"
    ]
  },
  {
    "title": "Le notti di Cabiria",
    "description": "Rome, 1957. A woman, Cabiria, is robbed and left to drown by her boyfriend, Giorgio. Rescued, she resumes her life and tries her best to find happiness in a cynical world. Even when she thinks her struggles are over and she has found happiness and contentment, things may not be what they seem. Written by grantss",
    "rating": 8.2,
    "year": "1957",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Giulietta Masina",
      "François Périer",
      "Franca Marzi"
    ]
  },
  {
    "title": "Persona",
    "description": "A young nurse, Alma, is put in charge of Elisabeth Vogler: an actress who is seemingly healthy in all respects, but will not talk. As they spend time together, Alma speaks to Elisabeth constantly, never receiving any answer. Alma eventually confesses her secrets to a seemingly sympathetic Elisabeth and finds that her own personality is being submerged into Elisabeth's persona. Written by Kathy Li",
    "rating": 8.1,
    "year": "1966",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Bibi Andersson",
      "Liv Ullmann",
      "Margaretha Krook"
    ]
  },
  {
    "title": "Million Dollar Baby",
    "description": "Wanting to learn from the best, aspiring boxer Maggie Fitzgerald wants Frankie Dunn to train her. At the outset he flatly refuses saying he has no interest in training a girl. Frankie leads a lonely existence, alienated from his only daughter and having few friends. Maggie's rough around the edges but shows a lot of grit in the ring and he eventually relents. Maggie not only proves to be the boxer he always dreamed of having under his wing but a friend who fills the great void he's had in his life. Maggie's career skyrockets but an accident in the ring leads her to ask Frankie for one last favor. Written by garykmcd",
    "rating": 8.1,
    "year": "2004",
    "genres": [
      "Drama",
      "Sport"
    ],
    "actors": [
      "Hilary Swank",
      "Clint Eastwood",
      "Morgan Freeman"
    ]
  },
  {
    "title": "Amores perros",
    "description": "Three interconnected stories about the different strata of life in Mexico City all resolve with a fatal car accident. Octavio is trying to raise enough money to run away with his sister-in-law, and decides to enter his dog Cofi into the world of dogfighting. After a dogfight goes bad, Octavio flees in his car, running a red light and causing the accident. Daniel and Valeria's new-found bliss is prematurely ended when she loses her leg in the accident. El Chivo is a homeless man who cares for stray dogs and is there to witness the collision. Written by Anonymous",
    "rating": 8.1,
    "year": "2000",
    "genres": [
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Emilio Echevarría",
      "Gael García Bernal",
      "Goya Toledo"
    ]
  },
  {
    "title": "Jurassic Park",
    "description": "Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs. John Hammond has invited four individuals, along with his two grandchildren, to join him at Jurassic Park. But will everything go according to plan? A park employee attempts to steal dinosaur embryos, critical security systems are shut down and it now becomes a race for survival with dinosaurs roaming freely over the island. Written by Film_Fan",
    "rating": 8.1,
    "year": "1993",
    "genres": [
      "Adventure",
      "Sci-Fi",
      "Thriller"
    ],
    "actors": [
      "Sam Neill",
      "Laura Dern",
      "Jeff Goldblum"
    ]
  },
  {
    "title": "The Princess Bride",
    "description": "An elderly man reads the book \"The Princess Bride\" to his sick and thus currently bedridden adolescent grandson, the reading of the book which has been passed down within the family for generations. The grandson is sure he won't like the story, with a romance at its core, he preferring something with lots of action and \"no kissing\". But the grandson is powerless to stop his grandfather, whose feelings he doesn't want to hurt. The story centers on Buttercup, a former farm girl who has been chosen as the princess bride to Prince Humperdinck of Florian. Buttercup does not love him, she who still laments the death of her one true love, Westley, five years ago. Westley was a hired hand on the farm, his stock answer of \"as you wish\" to any request she made of him which she came to understand was his way of saying that he loved her. But Westley went away to sea, only to be killed by the Dread Pirate Roberts. On a horse ride to clear her mind of her upcoming predicament of marriage, Buttercup... Written by Huggo",
    "rating": 8.1,
    "year": "1987",
    "genres": [
      "Adventure",
      "Family",
      "Fantasy"
    ],
    "actors": [
      "Cary Elwes",
      "Mandy Patinkin",
      "Robin Wright"
    ]
  },
  {
    "title": "Salinui chueok",
    "description": "In 1986, in the province of Gyunggi, in South Korea, a second young and beautiful woman is found dead, raped and tied and gagged with her underwear. Detective Park Doo-Man and Detective Cho Yong-koo, two brutal and stupid local detectives without any technique, investigate the murder using brutality and torturing the suspects, without any practical result. The Detective Seo Tae-Yoon from Seoul comes to the country to help the investigations and is convinced that a serial-killer is killing the women. When a third woman is found dead in the same \"modus-operandi\", the detectives find leads of the assassin. Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "rating": 8.1,
    "year": "2003",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Kang-ho Song",
      "Sang-kyung Kim",
      "Roe-ha Kim"
    ]
  },
  {
    "title": "Hachi: A Dog's Tale",
    "description": "In Bedridge, Professor Parker Wilson finds an abandoned dog at the train station and takes it home with the intention of returning the animal to its owner. He finds that the dog is an Akita and names it Hachiko. However, nobody claims the dog so his family decides to keep Hachi. Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "rating": 8.1,
    "year": "2009",
    "genres": [
      "Drama",
      "Family"
    ],
    "actors": [
      "Richard Gere",
      "Joan Allen",
      "Cary-Hiroyuki Tagawa"
    ]
  },
  {
    "title": "Stalker",
    "description": "Near a gray and unnamed city is the Zone, an alien place guarded by barbed wire and soldiers. Over his wife's objections, a man rises in the early morning and leaves her with their disabled daughter to meet two men. He's a Stalker, one of a handful who have the mental gifts (and who risk imprisonment) to lead people into the Zone to the Room, a place where one's secret hopes come true. His clients are a burned out popular writer, cynical, and questioning his talent; and a quiet scientist more concerned about his knapsack than the journey. In the deserted Zone, the approach to the Room must be indirect. As they draw near, the rules seem to change and the stalker faces a crisis. Written by <jhailey@hotmail.com>",
    "rating": 8.1,
    "year": "1979",
    "genres": [
      "Drama",
      "Sci-Fi"
    ],
    "actors": [
      "Alisa Freyndlikh",
      "Aleksandr Kaydanovskiy",
      "Anatoliy Solonitsyn"
    ]
  },
  {
    "title": "Kaze no tani no Naushika",
    "description": "An animated fantasy-adventure. Set 1,000 years from now, the earth is ravaged by pollution and war. In the Valley of the Wind lives Nausicaa, princess of her people. Their land borders on a toxic jungle, filled with dangerous over-sized insects. Meanwhile two nearby nations are bitterly engaged in a war and the Valley of the Wind is stuck in the middle... Written by grantss",
    "rating": 8.1,
    "year": "1984",
    "genres": [
      "Animation",
      "Adventure",
      "Fantasy"
    ],
    "actors": [
      "Sumi Shimamoto",
      "Mahito Tsujimura",
      "Hisako Kyôda"
    ]
  },
  {
    "title": "The Truman Show",
    "description": "In this movie, Truman is a man whose life is a fake one... The place he lives is in fact a big studio with hidden cameras everywhere, and all his friends and people around him, are actors who play their roles in the most popular TV-series in the world: The Truman Show. Truman thinks that he is an ordinary man with an ordinary life and has no idea about how he is exploited. Until one day... he finds out everything. Will he react? Written by Chris Makrozahopoulos <makzax@hotmail.com>",
    "rating": 8.1,
    "year": "1998",
    "genres": [
      "Comedy",
      "Drama",
      "Sci-Fi"
    ],
    "actors": [
      "Jim Carrey",
      "Ed Harris",
      "Laura Linney"
    ]
  },
  {
    "title": "Before Sunrise",
    "description": "American tourist Jesse and French student Celine meet by chance on the train from Budapest to Vienna. Sensing that they are developing a connection, Jesse asks Celine to spend the day with him in Vienna, and she agrees. So they pass the time before his scheduled flight the next morning together. How do two perfect strangers connect so intimately over the course of a single day? What is that special thing that bonds two people so strongly? As their bond turns to love, what will happen to them the next morning when Jesse flies away? Written by randywong70@comcast.net",
    "rating": 8.1,
    "year": "1995",
    "genres": [
      "Drama",
      "Romance"
    ],
    "actors": [
      "Ethan Hawke",
      "Julie Delpy",
      "Andrea Eckert"
    ]
  },
  {
    "title": "The Grapes of Wrath",
    "description": "Tom Joad returns to his home after a jail sentence to find his family kicked out of their farm due to foreclosure. He catches up with them on his Uncles farm, and joins them the next day as they head for California and a new life... Hopefully. Written by Colin Tinto <cst@imdb.com>",
    "rating": 8.1,
    "year": "1940",
    "genres": [
      "Drama",
      "History"
    ],
    "actors": [
      "Henry Fonda",
      "Jane Darwell",
      "John Carradine"
    ]
  },
  {
    "title": "Touch of Evil",
    "description": "Mexican Narcotics officer Ramon Miguel 'Mike' Vargas has to interrupt his honeymoon on the Mexican-US border when an American building contractor is killed after someone places a bomb in his car. He's killed on the US side of the border but it's clear that the bomb was planted on the Mexican side. As a result, Vargas delays his return to Mexico City where he has been mounting a case against the Grandi family crime and narcotics syndicate. Police Captain Hank Quinlan is in charge on the US side and he soon has a suspect, a Mexican named Manolo Sanchez. Vargas is soon onto Quinlan and his Sergeant, Pete Menzies, when he catches them planting evidence to convict Sanchez. With his new American wife, Susie, safely tucked away in a hotel on the US side of the border - or so he thinks - he starts to review Quinlan's earlier cases. While concentrating on the corrupt policeman however, the Grandis have their own plans for Vargas and they start with his wife Susie. Written by garykmcd",
    "rating": 8.1,
    "year": "1958",
    "genres": [
      "Crime",
      "Drama",
      "Film-Noir"
    ],
    "actors": [
      "Charlton Heston",
      "Orson Welles",
      "Janet Leigh"
    ]
  },
  {
    "title": "Annie Hall",
    "description": "Alvy Singer, a forty year old twice divorced, neurotic, intellectual Jewish New York stand-up comic, reflects on the demise of his latest relationship, to Annie Hall, an insecure, flighty, Midwestern WASP aspiring nightclub singer. Unlike his previous relationships, Alvy believed he may have worked out all the issues in his life through fifteen years of therapy to make this relationship with Annie last, among those issues being not wanting to date any woman that would want to date him, and thus subconsciously pushing those women away. Alvy not only reviews the many ups and many downs of their relationship, but also reviews the many facets of his makeup that led to him starting to date Annie. Those facets include growing up next to Coney Island in Brooklyn, being attracted to the opposite sex for as long as he can remember, and enduring years of Jewish guilt with his constantly arguing parents. Written by Huggo",
    "rating": 8.1,
    "year": "1977",
    "genres": [
      "Comedy",
      "Romance"
    ],
    "actors": [
      "Woody Allen",
      "Diane Keaton",
      "Tony Roberts"
    ]
  },
  {
    "title": "Rocky",
    "description": "Rocky Balboa is a struggling boxer trying to make the big time, working as a debt collector for a pittance. When heavyweight champion Apollo Creed visits Philadelphia, his managers want to set up an exhibition match between Creed and a struggling boxer, touting the fight as a chance for a \"nobody\" to become a \"somebody\". The match is supposed to be easily won by Creed, but someone forgot to tell Rocky, who sees this as his only shot at the big time. Written by Murray Chapman <muzzle@cs.uq.oz.au>",
    "rating": 8.1,
    "year": "1976",
    "genres": [
      "Drama",
      "Sport"
    ],
    "actors": [
      "Sylvester Stallone",
      "Talia Shire",
      "Burt Young"
    ]
  },
  {
    "title": "Harry Potter and the Deathly Hallows: Part 2",
    "description": "Harry, Ron, and Hermione continue their quest of finding and destroying the Dark Lord's three remaining Horcruxes, the magical items responsible for his immortality. But as the mystical Deathly Hallows are uncovered, and Voldemort finds out about their mission, the biggest battle begins and life as they know it will never be the same again. Written by Jordan",
    "rating": 8.1,
    "year": "2011",
    "genres": [
      "Adventure",
      "Drama",
      "Fantasy"
    ],
    "actors": [
      "Daniel Radcliffe",
      "Emma Watson",
      "Rupert Grint"
    ]
  },
  {
    "title": "Gandhi",
    "description": "In 1893, Gandhi is thrown off a South African train for being an Indian and traveling in a first class compartment. Gandhi realizes that the laws are biased against Indians and decides to start a non-violent protest campaign for the rights of all Indians in South Africa. After numerous arrests and the unwanted attention of the world, the government finally relents by recognizing rights for Indians, though not for the native blacks of South Africa. After this victory, Gandhi is invited back to India, where he is now considered something of a national hero. He is urged to take up the fight for India's independence from the British Empire. Gandhi agrees, and mounts a non-violent non-cooperation campaign of unprecedented scale, coordinating millions of Indians nationwide. There are some setbacks, such as violence against the protesters and Gandhi's occasional imprisonment. Nevertheless, the campaign generates great attention, and Britain faces intense public pressure. Too weak from World ... Written by gavin (gunmasterM@hotmail.com)",
    "rating": 8.1,
    "year": "1982",
    "genres": [
      "Biography",
      "Drama",
      "History"
    ],
    "actors": [
      "Ben Kingsley",
      "John Gielgud",
      "Candice Bergen"
    ]
  },
  {
    "title": "Drishyam",
    "description": "Vijay Salgaonkar runs a cable TV network in a remote and hilly village of Goa. He lives a happy life with his wife Nandini and two daughters. A 4th grade dropout & an orphan, Vijay has worked his way towards success with his sheer hard-work & street smartness in order to provide for his family who mean the world to him. A man of few means & needs; Vijay believes life is to be lived simplistically - his wife, while she loves him devoutly, wants Vijay's thrifty & miserly behavior to end and wants the world for her family. If there's one thing that Vijay cannot live without, it is his passion for watching films. Such is his 'filmy' obsession that he doesn't mind staying up all night at his office binging on TV movies! In a bizarre turn of events; a teenage boy goes missing; he is the son of a headstrong & no-nonsense cop; IG Meera Deshmukh and the Salgaonkar family is the prime suspect! Will a humble & middle class man, be able to protect his family from oppression of the powerful? How ... Written by Dhruvi Dokania",
    "rating": 8.5,
    "year": "2015",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Ajay Devgn",
      "Shriya Saran",
      "Tabu"
    ]
  },
  {
    "title": "Les diaboliques",
    "description": "The wife and mistress of a sadistic boarding school headmaster plot to kill him. They drown him in the bathtub and dump the body in the school's filthy swimming pool... but when the pool is drained, the body has disappeared - and subsequent reported sightings of the headmaster slowly drive his 'killers' (and the audience) up the wall with almost unbearable suspense... Written by Michael Brooke <michael@everyman.demon.co.uk>",
    "rating": 8.1,
    "year": "1955",
    "genres": [
      "Crime",
      "Drama",
      "Horror"
    ],
    "actors": [
      "Simone Signoret",
      "Véra Clouzot",
      "Paul Meurisse"
    ]
  },
  {
    "title": "The Bourne Ultimatum",
    "description": "Bourne is once again brought out of hiding, this time inadvertently by London-based reporter Simon Ross who is trying to unveil Operation Blackbriar--an upgrade to Project Treadstone--in a series of newspaper columns. Bourne sets up a meeting with Ross and realizes instantly they're being scanned. Information from the reporter stirs a new set of memories, and Bourne must finally, ultimately, uncover his dark past whilst dodging The Company's best efforts in trying to eradicate him. Written by Corey Hatch",
    "rating": 8.1,
    "year": "2007",
    "genres": [
      "Action",
      "Mystery",
      "Thriller"
    ],
    "actors": [
      "Matt Damon",
      "Edgar Ramírez",
      "Joan Allen"
    ]
  },
  {
    "title": "Donnie Darko",
    "description": "Donnie Darko doesn't get along too well with his family, his teachers and his classmates; but he does manage to find a sympathetic friend in Gretchen, who agrees to date him. He has a compassionate psychiatrist, who discovers hypnosis is the means to unlock hidden secrets. His other companion may not be a true ally. Donnie has a friend named Frank - a large bunny which only Donnie can see. When an engine falls off a plane and destroys his bedroom, Donnie is not there. Both the event, and Donnie's escape, seem to have been caused by supernatural events. Donnie's mental illness, if such it is, may never allow him to find out for sure. Written by J. Spurlin",
    "rating": 8.1,
    "year": "2001",
    "genres": [
      "Drama",
      "Sci-Fi",
      "Thriller"
    ],
    "actors": [
      "Jake Gyllenhaal",
      "Jena Malone",
      "Mary McDonnell"
    ]
  },
  {
    "title": "Prisoners",
    "description": "How far would you go to protect your family? Keller Dover is facing every parent's worst nightmare. His six-year-old daughter, Anna, is missing, together with her young friend, Joy, and as minutes turn to hours, panic sets in. The only lead is a dilapidated RV that had earlier been parked on their street. Heading the investigation, Detective Loki arrests its driver, Alex Jones, but a lack of evidence forces his release. As the police pursue multiple leads and pressure mounts, knowing his child's life is at stake the frantic Dover decides he has no choice but to take matters into his own hands. But just how far will this desperate father go to protect his family? Written by Warner Bros. Pictures",
    "rating": 8.1,
    "year": "2013",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Hugh Jackman",
      "Jake Gyllenhaal",
      "Viola Davis"
    ]
  },
  {
    "title": "Monsters, Inc.",
    "description": "A city of monsters with no humans called Monstropolis centers around the city's power company, Monsters, Inc. The lovable, confident, tough, furry blue behemoth-like giant monster named James P. Sullivan (better known as Sulley) and his wisecracking best friend, short, green cyclops monster Mike Wazowski, discover what happens when the real world interacts with theirs in the form of a 2-year-old baby girl dubbed \"Boo,\" who accidentally sneaks into the monster world with Sulley one night. And now it's up to Sulley and Mike to send Boo back in her door before anybody finds out, especially two evil villains such as Sulley's main rival as a scarer, chameleon-like Randall (a monster that Boo is very afraid of), who possesses the ability to change the color of his skin, and Mike and Sulley's boss Mr. Waternoose, the chairman and chief executive officer of Monsters, Inc. Written by Anthony Pereyra {hypersonic91@yahoo.com}",
    "rating": 8.1,
    "year": "2001",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "actors": [
      "Billy Crystal",
      "John Goodman",
      "Mary Gibbs"
    ]
  },
  {
    "title": "8½",
    "description": "Guido is a film director, trying to relax after his last big hit. He can't get a moment's peace, however, with the people who have worked with him in the past constantly looking for more work. He wrestles with his conscience, but is unable to come up with a new idea. While thinking, he starts to recall major happenings in his life, and all the women he has loved and left. An autobiographical film of Fellini, about the trials and tribulations of film making. Written by Colin Tinto <cst@imdb.com>",
    "rating": 8.1,
    "year": "1963",
    "genres": [
      "Drama",
      "Fantasy"
    ],
    "actors": [
      "Marcello Mastroianni",
      "Anouk Aimée",
      "Claudia Cardinale"
    ]
  },
  {
    "title": "The Terminator",
    "description": "A cyborg is sent from the future on a deadly mission. He has to kill Sarah Connor, a young woman whose life will have a great significance in years to come. Sarah has only one protector - Kyle Reese - also sent from the future. The Terminator uses his exceptional intelligence and strength to find Sarah, but is there any way to stop the seemingly indestructible cyborg ? Written by Colin Tinto <cst@imdb.com>",
    "rating": 8,
    "year": "1984",
    "genres": [
      "Action",
      "Sci-Fi"
    ],
    "actors": [
      "Arnold Schwarzenegger",
      "Linda Hamilton",
      "Michael Biehn"
    ]
  },
  {
    "title": "Catch Me If You Can",
    "description": "New Rochelle, the 1960s. High schooler Frank Abagnale Jr. idolizes his father, who's in trouble with the IRS. When his parents separate, Frank runs away to Manhattan with $25 in his checking account, vowing to regain dad's losses and get his parents back together. Just a few years later, the FBI tracks him down in France; he's extradited, tried, and jailed for passing more than $4,000,000 in bad checks. Along the way, he's posed as a Pan Am pilot, a pediatrician, and an attorney. And, from nearly the beginning of this life of crime, he's been pursued by a dour FBI agent, Carl Hanratty. What starts as cat and mouse becomes something akin to father and son. Written by <jhailey@hotmail.com>",
    "rating": 8,
    "year": "2002",
    "genres": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "actors": [
      "Leonardo DiCaprio",
      "Tom Hanks",
      "Christopher Walken"
    ]
  },
  {
    "title": "The Wizard of Oz",
    "description": "In this charming film based on the popular L. Frank Baum stories, Dorothy and her dog Toto are caught in a tornado's path and somehow end up in the land of Oz. Here she meets some memorable friends and foes in her journey to meet the Wizard of Oz who everyone says can help her return home and possibly grant her new friends their goals of a brain, heart and courage. Written by Dale Roloff",
    "rating": 8.1,
    "year": "1939",
    "genres": [
      "Adventure",
      "Family",
      "Fantasy"
    ],
    "actors": [
      "Judy Garland",
      "Frank Morgan",
      "Ray Bolger"
    ]
  },
  {
    "title": "The Message",
    "description": "In the 7th century, Mohammed is visited by Angel Gabriel who urges him to lead the people of Mecca and worship God. But they're exiled in Medina before returning to Mecca to take up arms against their oppressors and liberate their city in the name of God. Written by Anonymous",
    "rating": 8.3,
    "year": "1976",
    "genres": [
      "Adventure",
      "Biography",
      "Drama"
    ],
    "actors": [
      "Anthony Quinn",
      "Irene Papas",
      "Michael Ansara"
    ]
  },
  {
    "title": "Groundhog Day",
    "description": "A weather man is reluctantly sent to cover a story about a weather forecasting \"rat\" (as he calls it). This is his fourth year on the story, and he makes no effort to hide his frustration. On awaking the 'following' day he discovers that it's Groundhog Day again, and again, and again. First he uses this to his advantage, then comes the realisation that he is doomed to spend the rest of eternity in the same place, seeing the same people do the same thing EVERY day. Written by Rob Hartill",
    "rating": 8,
    "year": "1993",
    "genres": [
      "Comedy",
      "Fantasy",
      "Romance"
    ],
    "actors": [
      "Bill Murray",
      "Andie MacDowell",
      "Chris Elliott"
    ]
  },
  {
    "title": "Arrival",
    "description": "When mysterious spacecraft touch down across the globe, an elite team - led by expert linguist Louise Banks - is brought together to investigate. As mankind teeters on the verge of global war, Banks and the team race against time for answers - and to find them, she will take a chance that could threaten her life, and quite possibly humanity.",
    "rating": 8.1,
    "year": "2016",
    "genres": [
      "Drama",
      "Mystery",
      "Sci-Fi"
    ],
    "actors": [
      "Amy Adams",
      "Jeremy Renner",
      "Forest Whitaker"
    ]
  },
  {
    "title": "John Wick: Chapter 2",
    "description": "After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.",
    "rating": 8.2,
    "year": "2017",
    "genres": [
      "Action",
      "Crime",
      "Thriller"
    ],
    "actors": [
      "Keanu Reeves",
      "Riccardo Scamarcio",
      "Ian McShane"
    ]
  },
  {
    "title": "Twelve Monkeys",
    "description": "An unknown and lethal virus has wiped out five billion people in 1996. Only 1% of the population has survived by the year 2035, and is forced to live underground. A convict (James Cole) reluctantly volunteers to be sent back in time to 1996 to gather information about the origin of the epidemic (who he's told was spread by a mysterious \"Army of the Twelve Monkeys\") and locate the virus before it mutates so that scientists can study it. Unfortunately Cole is mistakenly sent to 1990, six years earlier than expected, and is arrested and locked up in a mental institution, where he meets Dr. Kathryn Railly, a psychiatrist, and Jeffrey Goines, the insane son of a famous scientist and virus expert. Written by Giancarlo Cairella <vertigo@imdb.com>",
    "rating": 8,
    "year": "1995",
    "genres": [
      "Mystery",
      "Sci-Fi",
      "Thriller"
    ],
    "actors": [
      "Bruce Willis",
      "Madeleine Stowe",
      "Brad Pitt"
    ]
  },
  {
    "title": "La haine",
    "description": "The film follows three young men and their time spent in the French suburban \"ghetto,\" over a span of twenty-four hours. Vinz, a Jew, Saïd, an Arab, and Hubert, a black boxer, have grown up in these French suburbs where high levels of diversity coupled with the racist and oppressive police force have raised tensions to a critical breaking point. During the riots that took place a night before, a police officer lost his handgun in the ensuing madness, only to leave it for Vinz to find. Now, with a newfound means to gain the respect he deserves, Vinz vows to kill a cop if his friend Abdel dies in the hospital, due the beating he received while in police custody. Written by b4arr2y",
    "rating": 8.1,
    "year": "1995",
    "genres": [
      "Crime",
      "Drama"
    ],
    "actors": [
      "Vincent Cassel",
      "Hubert Koundé",
      "Saïd Taghmaoui"
    ]
  },
  {
    "title": "Barry Lyndon",
    "description": "In the Eighteenth Century, in a small village in Ireland, Redmond Barry is a young farm boy in love with his cousin Nora Brady. When Nora gets engaged to the British Captain John Quin, Barry challenges him to a duel of pistols. He wins and escapes to Dublin but is robbed on the road. Without an alternative, Barry joins the British Army to fight in the Seven Years War. He deserts and is forced to join the Prussian Army where he saves the life of his captain and becomes his protégé and spy of the Irish gambler Chevalier de Balibari. He helps Chevalier and becomes his associate until he decides to marry the wealthy Lady Lyndon. They move to England and Barry, in his obsession of nobility, dissipates her fortune and makes a dangerous and revengeful enemy. Written by Claudio Carvalho, Rio de Janeiro, Brazil",
    "rating": 8.1,
    "year": "1975",
    "genres": [
      "Adventure",
      "Drama",
      "History"
    ],
    "actors": [
      "Ryan O'Neal",
      "Marisa Berenson",
      "Patrick Magee"
    ]
  },
  {
    "title": "Jaws",
    "description": "It's a hot summer on Amity Island, a small community whose main business is its beaches. When new Sheriff Martin Brody discovers the remains of a shark attack victim, his first inclination is to close the beaches to swimmers. This doesn't sit well with Mayor Larry Vaughn and several of the local businessmen. Brody backs down to his regret as that weekend a young boy is killed by the predator. The dead boy's mother puts out a bounty on the shark and Amity is soon swamped with amateur hunters and fisherman hoping to cash in on the reward. A local fisherman with much experience hunting sharks, Quint, offers to hunt down the creature for a hefty fee. Soon Quint, Brody and Matt Hooper from the Oceanographic Institute are at sea hunting the Great White shark. As Brody succinctly surmises after their first encounter with the creature, they're going to need a bigger boat. Written by garykmcd",
    "rating": 8,
    "year": "1975",
    "genres": [
      "Adventure",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Roy Scheider",
      "Robert Shaw",
      "Richard Dreyfuss"
    ]
  },
  {
    "title": "Mou gaan dou",
    "description": "Chan Wing Yan, a young police officer, has been sent undercover as a mole in the local mafia. Lau Kin Ming, a young mafia member, infiltrates the police force. Years later, their older counterparts, Chen Wing Yan and Inspector Lau Kin Ming, respectively, race against time to expose the mole within their midst. Written by Aya",
    "rating": 8.1,
    "year": "2002",
    "genres": [
      "Crime",
      "Drama",
      "Mystery"
    ],
    "actors": [
      "Andy Lau",
      "Tony Leung Chiu-Wai",
      "Anthony Chau-Sang Wong"
    ]
  },
  {
    "title": "Zootopia",
    "description": "From the largest elephant to the smallest shrew, the city of Zootopia is a mammal metropolis where various animals live and thrive. When Judy Hopps becomes the first rabbit to join the police force, she quickly learns how tough it is to enforce the law. Determined to prove herself, Judy jumps at the opportunity to solve a mysterious case. Unfortunately, that means working with Nick Wilde, a wily fox who makes her job even harder. Written by Jwelch5742",
    "rating": 8.1,
    "year": "2016",
    "genres": [
      "Animation",
      "Adventure",
      "Comedy"
    ],
    "actors": [
      "Ginnifer Goodwin",
      "Jason Bateman",
      "Idris Elba"
    ]
  },
  {
    "title": "The Best Years of Our Lives",
    "description": "The story concentrates on the social re-adjustment of three World War II servicemen, each from a different station of society. Al Stephenson returns to an influential banking position, but finds it hard to reconcile his loyalties to ex-servicemen with new commercial realities. Fred Derry is an ordinary working man who finds it difficult to hold down a job or pick up the threads of his marriage. Having had both hands burnt off during the war, Homer Parrish is unsure that his fiancée's feelings are still those of love and not those of pity. Each of the veterans faces a crisis upon his arrival, and each crisis is a microcosm of the experiences of many American warriors who found an alien world awaiting them when they came marching home. Written by alfiehitchie",
    "rating": 8.1,
    "year": "1946",
    "genres": [
      "Drama",
      "Romance",
      "War"
    ],
    "actors": [
      "Fredric March",
      "Dana Andrews",
      "Myrna Loy"
    ]
  },
  {
    "title": "La battaglia di Algeri",
    "description": "A film commissioned by the Algerian government that shows the Algerian revolution from both sides. The French foreign legion has left Vietnam in defeat and has something to prove. The Algerians are seeking independence. The two clash. The torture used by the French is contrasted with the Algerian's use of bombs in soda shops. A look at war as a nasty thing that harms and sullies everyone who participates in it. Written by John Vogel <jlvogel@comcast.net>",
    "rating": 8.1,
    "year": "1966",
    "genres": [
      "Drama",
      "War"
    ],
    "actors": [
      "Brahim Hadjadj",
      "Jean Martin",
      "Yacef Saadi"
    ]
  },
  {
    "title": "Dog Day Afternoon",
    "description": "Based upon a real-life story that happened in the early seventies in which the Chase Manhattan Bank in Gravesend, Brooklyn, was held siege by a gay bank robber determined to steal enough money for his male lover to undergo a sex change operation. On a hot summer afternoon, the First Savings Bank of Brooklyn is held up by Sonny and Sal, two down-and-out characters. Although the bank manager and female tellers agree not to interfere with the robbery, Sonny finds that there's actually nothing much to steal, as most of the cash has been picked up for the day. Sonny then gets an unexpected phone call from Police Captain Moretti, who tells him the place is surrounded by the city's entire police force. Having few options under the circumstances, Sonny nervously bargains with Moretti, demanding safe escort to the airport and a plane out of the country in return for the bank employees' safety. Written by alfiehitchie",
    "rating": 8,
    "year": "1975",
    "genres": [
      "Biography",
      "Crime",
      "Drama"
    ],
    "actors": [
      "Al Pacino",
      "John Cazale",
      "Penelope Allen"
    ]
  },
  {
    "title": "Strangers on a Train",
    "description": "Bruno Anthony thinks he has the perfect plot to rid himself of his hated father and when he meets tennis player Guy Haines on a train, he thinks he's found the partner he needs to pull it off. His plan is relatively simple. Two strangers each agree to kill someone the other person wants disposed of. For example, Guy could kill his father and he could get rid of Guy's wife Miriam, freeing him to marry Anne Morton, the beautiful daughter of a U.S. Senator. Guy dismisses it all out of hand but Bruno goes ahead with his half of the 'bargain' and disposes of Miriam. When Guy balks, Bruno makes it quite clear that he will plant evidence to implicate Guy in her murder if he doesn't get rid of his father. Guy had also made some unfortunate statements about Miriam after she had refused him a divorce. It all leads the police to believe Guy is responsible for the murder, forcing him to deal with Bruno's mad ravings. Written by garykmcd",
    "rating": 8.1,
    "year": "1951",
    "genres": [
      "Crime",
      "Film-Noir",
      "Thriller"
    ],
    "actors": [
      "Farley Granger",
      "Robert Walker",
      "Ruth Roman"
    ]
  },
  {
    "title": "The Help",
    "description": "Set in Mississippi during the 1960s, Skeeter (Stone) is a southern society girl who returns from college determined to become a writer, but turns her friends' lives -- and a Mississippi town -- upside down when she decides to interview the black women who have spent their lives taking care of prominent southern families. Aibileen (Davis), Skeeter's best friend's housekeeper, is the first to open up -- to the dismay of her friends in the tight-knit black community. Despite Skeeter's life-long friendships hanging in the balance, she and Aibileen continue their collaboration and soon more women come forward to tell their stories -- and as it turns out, they have a lot to say. Along the way, unlikely friendships are forged and a new sisterhood emerges, but not before everyone in town has a thing or two to say themselves when they become unwittingly -- and unwillingly -- caught up in the changing times. Written by Walt Disney Pictures",
    "rating": 8.1,
    "year": "2011",
    "genres": [
      "Drama"
    ],
    "actors": [
      "Emma Stone",
      "Viola Davis",
      "Octavia Spencer"
    ]
  },
  {
    "title": "Gangs of Wasseypur",
    "description": "Shahid Khan is exiled after impersonating the legendary Sultana Daku in order to rob British trains. Now outcast, Shahid becomes a worker at Ramadhir Singh's colliery, only to spur a revenge battle that passes on to generations. At the turn of the decade, Shahid's son, the philandering Sardar Khan vows to get his father's honor back, becoming the most feared man of Wasseypur. Written by anonymous",
    "rating": 8.3,
    "year": "2012",
    "genres": [
      "Action",
      "Crime",
      "Drama"
    ],
    "actors": [
      "Manoj Bajpayee",
      "Richa Chadha",
      "Nawazuddin Siddiqui"
    ]
  },
  {
    "title": "Sin City",
    "description": "Four tales of crime adapted from Frank Miller's popular comics, focusing around a muscular brute who's looking for the person responsible for the death of his beloved Goldie, a man fed up with Sin City's corrupt law enforcement who takes the law into his own hands after a horrible mistake, a cop who risks his life to protect a girl from a deformed pedophile, and a hitman looking to make a little cash. Written by Tom Benton",
    "rating": 8,
    "year": "2005",
    "genres": [
      "Crime",
      "Thriller"
    ],
    "actors": [
      "Mickey Rourke",
      "Clive Owen",
      "Bruce Willis"
    ]
  },
  {
    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "description": "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made. Written by the lexster",
    "rating": 8,
    "year": "2003",
    "genres": [
      "Action",
      "Adventure",
      "Fantasy"
    ],
    "actors": [
      "Johnny Depp",
      "Geoffrey Rush",
      "Orlando Bloom"
    ]
  },
  {
    "title": "PK",
    "description": "P. K. is a comedy of ideas about a stranger in the city, who asks questions that no one has asked before. They are innocent, child-like questions, but they bring about catastrophic answers. People who are set in their ways for generations, are forced to reappraise their world when they see it from PK's innocent eyes. In the process PK makes loyal friends and powerful foes. Mends broken lives and angers the establishment. P. K.'s childlike curiosity transforms into a spiritual odyssey for him and millions of others. The film is an ambitious and uniquely original exploration of complex philosophies. It is also a simple and humane tale of love, laughter and letting-go. Finally, it is a moving saga about a friendship between strangers from worlds apart. Written by Abhijat Joshi",
    "rating": 8.2,
    "year": "2014",
    "genres": [
      "Comedy",
      "Drama",
      "Romance"
    ],
    "actors": [
      "Aamir Khan",
      "Anushka Sharma",
      "Sanjay Dutt"
    ]
  },
  {
    "title": "The Imitation Game",
    "description": "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II. Written by Studio Canal",
    "rating": 8.1,
    "year": "2014",
    "genres": [
      "Biography",
      "Drama",
      "Thriller"
    ],
    "actors": [
      "Benedict Cumberbatch",
      "Keira Knightley",
      "Matthew Goode"
    ]
  }
]
export default movies