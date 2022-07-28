const data = {
    "situations": [
        {
            "id": 0,
            "description": "You're home alone on Uranik when...",
            "options": [
                {
                    "description": "A capsule breaks the window",
                    "fail": {
                        "damage": 1,
                        "description": "The capsule hits your head and falls to the floor."
                    },
                    "success": {
                        "bonus": 5,
                        "description": "you read the capsule"
                    }
                },
                {
                    "description": "You read the letter inside the capsule",
                    "fail": {
                        "damage": 3,
                        "description": "You are warned of a new Wyknon invasion"
                    },
                    "success": {
                        "bonus": 8,
                        "description": "You are warned of a new Wyknon invasion by a companion and he asks for your help!"
                    }
                }
            ]
        },
        {
            "id": 1,
            "description": "You travel to Niuk Town",
            "options": [
                {
                    "description": "You meet your friend and talk about the Wyknon invasion",
                    "fail": {
                        "damage": 20,
                        "description": "A Wyknon jumps on your back!"
                    },
                    "success": {
                        "bonus": 12,
                        "description": "A Wyknon jumps on your back, but you knock him down and kill him!"
                    }
                },
                {
                    "description": "You scream for all civilians to seek shelter...",
                    "fail": {
                        "damage": 12,
                        "description": "You are ignored by the people who laugh at you"
                    },
                    "success": {
                        "bonus": 10,
                        "description": "Civilians seek shelter as fast as they can!"
                    }
                }
            ]
        },
        {
            "id": 2,
            "description": "You decide to join the Kretys campaign with your friend and head to the Wyknons cave.",
            "options": [
                {
                    "description": "You enter the Wyknon Den",
                    "fail": {
                        "damage": 50,
                        "description": "After a brave fight, and losing several companions, you lose one of your eyes..."
                    },
                    "success": {
                        "bonus": 40,
                        "description": "After a brave fight, and losing several companions, you reach the queen's chamber"
                    }
                },
                {
                    "description": "You see the queen sleeping...",
                    "fail": {
                        "damage": 50,
                        "description": "With just one blow you crush the Queen Wyknon's skull!"
                    },
                    "success": {
                        "bonus": 1000,
                        "description": "You prepare a blow, but the queen awakens"
                    }
                }
            ]
        },    
            {
            "id": 3,
            "description": "You return to Uranik, to your home",
            "options": [
                {
                    "description": "You celebrate the victory...",
                    "fail": {
                        "damage": 100,
                        "description": "You cough a lot and discover you've been infected with Wyknon blood through the injury to your eye..."
                    },
                    "success": {
                        "bonus": 1,
                        "description": "After many years you get married, have children and live a happy life until old age, when you disover a disease..."
                    }
                },
                {
                    "description": "Illness takes over your body and you die",
                    "fail": {
                        "damage": 1000,
                        "description": "From your dead body a new queen is born!"
                    },
                    "success": {
                        "bonus": 1000,
                        "description": "You will always be remembered as a hero and a statue is built in your honor!"
                    }
                }
            ]
        }
    ]
}