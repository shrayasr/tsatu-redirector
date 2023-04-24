const _episodeMap: Record<string, string> = {
	"326": "https://seenunseen.in/episodes/2023/4/24/episode-326-pushpesh-pant-feasts-on-the-buffet-of-life/",
	"325": "https://seenunseen.in/episodes/2023/4/17/episode-325-shaili-chopra-and-the-sisterhood/",
	"324": "https://seenunseen.in/episodes/2023/4/10/episode-324-akshaya-mukul-and-the-life-of-agyeya/",
	"323": "https://seenunseen.in/episodes/2023/4/3/episode-323-svb-banking-and-the-state-of-the-economy/",
	"322": "https://seenunseen.in/episodes/2023/3/27/episode-322-the-life-and-times-of-mita-kapur/",
	"321": "https://seenunseen.in/episodes/2023/3/20/episode-321-josh-felman-tries-to-make-sense-of-the-world/",
	"320":"https://seenunseen.in/episodes/2023/3/13/episode-320-south-india-would-like-to-have-a-word/",
	"319":"https://seenunseen.in/episodes/2023/3/6/episode-319-jahnavi-and-the-cyclotron/",
	"318":"https://seenunseen.in/episodes/2023/2/27/episode-318-the-liberal-nationalism-of-nitin-pai/",
	"317":"https://seenunseen.in/episodes/2023/2/20/episode-317-rohini-nilekani-pays-it-forward/",
	"316":"https://seenunseen.in/episodes/2023/2/13/episode-316-in-a-silent-way/",
	"315":"https://seenunseen.in/episodes/2023/2/6/episode-315-arshia-sattar-and-the-complex-search-for-dharma/",
	"314":"https://seenunseen.in/episodes/2023/1/30/episode-314-the-life-and-times-of-jerry-pinto/",
	"313":"https://seenunseen.in/episodes/2023/1/23/episode-313-the-long-road-from-neeyat-to-neeti/",
	"312":"https://seenunseen.in/episodes/2023/1/16/episode-312-ashutosh-salil-and-the-challenge-of-change/",
	"311":"https://seenunseen.in/episodes/2023/1/9/episode-311-the-life-and-times-of-shanta-gokhale/",
	"310":"https://seenunseen.in/episodes/2023/1/2/episode-310-abby-philips-fights-for-science-and-medicine/",
	"309":"https://seenunseen.in/episodes/2022/12/26/episode-309-the-adda-at-the-end-of-the-universe/",
	"308":"https://seenunseen.in/episodes/2022/12/19/episode-308-saaz-aggarwal-enters-a-vanished-homeland/",
	"307":"https://seenunseen.in/episodes/2022/12/12/episode-307-suyash-rai-embraces-indias-complexity/",
	"306":"https://seenunseen.in/episodes/2022/12/5/episode-306-the-history-of-the-planning-commission/",
	"305":"https://seenunseen.in/episodes/2022/11/28/episode-305-coomi-kapoor-has-the-inside-track/",
	"304":"https://seenunseen.in/episodes/2022/11/21/episode-304-make-me-a-canteen-for-my-soul/",
	"303":"https://seenunseen.in/episodes/2022/11/14/episode-303-the-loneliness-of-the-indian-man/",
	"302":"https://seenunseen.in/episodes/2022/11/7/episode-302-the-life-and-times-of-teesta-setalvad/",
	"301":"https://seenunseen.in/episodes/2022/10/31/episode-301-natasha-badhwar-lives-the-examined-life/",
	"300":"https://seenunseen.in/episodes/2022/10/24/episode-300-the-gentle-wisdom-of-pratap-bhanu-mehta/",
	"299":"https://seenunseen.in/episodes/2022/10/17/episode-299-the-reflections-of-samarth-bansal/",
	"298":"https://seenunseen.in/episodes/2022/10/10/episode-298-the-life-and-work-of-ashwini-deshpande/",
	"297":"https://seenunseen.in/episodes/2022/10/3/episode-297-alice-evans-studies-the-great-gender-divergence/",
	"296":"https://seenunseen.in/episodes/2022/9/26/episode-296-caste-capitalism-and-chandra-bhan-prasad/",
	"295":"https://seenunseen.in/episodes/2022/9/19/episode-295-the-girl-from-kashmir/",
	"294":"https://seenunseen.in/episodes/2022/9/12/episode-294-dance-dance-for-the-halva-walla/",
	"293":"https://seenunseen.in/episodes/2022/9/5/episode-293-womaning-in-india-with-mahima-vashisht/",
	"292":"https://seenunseen.in/episodes/2022/8/29/episode-292-varun-grover-is-in-the-house/",
	"291":"https://seenunseen.in/episodes/2022/8/22/episode-291-the-refreshing-audacity-of-vinay-singhal/",
	"290":"https://seenunseen.in/episodes/2022/8/15/episode-290-karthik-muralidharan-examines-the-indian-state/",
	"289":"https://seenunseen.in/episodes/2022/8/8/episode-289-shruti-jahagirdar-is-the-sporty-one/",
	"288":"https://seenunseen.in/episodes/2022/8/1/episode-288-chandrahas-choudhurys-country-of-literature/",
	"287":"https://seenunseen.in/episodes/2022/7/25/episode-287-the-life-and-times-of-urvashi-butalia/",
	"286":"https://seenunseen.in/episodes/2022/7/18/episode-286-pradeep-magazine-replays-his-life/",
	"285":"https://seenunseen.in/episodes/2022/7/11/episode-285-the-life-and-times-of-montek-singh-ahluwalia/",
	"284":"https://seenunseen.in/episodes/2022/7/4/episode-284-the-life-and-times-of-nilanjana-roy/",
	"283":"https://seenunseen.in/episodes/2022/6/27/episode-283-the-forgotten-greatness-of-pv-narasimha-rao/",
	"282":"https://seenunseen.in/episodes/2022/6/20/episode-282-naushad-forbes-wants-to-fix-india/",
	"281":"https://seenunseen.in/episodes/2022/6/13/episode-281-from-cairo-to-delhi-with-max-rodenbeck/",
	"280":"https://seenunseen.in/episodes/2022/6/6/episode-280-manjima-bhattacharjya-the-making-of-a-feminist/",
	"279":"https://seenunseen.in/episodes/2022/5/30/episode-279-abhijit-bhaduri-breaks-the-algorithm/",
	"278":"https://seenunseen.in/episodes/2022/5/23/episode-278-climate-change-and-our-power-sector/",
	"277":"https://seenunseen.in/episodes/2022/5/16/episode-277-the-rooted-cosmopolitanism-of-sugata-srinivasaraju/",
	"276":"https://seenunseen.in/episodes/2022/5/9/episode-276-the-incredible-curiosities-of-mukulika-banerjee/",
	"275":"https://seenunseen.in/episodes/2022/5/2/episode-275-hussain-haidry-hindustani-musalmaan/",
	"274":"https://seenunseen.in/episodes/2022/4/25/episode-274-two-and-a-half-bengalis-have-an-economics-adda/",
	"273":"https://seenunseen.in/episodes/2022/4/18/episode-273-warren-mendonsa-plays-the-universal-pentatonic/",
	"272":"https://seenunseen.in/episodes/2022/4/11/episode-272-the-ferment-of-our-founders/",
	"271":"https://seenunseen.in/episodes/2022/4/4/episode-271-crossing-over-with-deepak-shenoy/",
	"270":"https://seenunseen.in/episodes/2022/3/28/episode-270-aakar-patel-is-full-of-hope/",
	"269":"https://seenunseen.in/episodes/2022/3/21/episode-269-the-life-and-times-of-nirupama-rao/",
	"268":"https://seenunseen.in/episodes/2022/3/14/episode-268-russia-ukraine-foreign-policy/",
	"267":"https://seenunseen.in/episodes/2022/3/7/episode-267-dhanya-rajendran-fights-the-gaze/",
	"266":"https://seenunseen.in/episodes/2022/2/28/episode-266-ram-guha-reflects-on-his-life/",
	"265":"https://seenunseen.in/episodes/2022/2/21/episode-265-amitava-kumar-finds-the-breath-of-life/",
	"264":"https://seenunseen.in/episodes/2022/2/14/episode-264-barun-mitra-philosopher-and-practitioner/",
	"263":"https://seenunseen.in/episodes/2022/2/7/episode-263-the-life-and-times-of-mrinal-pande/",
	"262":"https://seenunseen.in/episodes/2022/1/31/episode-262-nehrus-debates/",
	"261":"https://seenunseen.in/episodes/2022/1/24/episode-261-rukmini-sees-indias-multitudes/",
	"260":"https://seenunseen.in/episodes/2022/1/17/episode-260-sneaky-artist-sees-the-world/",
	"259":"https://seenunseen.in/episodes/2022/1/10/episode-259-the-loneliness-of-the-indian-woman/",
	"258":"https://seenunseen.in/episodes/2022/1/3/episode-258-the-universe-of-chuck-gopal/",
	"257":"https://seenunseen.in/episodes/2021/12/27/episode-257-objects-speak-to-annapurna-garimella/",
	"256":"https://seenunseen.in/episodes/2021/12/20/episode-256-pramit-bhattacharya-believes-in-just-one-ism/",
	"255":"https://seenunseen.in/episodes/2021/12/13/episode-255-sara-rai-inhales-literature/",
	"254":"https://seenunseen.in/episodes/2021/12/6/episode-254-the-life-and-times-of-abhinandan-sekhri/",
	"253":"https://seenunseen.in/episodes/2021/11/29/episode-253-our-parliament-and-our-democracy/",
	"252":"https://seenunseen.in/episodes/2021/11/22/episode-252-the-state-of-our-economy/",
	"251":"https://seenunseen.in/episodes/2021/11/15/episode-251-amit-schandillia-history-communicator/",
	"250":"https://seenunseen.in/episodes/2021/11/8/episode-250-narendra-shenoy-and-mr-narendra-shenoy/",
	"249":"https://seenunseen.in/episodes/2021/11/1/episode-249-dial-c-for-snehal-pradhan/",
	"248":"https://seenunseen.in/episodes/2021/10/25/episode-248-the-decline-of-the-congress/",
	"247":"https://seenunseen.in/episodes/2021/10/18/episode-247-the-business-of-winning-elections/",
	"246":"https://seenunseen.in/episodes/2021/10/11/episode-246-the-life-and-times-of-ayaz-memon/",
	"245":"https://seenunseen.in/episodes/2021/10/4/episode-245-the-dark-side-of-indian-pharma/",
	"244":"https://seenunseen.in/episodes/2021/9/27/episode-244-the-multitudes-of-our-maharajahs/",
	"243":"https://seenunseen.in/episodes/2021/9/20/episode-243-the-barkha-dutt-files/",
	"242":"https://seenunseen.in/episodes/2021/9/13/episode-242-indias-security-state/",
	"241":"https://seenunseen.in/episodes/2021/9/6/episode-241-the-importance-of-satya/",
	"240":"https://seenunseen.in/episodes/2021/8/30/episode-240-prakash-iyer-alteration-tailor/",
	"239":"https://seenunseen.in/episodes/2021/8/23/episode-239-roshan-abbas-and-the-creator-economy/",
	"238":"https://seenunseen.in/episodes/2021/8/16/episode-238-the-state-of-indian-sport/",
	"237":"https://seenunseen.in/episodes/2021/8/9/episode-237-the-importance-of-the-1991-reforms/",
	"236":"https://seenunseen.in/episodes/2021/8/2/episode-236-the-life-and-times-of-vir-sanghvi/",
	"235":"https://seenunseen.in/episodes/2021/7/26/episode-235-kavitha-rao-and-our-lady-doctors/",
	"234":"https://seenunseen.in/episodes/2021/7/19/episode-234-kanti-bajpai-on-india-vs-china/",
	"233":"https://seenunseen.in/episodes/2021/7/11/episode-233-pranay-kotasthane-talks-public-policy/",
	"232":"https://seenunseen.in/episodes/2021/7/4/episode-232-understanding-india-through-its-languages/",
	"231":"https://seenunseen.in/episodes/2021/6/27/episode-231-the-china-dude-is-in-the-house/",
	"230":"https://seenunseen.in/episodes/2021/6/20/episode-230-jai-arjun-singh-lost-it-at-the-movies/",
	"229":"https://seenunseen.in/episodes/2021/6/13/episode-229-the-practice-of-medicine/",
	"228":"https://seenunseen.in/episodes/2021/6/6/episode-228-the-kavita-krishnan-files/",
	"227":"https://seenunseen.in/episodes/2021/5/30/episode-227-taking-stock-of-our-economy/",
	"226":"https://seenunseen.in/episodes/2021/5/23/episode-226-helping-others-in-the-fog-of-pandemic/",
	"225":"https://seenunseen.in/episodes/2021/5/16/episode-225-understanding-indian-healthcare/",
	"224":"https://seenunseen.in/episodes/2021/5/9/episode-224-modeling-covid-19/",
	"223":"https://seenunseen.in/episodes/2021/5/2/episode-223-the-economics-and-politics-of-vaccines/",
	"222":"https://seenunseen.in/episodes/2021/4/25/episode-222-the-saffron-trail/",
	"221":"https://seenunseen.in/episodes/2021/4/18/episode-221-science-and-covid-19/",
	"220":"https://seenunseen.in/episodes/2021/4/11/episode-220-the-sharda-ugra-files/",
	"219":"https://seenunseen.in/episodes/2021/4/4/episode-219-keeping-india-safe/",
	"218":"https://seenunseen.in/episodes/2021/3/28/episode-218-a-creator-of-the-floating-world/",
	"217":"https://seenunseen.in/episodes/2021/3/21/episode-217-the-prem-panicker-files/",
	"216":"https://seenunseen.in/episodes/2021/3/14/episode-216-being-muslim-in-india/",
	"215":"https://seenunseen.in/episodes/2021/3/7/episode-215-a-writer-learns-to-see/",
	"214":"https://seenunseen.in/episodes/2021/2/28/episode-214-raghu-sanjaylal-jaitleys-fathers-scooter/",
	"213":"https://seenunseen.in/episodes/2021/2/21/episode-213-a-venture-capitalist-looks-at-the-world/",
	"212":"https://seenunseen.in/episodes/2021/2/14/episode-212-pandemonium-in-indias-banks/",
	"211":"https://seenunseen.in/episodes/2021/2/7/episode-211-the-tragedy-of-our-farm-bills/",
	"210":"https://seenunseen.in/episodes/2021/1/31/episode-210-feeding-the-hungry-in-the-pandemic/",
	"209":"https://seenunseen.in/episodes/2021/1/24/episode-209-two-girls-hanging-from-a-tree/",
	"208":"https://seenunseen.in/episodes/2021/1/17/episode-208-lessons-in-investing-and-life/",
	"207":"https://seenunseen.in/episodes/2021/1/10/episode-207-religion-food-indian-society/",
	"206":"https://seenunseen.in/episodes/2021/1/3/episode-206-lessons-from-2020/",
	"205":"https://seenunseen.in/episodes/2020/12/27/episode-205-indias-tryst-with-pandemics/",
	"204":"https://seenunseen.in/episodes/2020/12/20/episode-204-a-scientist-in-the-kitchen/",
	"203":"https://seenunseen.in/episodes/2020/12/13/episode-203-brave-new-world/",
	"202":"https://seenunseen.in/episodes/2020/12/6/episode-202-the-bjp-before-modi/",
	"201":"https://seenunseen.in/episodes/2020/11/29/episode-201-a-cricket-tragic-celebrates-the-game/",
	"200":"https://seenunseen.in/episodes/2020/11/22/episode-200-the-hunter-becomes-the-hunted/",
	"199":"https://seenunseen.in/episodes/2020/11/15/episode-199-an-adman-reflects-on-society-the-self/",
	"198":"https://seenunseen.in/episodes/2020/11/8/episode-198-cities-and-citizens/",
	"197":"https://seenunseen.in/episodes/2020/11/1/episode-197-storytelling-and-conversation/",
	"196":"https://seenunseen.in/episodes/2020/10/25/episode-196-the-importance-of-data-journalism/",
	"195":"https://seenunseen.in/episodes/2020/10/18/episode-195-memories-and-things/",
	"194":"https://seenunseen.in/episodes/2020/10/11/episode-194-the-first-assault-on-our-constitution/",
	"193":"https://seenunseen.in/episodes/2020/10/4/episode-193-the-fight-of-the-central-banker/",
	"192":"https://seenunseen.in/episodes/2020/9/27/episode-192-the-loneliness-of-the-long-distance-trucker/",
	"191":"https://seenunseen.in/episodes/2020/9/20/episode-191-our-cities-after-covid-19/",
	"190":"https://seenunseen.in/episodes/2020/9/13/episode-190-queeristan/",
	"189":"https://seenunseen.in/episodes/2020/9/6/episode-189-the-acting-life/",
	"188":"https://seenunseen.in/episodes/2020/8/30/what-a-long-strange-trip-its-been/",
	"187":"https://seenunseen.in/episodes/2020/8/23/episode-187-dadabhai-naoroji-and-the-fight-for-india/",
	"186":"https://seenunseen.in/episodes/2020/8/15/episode-186-what-have-we-done-with-our-independence/",
	"185":"https://seenunseen.in/episodes/2020/8/9/episode-185-fixing-indian-education/",
	"184":"https://seenunseen.in/episodes/2020/8/2/episode-184-finding-dara-shukoh/",
	"183":"https://seenunseen.in/episodes/2020/7/26/episode-183-the-art-of-narrative-nonfiction-jbs-haldane/",
	"182":"https://seenunseen.in/episodes/2020/7/19/episode-182-conversation-and-society/",
	"181":"https://seenunseen.in/episodes/2020/7/12/episode-181-the-dragon-and-the-elephant/",
	"180":"https://seenunseen.in/episodes/2020/7/5/episode-180-elite-imitation-in-public-policy/",
	"179":"https://seenunseen.in/episodes/2020/6/28/episode-179-the-plight-of-our-street-vendors/",
	"178":"https://seenunseen.in/episodes/2020/6/21/episode-178-what-happened-to-our-journalism/",
	"177":"https://seenunseen.in/episodes/2020/6/14/episode-177-indias-economy-in-the-time-of-covid-19/",
	"176":"https://seenunseen.in/episodes/2020/6/7/episode-176-the-nuances-of-lockdown/",
	"175":"https://seenunseen.in/episodes/2020/5/31/episode-175-the-indian-armed-forces/",
	"174":"https://seenunseen.in/episodes/2020/5/24/episode-174-tawaif/",
	"173":"https://seenunseen.in/episodes/2020/5/17/episode-173-the-resonance-of-akbar/",
	"172":"https://seenunseen.in/episodes/2020/5/10/episode-172-the-many-cities-of-delhi/",
	"171":"https://seenunseen.in/episodes/2020/5/3/episode-171-indias-start-up-ecosystem/",
	"170":"https://seenunseen.in/episodes/2020/4/26/episode-170-foreign-policy-is-a-big-deal/",
	"169":"https://seenunseen.in/episodes/2020/4/19/episode-169-taking-stock-of-covid-19/",
	"168":"https://seenunseen.in/episodes/2020/4/12/episode-168-the-art-of-translation/",
	"167":"https://seenunseen.in/episodes/2020/4/5/episode-167-indias-greatest-civil-servant/",
	"166":"https://seenunseen.in/episodes/2020/3/29/episode-166-nanak-was-here/",
	"165":"https://seenunseen.in/episodes/2020/3/22/episode-165-genetic-engineering/",
	"164":"https://seenunseen.in/episodes/2020/3/15/episode-164-the-ideas-of-our-constitution/",
	"163":"https://seenunseen.in/episodes/2020/3/8/episode-163-who-broke-our-republic/",
	"162":"https://seenunseen.in/episodes/2020/3/1/episode-162-caste-gender-karnatik-music/",
	"161":"https://seenunseen.in/episodes/2020/2/23/episode-161-the-history-of-desire-in-india/",
	"160":"https://seenunseen.in/episodes/2020/2/16/episode-160-participatory-democracy/",
	"159":"https://seenunseen.in/episodes/2020/2/9/episode-159-the-theatre-of-the-budget/",
	"158":"https://seenunseen.in/episodes/2020/2/2/episode-158-radically-networked-societies/",
	"157":"https://seenunseen.in/episodes/2020/1/26/episode-157-taking-stock-of-our-republic/",
	"156":"https://seenunseen.in/episodes/2020/1/20/episode-156-kerala-and-the-ivory-throne/",
	"155":"https://seenunseen.in/episodes/2020/1/13/episode-155-films-feminism-paromita/",
	"154":"https://seenunseen.in/episodes/2020/1/6/episode-154-the-art-and-science-of-economic-policy/",
	"153":"https://seenunseen.in/episodes/2019/12/30/episode-153-the-indian-economy-in-2019/",
	"152":"https://seenunseen.in/episodes/2019/12/22/episode-152-the-citizenship-battles/",
	"151":"https://seenunseen.in/episodes/2019/12/16/episode-151-maharashtra-politics-unscrambled/",
	"150":"https://seenunseen.in/episodes/2019/12/9/episode-150-the-business-of-books/",
	"149":"https://seenunseen.in/episodes/2019/12/2/episode-149-a-life-in-indian-politics/",
	"148":"https://seenunseen.in/episodes/2019/11/25/episode-148-the-bombzooka-question/",
	"147":"https://seenunseen.in/episodes/2019/11/18/episode-147-jahangir-the-curious/",
	"146":"https://seenunseen.in/episodes/2019/11/11/episode-146-indias-sedition-law/",
	"145":"https://seenunseen.in/episodes/2019/11/4/episode-145-the-indian-conservative/",
	"144":"https://seenunseen.in/episodes/2019/10/28/episode-144-women-in-indian-history/",
	"143":"https://seenunseen.in/episodes/2019/10/21/episode-143-what-does-china-want/",
	"142":"https://seenunseen.in/episodes/2019/10/13/episode-142-ponzi-schemes/",
	"141":"https://seenunseen.in/episodes/2019/10/6/episode-141-being-gay-loving-books/",
	"140":"https://seenunseen.in/episodes/2019/9/29/episode-140-indias-agriculture-crisis/",
	"139":"https://seenunseen.in/episodes/2019/9/23/episode-139-the-gita-press-and-hindu-nationalism/",
	"138":"https://seenunseen.in/episodes/2019/9/16/episode-138-twelve-dream-reforms/",
	"137":"https://seenunseen.in/episodes/2019/9/9/episode-137-indian-society-the-last-30-years/",
	"136":"https://seenunseen.in/episodes/2019/9/2/episode-136-data-journalism-and-indian-politics/",
	"135":"https://seenunseen.in/episodes/2019/8/26/episode-135-two-economic-crises-2008-amp-2019/",
	"134":"https://seenunseen.in/episodes/2019/8/19/episode-134-kashmir-and-article-370/",
	"133":"https://seenunseen.in/episodes/2019/8/12/episode-133-fighting-fake-news/",
	"132":"https://seenunseen.in/episodes/2019/8/5/episode-132-women-at-work/",
	"131":"https://seenunseen.in/episodes/2019/7/29/episode-131-political-ideology-in-india/",
	"130":"https://seenunseen.in/episodes/2019/7/22/episode-130-demystifying-gdp/",
	"129":"https://seenunseen.in/episodes/2019/7/15/episode-129-budget-bollywood-badmaashi/",
	"128":"https://seenunseen.in/episodes/2019/7/8/episode-128-india-migration/",
	"127":"https://seenunseen.in/episodes/2019/7/1/episode-127-our-colorful-past/",
	"126":"https://seenunseen.in/episodes/2019/6/24/episode-126-building-sports-ecosystems/",
	"125":"https://seenunseen.in/episodes/2019/6/17/episode-125-the-importance-of-finance/",
	"124":"https://seenunseen.in/episodes/2019/6/10/episode-124-religion-and-ideology-in-indian-society/",
	"123":"https://seenunseen.in/episodes/2019/6/3/episode-123-indias-supreme-court/",
	"122":"https://seenunseen.in/episodes/2019/5/27/episode-122-the-2019-elections/",
	"121":"https://seenunseen.in/episodes/2019/5/20/episode-121-public-choice-theory/",
	"120":"https://seenunseen.in/episodes/2019/5/13/episode-120-resisting-state-injustice/",
	"119":"https://seenunseen.in/episodes/2019/5/6/episode-119-modis-lost-opportunity/",
	"118":"https://seenunseen.in/episodes/2019/4/29/episode-118-zombie-firms-and-creative-destruction/",
	"117":"https://seenunseen.in/episodes/2019/4/22/episode-117-what-is-libertarianism/",
	"116":"https://seenunseen.in/episodes/2019/4/15/episode-116-indias-lost-decade/",
	"115":"https://seenunseen.in/episodes/2019/4/8/episode-115-the-intellectual-foundations-of-hindutva/",
	"114":"https://seenunseen.in/episodes/2019/4/1/episode-114-crime-in-indian-politics/",
	"113":"https://seenunseen.in/episodes/2019/3/25/episode-113-the-geopolitics-of-the-bangladesh-war/",
	"112":"https://seenunseen.in/episodes/2019/3/18/episode-112-early-indians/",
	"111":"https://seenunseen.in/episodes/2019/3/11/episode-111-the-india-pakistan-conflict/",
	"110":"https://seenunseen.in/episodes/2019/3/4/episode-110-reporting-venezuela/",
	"109":"https://seenunseen.in/episodes/2019/2/25/episode-109-plato-or-why-philosophy-matters/",
	"108":"https://seenunseen.in/episodes/2019/2/18/episode-108-the-importance-of-cities/",
	"107":"https://seenunseen.in/episodes/2019/2/11/episode-107-an-economics-ramble/",
	"106":"https://seenunseen.in/episodes/2019/2/4/episode-106-stubborn-attachments/",
	"105":"https://seenunseen.in/episodes/2019/1/28/episode-105-understanding-gandhi-part-2-mahatma/",
	"104":"https://seenunseen.in/episodes/2019/1/21/episode-104-understanding-gandhi-part-1-mohandas/",
	"103":"https://seenunseen.in/episodes/2019/1/14/episode-103-the-emergency/",
	"102":"https://seenunseen.in/episodes/2019/1/7/episode-102-the-paradox-of-narendra-modi/",
	"101":"https://seenunseen.in/episodes/2018/12/31/episode-101-the-progress-of-humanity/",
	"100":"https://seenunseen.in/episodes/2018/12/24/episode-100-the-100th-episode-ramble/",
	"99":"https://seenunseen.in/episodes/2018/12/16/episode-99-the-importance-of-rules-and-institutions/",
	"98":"https://seenunseen.in/episodes/2018/12/10/episode-98-the-deccan-before-shivaji/",
	"97":"https://seenunseen.in/episodes/2018/12/2/episode-97-the-evolution-of-cricket/",
	"96":"https://seenunseen.in/episodes/2018/11/25/episode-96-the-evolution-of-everything/",
	"95":"https://seenunseen.in/episodes/2018/11/19/episode-95-the-indianness-of-indian-food/",
	"94":"https://seenunseen.in/episodes/2018/11/11/episode-94-rajesh-jain-and-dhan-vapasi/",
	"93":"https://seenunseen.in/episodes/2018/11/4/episode-93-america-in-south-asia/",
	"92":"https://seenunseen.in/episodes/2018/10/29/episode-92-an-economist-looks-at-metoo/",
	"91":"https://seenunseen.in/episodes/2018/10/22/episode-91-ilfs-and-the-indian-financial-system/",
	"90":"https://seenunseen.in/episodes/2018/10/15/episode-90-the-metoo-movement/",
	"89":"https://seenunseen.in/episodes/2018/10/8/episode-89-the-state-of-the-media-2/",
	"88":"https://seenunseen.in/episodes/2018/10/1/episode-88-metrics-of-empowerment/",
	"87":"https://seenunseen.in/episodes/2018/9/24/episode-87-where-are-the-jobs/",
	"86":"https://seenunseen.in/episodes/2018/9/16/episode-86-the-state-of-our-farmers/",
	"85":"https://seenunseen.in/episodes/2018/9/10/episode-85-demon-morality-and-the-predatory-indian-state/",
	"84":"https://seenunseen.in/episodes/2018/9/3/episode-84-being-gay-in-india/",
	"83":"https://seenunseen.in/episodes/2018/8/27/episode-83-young-india/",
	"82":"https://seenunseen.in/episodes/2018/8/20/episode-82-swachh-bharat/",
	"81":"https://seenunseen.in/episodes/2018/8/13/episode-81-chinese-foreign-policy/",
	"80":"https://seenunseen.in/episodes/2018/8/6/episode-80-india-in-the-nuclear-age/",
	"79":"https://seenunseen.in/episodes/2018/7/30/episode-79-democracy-in-pakistan/",
	"78":"https://seenunseen.in/episodes/2018/7/23/episode-78-crowd-violence-in-india/",
	"77":"https://seenunseen.in/episodes/2018/7/16/episode-77-education-in-india/",
	"76":"https://seenunseen.in/episodes/2018/7/8/episode-76-claiming-your-space/",
	"75":"https://seenunseen.in/episodes/2018/7/2/episode-75-stand-up-comedy-in-india/",
	"74":"https://seenunseen.in/episodes/2018/6/24/episode-74-the-bad-and-complex-tax/",
	"73":"https://seenunseen.in/episodes/2018/6/18/episode-73-trade-deficits-and-trumpism/",
	"72":"https://seenunseen.in/episodes/2018/6/11/episode-72-the-gdpr/",
	"71":"https://seenunseen.in/episodes/2018/6/4/episode-71-data-and-the-government/",
	"70":"https://seenunseen.in/episodes/2018/5/27/episode-70-online-conversations/",
	"69":"https://seenunseen.in/episodes/2018/5/20/episode-69-immigration-and-outsourcing/",
	"68":"https://seenunseen.in/episodes/2018/5/14/episode-68-online-content-regulation/",
	"67":"https://seenunseen.in/episodes/2018/5/6/episode-67-ask-me-anything/",
	"66":"https://seenunseen.in/episodes/2018/4/29/episode-66-the-state-of-the-economy-2/",
	"65":"https://seenunseen.in/episodes/2018/4/23/episode-65-the-future-of-the-internet/",
	"64":"https://seenunseen.in/episodes/2018/4/16/episode-64-libertarianism/",
	"63":"https://seenunseen.in/episodes/2018/4/9/episode-63-foreign-policy/",
	"62":"https://seenunseen.in/episodes/2018/4/2/episode-62-judicial-reforms/",
	"61":"https://seenunseen.in/episodes/2018/3/26/episode-61-aadhaar/",
	"60":"https://seenunseen.in/episodes/2018/3/19/episode-60-indias-water-crisis/",
	"59":"https://seenunseen.in/episodes/2018/3/12/episode-59-protectionism/",
	"58":"https://seenunseen.in/episodes/2018/3/5/episode-58-misogyny-and-our-legal-system/",
	"57":"https://seenunseen.in/episodes/2018/2/26/episode-57-indias-maldives-dilemma/",
	"56":"https://seenunseen.in/episodes/2018/2/19/episode-56-easy-money/",
	"55":"https://seenunseen.in/episodes/2018/2/12/episode-55-defending-the-indefensible/",
	"54":"https://seenunseen.in/episodes/2018/2/5/episode-54-budget-2018-quick-takes/",
	"53":"https://seenunseen.in/episodes/2018/1/29/episode-53-pakodanomics/",
	"52":"https://seenunseen.in/episodes/2018/1/22/episode-52-caste-in-modern-india/",
	"51":"https://seenunseen.in/episodes/2018/1/14/episode-51-alpha-zero/",
	"50":"https://seenunseen.in/episodes/2018/1/8/episode-50-the-state-of-indian-politics/",
	"49":"https://seenunseen.in/episodes/2018/1/1/episode-49-political-discourse/",
	"48":"https://seenunseen.in/episodes/2017/12/24/episode-48-reforming-urban-governance/",
	"47":"https://seenunseen.in/episodes/2017/12/17/episode-47-poker-and-stock-markets/",
	"46":"https://seenunseen.in/episodes/2017/12/11/episode-46-the-state-of-the-media/",
	"45":"https://seenunseen.in/episodes/2017/12/4/episode-45-the-bjps-magic-formula/",
	"44":"https://seenunseen.in/episodes/2017/11/26/episode-44-the-delhi-smog/",
	"43":"https://seenunseen.in/episodes/2017/11/20/episode-43-parenthood/",
	"42":"https://seenunseen.in/episodes/2017/11/13/episode-42-behavioral-economics/",
	"41":"https://seenunseen.in/episodes/2017/11/6/episode-41-money-in-cricket/",
	"40.5":"https://seenunseen.in/episodes/2017/10/23/episode-40-5-were-on-a-break/",
	"40":"https://seenunseen.in/episodes/2017/10/16/episode-40-state-of-the-economy/",
	"39":"https://seenunseen.in/episodes/2017/10/9/episode-39-eating-out/",
	"38":"https://seenunseen.in/episodes/2017/10/2/episode-38-import-export/",
	"37":"https://seenunseen.in/episodes/2017/9/25/episode-37-obamacare/",
	"36":"https://seenunseen.in/episodes/2017/9/17/episode-36-sezs-special-economic-zones/",
	"35":"https://seenunseen.in/episodes/2017/9/11/episode-35-the-bhopal-gas-tragedies/",
	"34":"https://seenunseen.in/episodes/2017/9/3/episode-34-uber-surge-pricing/",
	"33":"https://seenunseen.in/episodes/2017/8/28/episode-33-football-transfers/",
	"32":"https://seenunseen.in/episodes/2017/8/21/episode-32-non-performing-assets-npas/",
	"31":"https://seenunseen.in/episodes/2017/8/13/episode-31-urban-governance-in-india/",
	"30":"https://seenunseen.in/episodes/2017/8/6/episode-30-real-estate-prices/",
	"29":"https://seenunseen.in/episodes/2017/7/31/episode-29-drug-price-controls/",
	"28":"https://seenunseen.in/episodes/2017/7/24/episode-28-gst-revisited/",
	"27":"https://seenunseen.in/episodes/2017/7/17/episode-27-television-price-controls/",
	"26":"https://seenunseen.in/episodes/2017/7/10/episode-26-the-right-to-property/",
	"25":"https://seenunseen.in/episodes/2017/7/3/episode-25-farm-loan-waivers/",
	"24":"https://seenunseen.in/episodes/2017/6/26/episode-24-prostitution/",
	"23":"https://seenunseen.in/episodes/2017/6/18/episode-23-public-sector-banks/",
	"22":"https://seenunseen.in/episodes/2017/6/11/episode-22-chinas-influence-in-south-asia/",
	"21":"https://seenunseen.in/episodes/2017/6/5/episode-21-slums/",
	"20":"https://seenunseen.in/episodes/2017/5/29/episode-20-the-coming-jobs-crisis/",
	"19":"https://seenunseen.in/episodes/2017/5/22/episode-19-rte-the-right-to-education-act/",
	"18":"https://seenunseen.in/episodes/2017/5/15/episode-18-restaurant-regulations/",
	"17":"https://seenunseen.in/episodes/2017/5/7/episode-17-centrally-sponsored-government-schemes/",
	"16":"https://seenunseen.in/episodes/2017/5/1/episode-16-artificial-intelligence/",
	"15":"https://seenunseen.in/episodes/2017/4/24/episode-15-kannada-dubbing-ban/",
	"14":"https://seenunseen.in/episodes/2017/4/17/episode-14-rent-control/",
	"13":"https://seenunseen.in/episodes/2017/4/10/episode-13-the-anti-defection-law/",
	"12":"https://seenunseen.in/episodes/2017/4/3/episode-12-futures-markets-in-agriculture/",
	"11":"https://seenunseen.in/episodes/2017/3/27/episode-11-fsi-floor-space-index/",
	"10":"https://seenunseen.in/episodes/2017/3/20/episode-10-digital-india/",
	"9":"https://seenunseen.in/episodes/2017/3/13/episode-9-the-profit-motive-in-education/",
	"8":"https://seenunseen.in/episodes/2017/3/7/episode-8-the-medical-council-of-india/",
	"7":"https://seenunseen.in/episodes/2017/2/28/episode-7-mrp/",
	"6":"https://seenunseen.in/episodes/2017/2/20/episode-6-surgical-strikes/",
	"5":"https://seenunseen.in/episodes/2017/2/13/episode-5-this-is-all-because-of-rupal-ben/",
	"4":"https://seenunseen.in/episodes/2017/2/7/episode-4-immigration/",
	"3":"https://seenunseen.in/episodes/2017/1/30/episode-3-gst/",
	"2":"https://seenunseen.in/episodes/2017/1/24/episode-2-demonetisation/",
	"1":"https://seenunseen.in/episodes/2017/1/16/episode-1-entry-and-exit-in-agriculture/",
	"0":"https://seenunseen.in/episodes/2017/1/14/episode-0-preview/"
};

const SEEN_AND_THE_UNSEEN_BASE_URL = "https://seenunseen.in"

export default {
	async fetch(request: Request) {
	  const statusCode = 302;

	  const url = new URL(request.url);

	  const urlPattern = /\/ep\/([0-9]+(?:.5)?)/;
	  const match = url.pathname.match(urlPattern)

	  if (match === null)
	  {
		return Response.redirect(SEEN_AND_THE_UNSEEN_BASE_URL, statusCode);
	  }

	  const episodeNumber = match[1];

	  if (episodeNumber === "") {
		return Response.redirect(SEEN_AND_THE_UNSEEN_BASE_URL, statusCode);
	  }
	  else {
		const destinationURL = _episodeMap[episodeNumber] ?? SEEN_AND_THE_UNSEEN_BASE_URL

		console.log(`Redirecting ${episodeNumber} to ${destinationURL}`)

		return Response.redirect(destinationURL, statusCode);
	  }
	},
  };