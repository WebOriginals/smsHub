import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'ru',
        resources: {
            en: {
                translation: {
                    header:{
                        link_1: 'Become a partner',
                        link_2: 'Question/Answer',
                    },
                    secFirst:{
                        title: '<span>EARN MONEY </span> ON SIM CARDS',
                        description: 'Your numbers will be sold on the largest sms activation service,'
                            +'what will allow you to receive <span> profit up to 75% from the first minutes after full connection.</span>',
                        textBtn: 'leave a request',
                    },
                    howItWorks: {
                        mainDescription: {
                            title: 'How <span>it works</span>?',
                            description: 'Every time users from all over the world accept codes for registration every day'
                            + 'on millions of services from Pyaterochka and Nike to Facebook and Telegram via your SIM cards'
                            + ' <b>you get paid for it.</b> <br> <br>'
                            + 'We have authorized all boring and repetitive actions in our software, thanks to which'
                            + ' <b>You will only need to control the replacement of your SIM cards.</b>'
                        },
                        firstDescription: {
                            title: 'Leave a request and connect the equipment',
                            description: 'The manager will consult on all questions of interest, tell you where'
                            + ' to buy and fully configure the equipment'
                        },
                        secondDescription: {
                            title: 'Change SIM cards in the system and earn',
                            description: 'On average, <b> a SIM card can earn up to 60 rubles in 12 hours. </b>'
                                + 'Клиенты покупают номера, а вы получаете до 75% от их покупок. Чем больше карт- тем больше прибыль.'
                        },
                        thirdDescription: {
                            title: 'Get the earned funds',
                            description: 'The earned funds are withdrawn to a bank card, electronic or '
                                + 'crypto wallet and other ways. The minimum withdrawal amount is 250 rubles'
                        },
                    },
                    basicFigures: {
                        title: '<span>Main</span> numbers',
                        columnFirst: 'partners connected in 1 year',
                        columnSecond: 'partner\'s average income for 1 month',
                        columnThird: 'Clients on the Sms hub service',
                        columnFourth: 'partner\'s average income for 1 year',
                    },
                    map: {
                        title: '<span>Our</span> geography',
                        description: 'We can work with any country, any operator and any volume.',
                        titleList: '<span>TOP-10</span> <br>countries-agents for earnings of the previous day'
                    },
                    mainForm: {
                        title: 'Become a partner <span>SMSHUB</span>',
                        description: '<b>Don\'t waste time and money working with websites and coding</b> — we are focused on the tasks of your business and'
                            + ' therefore, we have created a simple, convenient and effective platform for earning money on SIM cards. <br> <span> <b>Just fill out the form'
                            + ' and send a request to connect</b></span>',
                        labelName: 'Your name*',
                        labelEmail: 'Your e-mail*',
                        labelTelegram: 'Telegram*',
                        labelSelectedCountry: 'Countries where SIM cards are used',
                        labelSelectedEquipment: 'What kind of equipment do you have?',
                        labelQuantityPorts: 'Number of ports',
                        textBtn: 'leave a request',
                    },
                    ask: {
                        title: 'Frequently Asked <span>Questions</span>',
                        firstSpoller: {
                            title: 'What kind of equipment is needed for the farm?',
                            description: '<ul>'
                                + '<li>USB modems: Huawei E3372H-153, E3372H-607;</li>'
                                + '<li>USB hubs: industrial ORICO, Bipolar, or analogs based on a power supply of 10 watts per 1 port;</li>'
                                + '<li>Dedicated server for working only with mobile proxies;</li>'
                                + '<li>OS Windows 10 x64 Pro, 4-core processor or higher, RAM from 4GB; SSD;</li>'
                                + '<li>Installed Anydesk for remote access;</li>'
                                + '<li>Connected wired internet with dedicated static IP;</li>'
                                + '</ul>'
                        },
                        secondSpoller: {
                            title: 'How many modems do I need to start?',
                            description: 'From 10 to 30. If there are more modems, then their use is coordinated individually depending on geolocation.',
                        },
                        thirdSpolller: {
                            title: 'What tariff is required on SIM cards?',
                            description: 'SIM cards with unlimited tariffs with the possibility of distributing the Internet.',
                        },
                        fourthSpolller: {
                            title: 'Can traffic from SIM cards be used in illegal activities?',
                            description: 'No. We programmatically restrict access to such resources.',
                        },
                        fifthSpolller: {
                            title: 'How is the withdrawal of funds carried out?',
                            description: '<p>Withdrawal of funds is carried out at any time in the personal account and is available for the following systems: </p>'
                                + '<br> <ul>'
                                + '<li>Sberbank of the Russian Federation — 2%, minimum withdrawal amount - 51,000₽</li>'
                                + '<li>inkoff — 2%, minimum withdrawal amount - 51,000₽</li>'
                                + '<li>PerfectMoney — 0%, minimum withdrawal amount - 250₽</li>'
                                + '<li>Payeer — 2%, minimum withdrawal amount - 5,000₽</li>'
                                + '<li>FreeKassa Wallet — 1%, minimum withdrawal amount - 250₽</li>'
                                + '<li>AdvCash — 3%, minimum withdrawal amount - 50,000₽</li>'
                                + '<li>Bitcoin — 3%, minimum withdrawal amount - 10,000₽</li>'
                                + '<li>Tether USDT TRC-20 - 2%, minimum withdrawal amount - 10,000₽</li>'
                                + '</ul>',
                        },
                    },
                    footer: {
                        linksTop: {
                            link_1: 'Become a partner',
                            link_2: 'Question/Answer',
                        },
                        linkBottom: {
                            link_1: 'Project Rules',
                            link_2: 'Public offer',
                            link_3: 'Service Regulations',
                        },
                        textSocialNetwork: 'write to us:'
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
                            title: 'Какое оборудование нужно для фермы?',
                            description: '<ul>'
                            + '<li>USB-модемы: Huawei e3372h-153, e3372h-607;</li>'
                            + '<li>USB-хабы: промышленные ORICO, Sipolar, или аналоги из расчета питания 10 ватт на 1 порт;</li>'
                            + '<li>Выделенный сервер под работу только с мобильными прокси;</li>'
                            + '<li>ОС Windows 10x64 Pro, 4-х ядерный процессор или выше, RAM от 4GB; SSD;</li>'
                            + '<li>Установленный Anydesk для удаленного доступа;</li>'
                            + '<li>Подключенный проводной интернет с выделенным статическим IP;</li>'
                            + '</ul>'
                        },
                        secondSpoller: {
                            title: 'Какое количество модемов нужно для старта?',
                            description: 'От 10 до 30. Если модемов больше, то их использование согласовывается индивидуально в зависимости от геолокации.',
                        },
                        thirdSpolller: {
                            title: 'Какой тариф требуется на сим-картах?',
                            description: 'Сим-карты с безлимитными тарифами с возможностью раздачи интернета.',
                        },
                        fourthSpolller: {
                            title: 'Может ли трафик с сим-карт использоваться в незаконных действиях?',
                            description: 'Нет. Мы программно ограничиваем доступ к подобным ресурсам.',
                        },
                        fifthSpolller: {
                            title: 'Как осуществляется вывод средств?',
                            description: '<p>Вывод средств осуществляется в любое время в личном кабинете и доступен для следующих систем: </p>'
                            + '<br> <ul>'
                            + '<li>Сбербанк РФ — 2%, минимальная сумма вывода - 51,000₽</li>'
                            + '<li>Tinkoff — 2%, минимальная сумма вывода - 51,000₽</li>'
                            + '<li>PerfectMoney — 0%,  минимальная сумма вывода - 250₽</li>'
                            + '<li>Payeer — 2%,  минимальная сумма вывода - 5,000₽</li>'
                            + '<li>FreeKassa Wallet — 1%,  минимальная сумма вывода - 250₽</li>'
                            + '<li>AdvCash — 3%, минимальная сумма вывода - 50,000₽</li>'
                            + '<li>Bitcoin — 3%, минимальная сумма вывода - 10,000₽</li>'
                            + '<li>Tether USDT TRC-20 - 2%, минимальная сумма вывода - 10,000₽</li>'
                            + '</ul>',
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
                    }
                }
            }
        }
    });

export default function (app) {
    app.use(I18NextVue, { i18next })
    return app
}
