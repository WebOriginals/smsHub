import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(LanguageDetector)
    .init({
        debug: false,
        fallbackLng: 'ru',
        resources: {
            en: {
                translation: {
                    header:{
                        link_1: 'Become a partner',
                        link_2: 'FAQ',
                    },
                    secFirst:{
                        title: '<span>EARN </span> ON SIM CARDS',
                        description: 'Your numbers will be sold on the largest SMS activation service, '
                            +'which will allow you to make a  <span>profit of up to 75% from the first minutes after the equipment full connection.</span>',
                        textBtn: 'Make a request',
                    },
                    howItWorks: {
                        mainDescription: {
                            title: 'How <span>does it work</span>?',
                            description: 'Every time when users from all over the world'
                            + 'receive codes for registration on millions of services from “Amazon”'
                            + 'and “Nike” to “Facebook” and “Telegram” through your SIM cards every day,'
                            + ' <b>you get money for that.</b>'
                            + '<br> <br> All repetitive and monotonous actions have been automotized by our software, due to which'
                            + '<b>everything you will need to do is to control your SIM cards replacement.</b>'
                        },
                        firstDescription: {
                            title: 'Make a request and get your equipment connected',
                            description: 'Our manager will consult you on any questions that you are interested in, they wil'
                            + ' tell you where to buy and how to set the equipment.'
                        },
                        secondDescription: {
                            title: 'Replace SIM cards in the system and earn',
                            description: 'On average <b> aa SIM card can earn up to 60 rubles per 12 hours. </b>'
                            + 'Clients purchase numbers and you get 75% of their spendings. The more cards you have the higher is your income.'
                        },
                        thirdDescription: {
                            title: 'Get earned money',
                            description: 'Earned money can be withdrawn to a bank card, e-wallet, crypto wallet or other '
                                + 'ways. The minimum amount for withdrawal is 250 rubles.'
                        },
                    },
                    basicFigures: {
                        title: '<span>Main</span> figures',
                        columnFirst: 'partners connected per 1 year',
                        columnSecond: 'partner’s average income per month',
                        columnThird: 'clients are on SMSHUB service',
                        columnFourth: 'is partners average income per a year',
                    },
                    map: {
                        title: '<span>Our</span> Geo',
                        description: 'We can work with any country, any operator and any amount of numbers',
                        titleList: '<span>TOP-10</span> <br>of Agent Countries by earning for the previous day',

                    },
                    mainForm: {
                        title: 'Become <span>SMSHUB partner</span>',
                        description: '<b>Don’t waste time and money on work with websites and coding,</b> '
                            + ' as we are concentrating on your business tasks. That’s why we have created a simple,'
                            + 'convenient and effective platform for earning on SIM cards<br> '
                            + '<span> <b>Just fill out the form and send a request for connecting</b></span>',
                        labelName: 'Your name*',
                        labelEmail: 'Your e-mail*',
                        labelTelegram: 'Telegram*',
                        labelSelectedCountry: 'Countries of SIM cards use',
                        labelSelectedEquipment: 'What equipment do you have?',
                        labelQuantityPorts: 'Number of ports',
                        textBtn: 'Submit',
                    },
                    ask: {
                        title: '<span>FAQ</span>',
                        firstSpoller: {
                            title: 'What equipment to choose and where to buy it?',
                            description: '<p>To work with us, you can use GSM modems, GoIP and single-SIM 3G'
                                + ' modems. There is also a possibility to cooperate through API.</p>'
                        },
                        secondSpoller: {
                            title: 'Where to buy SIM cards?',
                            description: '<p>Unfortunately, we are not dealing with the purchase of SIM cards.'
                                + ' If you want to cooperate with us, it means that you already have a communication channel for buying SIM cards.</p>',
                        },
                        thirdSpolller: {
                            title: 'What is an average income per month?',
                            description: '<p>This type of activity is not prohibited by law in the Russian Federation.'
                            + '<br> If you live in another country, then we recommend checking the legislation of your'
                            +' country in the field of using the mobile network and precisely the sections related to the receiving incoming SMS.</p>',
                        },
                        fourthSpolller: {
                            title: 'Is it really safe?',
                            description: '<p>No. We programmatically restrict access to such resources.</p>',
                        },
                        fifthSpolller: {
                            title: 'What is the income from one SIM card?',
                            description: '<p>To look at the level of income from one SIM card. please follow the link <a href="https://smshub.org/partners">https://smshub.org/partners</a>'
                                + '<br><br> The sum is calculated regarding our commission, but the SIM cards purchase price wasn’t counted.'
                                + '<br><br> Income depends on the market conjuncture, SIM cards quality and current supply/demand of numbers for services.'
                                + 'You can see how income has been changing during the period you are interested in. On average a SIM card gets a full '
                                +' check for 24-96 hours of work. This is the period when most of its services are sold. After that you need to replace it with a new one.</p>',
                        },
                    },
                    footer: {
                        linksTop: {
                            link_1: 'Become a partner',
                            link_2: 'FAQ',
                        },
                        linkBottom: {
                            link_1: 'Project Rules',
                            link_2: 'Public offer',
                            link_3: 'Service Regulations',
                        },
                        textSocialNetwork: 'Contact us:'
                    },
                    modal: {
                        title: 'Application',
                        subtitle: 'Please fill in all the fields below',
                        secondTitle: 'What equipment will you use?',
                        radioBtn: {
                            radio_1: 'GSM gateway',
                            radio_2: 'I don\'t have the equipment',
                            radio_3: 'Providing numbers via API',
                        },
                        textBtn: 'Send'
                    }
                }
            },
            ru: {
                translation: {
                    header:{
                        link_1: 'Стать партнёром',
                        link_2: 'Вопрос/Ответ',
                    },
                    secFirst:{
                        title: '<span>ЗАРАБАТЫВАЙ </span> НА СИМ-КАРТАХ',
                        description: 'Ваши номера будут продаваться на самом крупном сервисе смс активаций,'
                            + ' что позволит получать <span>прибыль до 75% с первых минут после полного подключения.</span>',
                        textBtn: 'оставь заявку',
                    },
                    howItWorks: {
                        mainDescription: {
                            title: 'Как <span>это работает</span>?',
                            description: 'Каждый раз, когда пользователи со всего мира ежедневно принимают коды для регистрации'
                                + 'на миллионах сервисах от “Пятерочки” и “Nike” до “Facebook” и “Telegram” через ваши SIM-карты'
                                + ' <b>вы получаете за это деньги.</b> <br> <br>'
                                + 'Все занудные и повторяющиеся действия мы авторизовали в нашем ПО, благодаря которому'
                                + ' <b>Вам нужно будет только контролировать замену своих СИМ карт.</b>'
                        },
                        firstDescription: {
                            title: 'Оставьте заявку и подключите оборудование',
                            description: 'Менеджер проконсультирует по всем интересующим вопросам, подскажет где купить'
                                + ' и полностью настроит обородувание'
                        },
                        secondDescription: {
                            title: 'Меняйте SIM-карты в системе и зарабатывайте',
                            description: 'В среднем за <b>12 часов сим-карта может заработать до 60 рублей.</b>  '
                            + 'Клиенты покупают номера, а вы получаете до 75% от их покупок. Чем больше карт- тем больше прибыль.'
                        },
                        thirdDescription: {
                            title: 'Получайте заработанные средства',
                            description: 'Заработанные средства выводятся на банковскую карту, электронный или '
                                + 'криптокошелек и другими способами. Минимальная сумма вывода 250р'
                        },
                    },
                    basicFigures: {
                        title: '<span>Основные</span> цифры',
                        columnFirst: 'подключено партнёров за 1 год',
                        columnSecond: 'средний доход партнера за 1 месяц',
                        columnThird: 'Клиентов на сервисе Smshub',
                        columnFourth: 'средний доход партнера за 1 год',
                    },
                    map: {
                        title: '<span>Наша</span> география',
                        description: 'Можем работать с любой страной, любым оператором и любым объёмом.',
                        titleList: '<span>ТОП-10</span> <br>стран-агентов по заработку предыдущего дня'
                    },
                    mainForm: {
                        title: 'Стать партнёром <span>SMSHUB</span>',
                        description: '<b>Не тратьте время и деньги на работу с сайтами и кодированием</b> — мы сосредоточены на задачах вашего бизнеса и'
                        + ' поэтому создали простую, удобную и эффективную платформу для заработка на сим-картах. <br> <span> <b>Просто заполните форму'
                        + ' и отправьте заявку на подключение</b></span>',
                        labelName: 'Ваше имя',
                        labelEmail: 'Ваш e-mail*',
                        labelTelegram: 'Телеграм*',
                        labelSelectedCountry: 'Страны использования sim-карт',
                        labelSelectedEquipment: 'Какое у вас оборудование?',
                        labelQuantityPorts: 'Количество портов',
                        textBtn: 'отправить заявку',
                    },
                    ask: {
                        title: 'Часто задаваемые <span>вопросы</span>',
                        firstSpoller: {
                            title: 'Какое оборудование и где купить?',
                            description: '<p>Для работы с нами можно использовать GSM модемы, GoIP и 3g модемы (односимочные).'
                                + 'Так же есть возможность сотрудничества по API.</p>'
                        },
                        secondSpoller: {
                            title: 'Где купить симкарты?',
                            description: '<p>К сожалению, но сами мы не занимаемся покупкой сим-карт.'
                                + 'Сотрудничество с нами - подразумевает, что у вас уже есть канал связи для покупки сим-карт.</p>',
                        },
                        thirdSpolller: {
                            title: ' Какой заработок, в целом, за месяц?',
                            description: '<p>Все зависит от страны сим-карт, которые Вы планируете предоставлять.'
                                + 'Со средним заработком можете ознакомится на нашем лэндинге (ссылка)</p>',
                        },
                        fourthSpolller: {
                            title: 'На сколько это безопасно?',
                            description: '<p>На территории РФ, данный вид деятельности - не запрещен законом.'
                                + 'Если вы проживаете в другой стране, то рекомендуем проверить законодательство'
                                + ' вашей страны в сфере использования мобильной сети - именно разделы, связанные с приемом входящих смс.</p>',
                        },
                        fifthSpolller: {
                            title: 'Какой заработок одной симкарты?',
                            description: '<p>Для просмотра уровня прибыли с одной SIM-карты перейдите по ссылке: <a href="https://smshub.org/partners">https://smshub.org/partners</a>'
                            + '<br><br> Сумма рассчитана уже с вычетом нашей комиссии, но без учета закупочной цены самих сим-карт'
                            + '<br><br> Заработок зависит от конъюнктуры рынка, качества SIM-карт и текущего спроса/предложения номеров на сервисы.\n'
                            + '<br><br> Можете посмотреть как менялся заработок от интересуемого Вами периода.\n'
                            + 'В среднем, сим карта набирает полный чек за 24-96 часов работы, за этот период времени распродается большинство сервисов на ней. После этого ее необходимо заменить на новую.</p>',
                        },
                    },
                    footer: {
                        linksTop: {
                            link_1: 'Стать партнёром',
                            link_2: 'Вопрос/Ответ',
                        },
                        linkBottom: {
                            link_1: 'Правла проекта',
                            link_2: 'Публичная оферта',
                            link_3: 'Положение о сервисе',
                        },
                        textSocialNetwork: 'напишите нам:'
                    },
                    modal: {
                        title: 'Заявка',
                        subtitle: 'Пожалуйста, заполните все поля ниже',
                        secondTitle: 'Какое оборудование будете использовать?',
                        radioBtn: {
                            radio_1: 'GSM шлюз',
                            radio_2: 'У меня нет оборудования',
                            radio_3: 'Предоставление номеров по API',
                        },
                        textBtn: 'отправить заявку'
                    }
                }
            }
        }
    });

export default function (app) {
    app.use(I18NextVue, { i18next })
    return app
}
