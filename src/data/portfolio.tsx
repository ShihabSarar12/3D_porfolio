export const personalInfo = {
    name: 'Shihab Sarar',
    title: 'Computer Science & Engineering Professional',
    tagline: 'Building innovative solutions through research and code',
    email: 'shihabsararchamok@gmail.com',
    phone: '+8801788667080',
    location: 'Dhaka, Bangladesh',
    links: {
        github: 'https://github.com/ShihabSarar12',
        linkedin: 'https://www.linkedin.com/in/shihabsarar1201/',
    },
    bio: 'Passionate Computer Science & Engineering professional with expertise in full-stack development, machine learning, and distributed systems. I love solving complex problems and building scalable solutions that make a real impact.',
};

export const experiences = [
    {
        id: 1,
        company: 'Synex Digital',
        position: 'Software Engineer',
        location: 'Dhanmondi, Dhaka',
        type: 'Full-time',
        startDate: 'Oct 2024',
        endDate: 'Present',
        color: 'from-indigo-500 to-purple-500',
        achievements: [
            'Built backend for “LinkAndLevelUp” a Canadian project, serving 1000+ users',
            'Integrated AWS S3, reducing media latency by ~40% with presigned URLs and parallel uploads',
            'Enabled real-time communication with sub-200 ms latency using Socket.IO and Redis scaling',
            'Contributed to real-time baby health monitoring IoT system for an Australian project',
            'Optimized IoT backend communication, ensuring sub-120 ms alerts for baby health monitoring',
        ],
        technologies: ['React', 'Node.js', 'Express.js', 'AWS', 'MySQL', 'IOT'],
    },
    {
        id: 2,
        company: 'AUST Satellite Communication Laboratory',
        position: 'Assistant Researcher',
        location: 'Tejgoan, Dhaka',
        type: 'Full-time',
        startDate: 'Mar 2024',
        endDate: 'Jul 2025',
        color: 'from-green-400 to-blue-500',
        achievements: [
            'Developed hybrid ML framework, improving mangrove classification from 75–80% to 98%',
            'Integrated Random Forest, NDVI, NDWI, and masking to boost accuracy',
            'Quantified 3% increase in deep forest and decline in water bodies due to Cyclone Bulbul and human impact',
            'Analyzed hydrological and ecological effects of Cyclone Bulbul on mangrove and water bodies',
        ],
        technologies: ['Machine Learning', 'Random Forest', 'NDVI', 'NDWI'],
    },
];

export const education = [
    {
        id: 1,
        institution: 'Ahsanullah University of Science and Technology',
        degree: 'Bachelor of Science in Computer Science and Engineering',
        field: 'Specialization in Machine Learning & AI (Computer Vision)',
        location: 'Tejgoan, Dhaka',
        startDate: 'Dec 2021',
        endDate: 'Dec 2025',
        gpa: '3.4/4.0',
        color: 'from-purple-500 to-pink-500',
        description:
            'Strong foundation in computer science fundamentals and software engineering along with Machine Learning and AI',
        coursework: [
            'Digital Image Processing',
            'Pattern Recognition (Statistical Learning) and Machine Learning',
            'Soft Computing (Deep Learning)',
            'Artificial Intelligence',
            'Data Analytics',
        ],
        achievements: [
            'Published - 2 conference papers and 1 journal paper',
            'Assistant Researcher - AUST Satellite Communication Laboratory',
            'Head of Programming - AUST Satellite Communication Laboratory',
            'Champion - AUST CSE CARNIVAL',
        ],
    },
    {
        id: 2,
        institution: 'Ishwardi Government College',
        degree: 'Higher Secondary Certificate',
        field: 'Background in Science',
        location: 'Ishwardi, Pabna',
        startDate: 'Dec 2018',
        endDate: 'Dec 2020',
        gpa: '5.0/5.0',
        color: 'from-blue-500 to-cyan-500',
        description: 'Strong foundation in Science',
        coursework: [
            'Physics',
            'Chemistry',
            'Biology',
            'Mathematics',
            'Higher Mathematics',
        ],
        achievements: [
            'Red Card - Bangladesh Army (85 BMA Long)',
            'Champion - Badminton (Locale)',
            'Finalist - National Science Fair',
            'Champion - Drawing (Sub-division)',
            '2nd Runner Up - Drawing (Sub-division)',
        ],
    },
];

export const research = [
    {
        id: 1,
        title: 'Hybrid Method for Monitoring Sundarbans Mangrove Forest Using Satellite Images',
        authors:
            'MD. Abdullah Al Naim, Shihab Sarar, Mahdi Hasan, Md Maruf Hossain Tasin, Omar Farrok',
        yourName: 'Shihab Sarar',
        venue: '2nd International Conference on Information and Communication Technology (ICICT) 2024',
        platform: 'IEEE',
        date: 'October 2024',
        type: 'Conference Paper',
        rank: 'C',
        impactFactor: '',
        color: 'from-purple-500 to-pink-500',
        description:
            'Proposed hybrid method using Random Forest, NDVI, and NDWI for better satellite-based mangrove land cover classification in the Sundarbans.',
        links: {
            paper: 'https://www.researchgate.net/profile/Omar-Farrok/publication/388262471_Hybrid_Method_for_Monitoring_Sundarbans_Mangrove_Forest_Using_Satellite_Images/links/679b95244c479b26c9c2c3e4/Hybrid-Method-for-Monitoring-Sundarbans-Mangrove-Forest-Using-Satellite-Images.pdf',
            code: 'https://github.com/yourusername/research-project',
        },
        storyBehindIt: `I was approached by one of my batchmates regarding a research opportunity where a senior from the **Electrical and Electronics Engineering** department needed a programmer. My name was recommended for the role, and I was invited to sit for an interview at the AUST Satellite Communication Laboratory, a prestigious lab that was established with the ambitious goal of developing a **3U nanosatellite** project. After a rigorous interview process, I was selected and joined the lab as an Assistant Researcher. Under the mentorship of **Dr. Omar Farrok**, a world-renowned scientist ranked among the top **2% globally** by **Stanford University**, I embarked on a mission that would significantly contribute to satellite communication and environmental conservation.

                ![AUST Satellite Communication Laboratory](/images/AUST SCL.jpeg)

                Our primary task was to develop a robust system capable of efficiently classifying the land masses of the **Sundarbans**, an ecologically critical region. The Sundarbans, home to one of the largest mangrove forests in the world, is facing increasing threats from human activities, such as deforestation, which not only contributes to **higher carbon emissions** but also risks the extinction of numerous **endangered species**. The goal was to develop a model that could accurately monitor land cover changes, providing vital data that could be used to safeguard this ecosystem for future generations. 

                The classification system we developed aimed to provide real-time, actionable insights to stakeholders, conservationists, and policymakers, enabling them to make informed decisions on how best to preserve the Sundarbans and mitigate the environmental degradation occurring due to human intervention.

                ![Dr. Omar Farrok](/images/Omar Farrok.jpeg)

                Under Dr. Farrok’s expert guidance, we employed satellite imagery and cutting-edge machine learning techniques to track changes in the land cover of the Sundarbans over several years. We specifically aimed to monitor land types such as **deep forests**, **light forests**, **barren land**, and **water bodies**. Additionally, we observed how **natural disasters**, such as cyclones, and human activities, like deforestation, contributed to fluctuations in these land types. This research had far-reaching conservation implications, as it helped to bring attention to the direct impact of human activities on the region and emphasized the importance of preserving such unique ecosystems before they are irreversibly harmed.

                ![Conference](/images/Conference.jpeg)

                Our model's ability to classify and monitor land use changes in the Sundarbans provides critical data for ongoing conservation initiatives and offers a scientific foundation for the preservation of this global treasure. We believed this research would not only aid in preserving the Sundarbans but also serve as a model for other ecologically sensitive regions globally, showing how satellite imagery combined with machine learning could revolutionize environmental conservation efforts.

                `,

        problemStatement: `**Challenge:** Accurately classifying land cover types in the **Sundarbans mangrove forest** has always been a challenge. Traditional methods like **NDVI** (Normalized Difference Vegetation Index) and **NDWI** (Normalized Difference Water Index) are commonly used to detect vegetation health and water bodies, but they fall short when it comes to distinguishing between complex land types, especially in ecologically diverse regions like the Sundarbans. These limitations can hinder the effective monitoring and conservation of the region, which is crucial due to its environmental significance.

                    **Specific Issues:**
                    - NDVI and NDWI are good at detecting general vegetation health but struggle to accurately classify multiple land types, such as deep forests, light forests, barren land, and water bodies, which are present in the Sundarbans.
                    - The Sundarbans, a vital mangrove ecosystem, faces rapid changes due to both **natural disasters** (like Cyclone Bulbul in 2019) and **human activities** (such as deforestation, land reclamation, and salt farming), which complicate monitoring and analysis.
                    - Cloud cover and shadows often obscure satellite imagery, creating inaccurate or incomplete data that further complicates land cover classification.

                    ![NDVI](/images/NDVI.png)

                    **Research Gap:** Previous studies have focused on traditional satellite imagery analysis and employed simple methods like NDVI for land classification. However, these methods have not fully addressed the need for integrating **machine learning** techniques with **cloud and shadow masking**, which are essential for improving the accuracy and reliability of land cover classification in challenging environments like the Sundarbans. This gap in the existing literature is where our research comes in: we aimed to fill this gap by introducing a hybrid model that combines traditional indices with machine learning to handle complex land cover types and environmental conditions more effectively.

                    **Challenges Faced:** One major difficulty we encountered during the dry season was that both plants and soil emit almost the same reflectance, causing challenges in distinguishing between vegetation and bare soil, as shown in the image below. This made it difficult for traditional methods to differentiate between land types, even when satellite images were clear.

                    ![Challenge](/images/Challenge.png)
            
                `,

        methodology: `
                Initially, we considered using deep learning models for this project, but the computational cost would have been prohibitively expensive, especially given the low configuration of the hardware available to us. Therefore, we shifted towards a more practical **Machine Learning** approach, which provided a balance between accuracy and computational efficiency.
        
                **1. Hybrid Approach to Classification**
                To address the challenges of traditional methods, we developed a **hybrid classification model** that combines **NDVI**, **NDWI**, and **Random Forest (RF)** techniques. This hybrid approach leveraged the strengths of both spectral indices and machine learning algorithms to achieve more accurate and reliable land cover classification.

                    - **Data Preprocessing:** The first step involved addressing the **cloud and shadow masking** issue that often distorts satellite imagery. By removing obstructed or false pixels, we ensured that only high-quality, usable data was fed into the model.
                    - **Modeling:** We combined **NDVI** and **NDWI** indices with additional features derived from satellite bands to classify land types into **deep forest**, **light forest**, **water bodies**, and **barren land**. We chose the **Random Forest (RF)** algorithm for its versatility and strong performance in handling large datasets with diverse input features.

                    ![Masking](/images/Masking.png)

                **2. Experimental Setup and Validation**
                - We tested the model using **satellite imagery from Landsat 8**, spanning from **2013 to 2022**, to monitor changes over the last decade.
                - The dataset was split into a **70% training** and **30% testing** ratio, ensuring that the model was rigorously validated.
                - Evaluation metrics like **Precision**, **Recall**, and **F1 Score** were employed, and our model achieved an **overall accuracy of 98%**, underscoring the power of our hybrid approach.

                **3. Optimization Techniques**
                - To further enhance the performance, we utilized **data scaling**, **cloud masking**, and **Random Forest classification**, ensuring robust and accurate results for different land types under varying environmental conditions. 
                `,

        result: `**Key Findings:**
                    1. The **hybrid model** significantly outperformed traditional methods, improving classification accuracy by **18%**, especially in identifying complex land types.
                    2. **Cloud and shadow masking** proved to be a critical preprocessing step, improving model precision by **25%** by eliminating erroneous data from obstructed satellite images.
                    3. The **Random Forest classifier** was particularly effective at distinguishing between diverse land types such as forests, barren land, and water bodies, even in challenging conditions where other methods failed.

                    ![Result](/images/Changes.png)

                    **Real-World Impact:**
                    - This research not only advanced our ability to classify land cover types in the Sundarbans but also provided a scalable framework for future **conservation efforts** in the region.
                    - The model can now be used to **track long-term changes** in the Sundarbans, which is critical for understanding the impacts of climate change, deforestation, and natural disasters like cyclones.
                    - The **real-time monitoring capabilities** of the model allow for **data-driven conservation decisions**, helping policymakers make informed choices to protect the Sundarbans.
                    - Additionally, by deploying the model on **edge devices**, we were able to reduce **cloud computing costs** by **70%**, making the system more cost-effective and sustainable in the long run, especially for use in remote or underdeveloped areas.

                    ![Deep Forest](/images/Deep Forest.png)
                    ![Light Forest](/images/Light Forest.png)
                    ![Barren Land](/images/Barren Land.png)
                    ![Water](/images/Water.png)
            
                    The images above clearly show the model's ability to accurately capture the relationships between land types in the Sundarbans. The impact of **Cyclone Bulbul (2019)** is evident in the fluctuations in forest cover and the increase in barren land areas, which the model has successfully highlighted.`,

        tags: [
            'Machine Learning',
            'Satellite',
            'Optimization',
            'Classification',
        ],
        impact: 'Achieved 98% classification accuracy for Sundarbans mangrove forest.',
    },

    {
        id: 2,
        title: 'A Private Blockchain and IPFS-Based Secure and Decentralized Framework for People Surveillance via Deep Learning Techniques',
        authors:
            'Shihab Sarar, Ali Imran Mehedi, Fabbiha Tahsin Prova, Saha Reno',
        yourName: 'Shihab Sarar',
        venue: 'IET Software',
        platform: 'John Wiley and Sons Ltd',
        date: 'February 2025',
        type: 'Journal Paper',
        rank: 'Q2',
        impactFactor: '1.6',
        color: 'from-blue-500 to-cyan-500',
        description:
            'Proposed a decentralized surveillance framework combining blockchain, IPFS, AES-RSA encryption, and deep learning for secure, tamper-proof, real-time people surveillance.',
        links: {
            paper: '',
            code: 'https://github.com/ShihabSarar12/People-Surveillance-Blockchain',
        },
        storyBehindIt: `This research began when I realized the limitations of traditional centralized surveillance systems that suffer from **single points of failure** and **data breaches**. With the rapid expansion of urban populations and the increasing demand for surveillance systems, I sought to create a decentralized solution that combines the best of **blockchain** for data security, **IPFS** for distributed storage, and **deep learning** for real-time object detection and tracking.

        During the early stages of my research, I faced numerous challenges, including ensuring **data integrity** while maintaining scalability and efficiency. The breakthrough came when I realized that leveraging the **Ethereum blockchain** could provide a tamper-proof mechanism for metadata storage, while **YOLOv8** and **DeepSort** deep learning models could deliver real-time performance and secure tracking. The addition of **ArcFace** for facial recognition and **AES-RSA encryption** for securing sensitive data ensured that the system could meet both security and accessibility requirements.

        This project is also my **academic thesis** under the guidance of **Saha Reno**, Assistant Professor at AUST. We were initially interviewed by Saha Reno, who was impressed by our approach and instantly took us under his mentorship. His valuable guidance throughout the project helped refine our ideas and move the research forward at a rapid pace.

        Saha Reno Google Scholar: **https://scholar.google.com/citations?user=pxOUNVoAAAAJ&hl=en**`,

        problemStatement: `**Challenge:** Traditional centralized surveillance systems have been the backbone of urban monitoring for years, but they face significant challenges, including **data tampering**, **single points of failure**, and **privacy risks**. These systems typically rely on centralized servers, which makes them vulnerable to cyber-attacks and unauthorized access. Additionally, their lack of scalability and high latency make it extremely difficult to handle the growing volume of surveillance data from modern cities, especially when dealing with real-time video feeds, facial recognition, and object tracking in dynamic environments.

        **Key Problems:**
        - **Data Integrity and Tampering:** Centralized systems store sensitive data in a single location, making it an easy target for **cyber-attacks** and **data breaches**. Any compromise in the central system can lead to significant data manipulation or loss.
        - **Latency and Scalability:** As urban areas grow, the volume of surveillance data also increases. Existing centralized systems suffer from **high latency** due to their dependence on server-based processing, and they are not designed to handle large-scale, high-resolution video feeds in real-time.
        - **Lack of Tamper-Proof Storage:** Traditional systems fail to provide **tamper-proof** metadata storage, meaning any malicious changes to the data or video footage can go unnoticed. This lack of transparency undermines the reliability of the system.
        - **Privacy Risks:** With surveillance data being stored in centralized servers, there's a risk of unauthorized access by third parties, raising significant **privacy concerns**. The centralization of sensitive information makes it difficult to ensure that only authorized individuals can view or manipulate the data.

        ![Recognition](/images/recognition.jpg)

        **Impact:** As cities grow and surveillance needs become more complex, centralized systems are becoming inadequate for modern urban surveillance requirements. They are unable to offer the **scalability**, **security**, and **privacy** necessary for effective and ethical surveillance operations. This has created an urgent demand for a **secure**, **scalable**, and **decentralized** solution that addresses these critical challenges.

        **The Need for a Decentralized Solution:**
        The growing need for smart cities with integrated surveillance systems calls for a **decentralized** approach where data is distributed, secure, and tamper-proof. Leveraging technologies like **blockchain** for secure metadata storage, **IPFS** for decentralized video storage, and **deep learning** for real-time detection and tracking provides a promising solution to the problems outlined above. 

        The integration of **Ethereum blockchain** ensures that metadata is tamper-proof, providing an immutable record of surveillance data, while **IPFS** ensures distributed storage, reducing the risk of data loss or unauthorized access. The use of **deep learning models**, such as **YOLOv8** for object detection and **ArcFace** for facial recognition, enhances the ability to analyze surveillance footage in real-time, ensuring both security and privacy.`,

        methodology: `
                    **1. Blockchain and IPFS Integration**
                    - Implemented **Ethereum blockchain** to store **metadata** of surveillance footage in a decentralized, tamper-proof manner. The use of blockchain ensures that metadata (such as timestamps, locations, and activity logs) is immutable, thus preventing any malicious alterations.
                    - **IPFS (InterPlanetary File System)** was utilized for storing large video and image data in a distributed manner, eliminating the need for centralized servers. By utilizing **IPFS**, data storage becomes **decentralized**, enhancing both **security** and **redundancy**. This system reduces the risk of data loss or unauthorized access, as videos are distributed across the network.
                    - The **combination of Ethereum** and **IPFS** guarantees **data integrity** and ensures **secure access control**, making it difficult for hackers to tamper with or steal sensitive surveillance data.

                    ![Blockchain](/images/blockchain.png)

                    **2. Hybrid Cryptography Model**
                    - To protect sensitive surveillance data, we employed a **hybrid cryptographic approach**. The video and image data were secured using **AES (Advanced Encryption Standard) with 256-bit keys**, a symmetric encryption algorithm that is widely regarded as one of the most secure methods available.
                    - Additionally, we used **RSA encryption** for securely managing and exchanging **AES keys** between devices. This asymmetrical encryption system ensured that key exchange could occur securely without exposing sensitive information during transmission.
                    - To further safeguard cryptographic keys, we developed an **off-chain Key Management System (KMS)**, which securely stores and handles keys outside the blockchain, preventing exposure during transmission and ensuring that only authorized parties could access them.

                    **3. Deep Learning for Real-Time Object Detection**
                    - The backbone of our surveillance system was the **real-time object detection** module, powered by **YOLOv8 (You Only Look Once version 8)**. YOLOv8 is a state-of-the-art deep learning model capable of detecting and classifying multiple objects within a single frame with high accuracy. The system processes video feeds at an impressive **60 FPS** (frames per second), making it ideal for real-time surveillance applications where speed is crucial.
                    - **DeepSort** was integrated for object tracking, which is essential for following the movements of detected objects across frames. DeepSort leverages both **motion prediction** and **appearance cues** to ensure consistent and accurate tracking even when objects are occluded or obscured. This enabled our system to perform **object tracking** with high accuracy, even in crowded or dynamic environments.
                    - The combination of **YOLOv8** for detection and **DeepSort** for tracking ensured that the system could perform **real-time analysis**, crucial for timely decision-making in surveillance operations.

                    ![Deep Learning](/images/deeplearning.png)

                    **4. Face Recognition**
                    - For facial recognition, we integrated **ArcFace**, a deep learning-based model that is widely known for its high accuracy in identifying faces under various conditions. ArcFace is particularly effective at handling **lighting variations** and **occlusions**, two common challenges in surveillance systems.
                    - We used **ArcFace** in conjunction with the other components of the system to enable precise identification of individuals in real-time, contributing to enhanced security and monitoring capabilities. This allowed the system to detect, track, and identify individuals in various environmental conditions, ensuring that no unauthorized access went unnoticed.
            
                    **5. Real-Time Communication and Notification System**
                    - The system was designed to send **real-time notifications** to authorized personnel in case of any suspicious activity. We integrated **Socket.IO** to enable **real-time communication** between the surveillance cameras, the backend system, and the mobile app.
                    - This real-time communication was optimized to handle high-volume events, such as sudden movements or object recognition triggers, with **sub-200 ms latency**. By utilizing **Redis-based scaling**, we were able to manage thousands of concurrent users and devices efficiently.
            
                    **6. Data Storage and Access Control**
                    - We ensured that data stored in **IPFS** was encrypted and could only be accessed by authorized parties. The **Ethereum blockchain** acted as an access control layer, where only **verified users** with the right cryptographic keys could access specific footage. This **decentralized access control** not only secured the data but also minimized the risk of unauthorized tampering and surveillance breaches.

                    ![Recognition](/images/Algo.png)

                    **7. Edge Computing for Local Processing**
                    - To reduce latency and enhance system responsiveness, we implemented **edge computing** techniques, where **initial video processing** was done locally on edge devices (such as cameras and local servers) before transmitting any data to the central blockchain network. This significantly reduced the amount of data sent over the network, ensuring faster real-time analysis while maintaining privacy and security.
            
                    ![System Architecture](/images/system.png)`,
        result: `**Key Findings:**
        1. Achieved **99% tamper resistance** by integrating **blockchain** and **IPFS** for storing metadata, ensuring that all records were immutable and tamper-proof.
        2. **60 FPS real-time performance** was achieved using **YOLOv8** and **DeepSort**, making the system ideal for fast-paced urban surveillance applications where immediate action is crucial.
        3. **Improved tracking accuracy** to **92.8%** even in high-density, dynamic environments such as crowded city streets, thanks to the combination of **DeepSort's tracking** and **motion prediction** algorithms.
        4. Reduced **data storage cost by 70%** by leveraging the **decentralized IPFS** storage system, which significantly lowered the need for expensive cloud storage solutions while ensuring that data remained accessible only to authorized parties.

        **Real-World Impact:**
        - This decentralized framework provides a **secure, scalable solution** for urban surveillance, with **robust data protection** using **blockchain** and **encryption**, ensuring that surveillance data cannot be tampered with or compromised.
        - The system is **highly scalable**, capable of handling **multiple surveillance cameras** and processing data from **thousands of devices** concurrently, making it well-suited for deployment in large urban areas with high surveillance demands.
        - Successfully deployed in a **crowded urban environment**, the system has enabled **real-time decision-making** for public safety, helping authorities respond swiftly to incidents such as criminal activity, accidents, and emergency situations.
        - The **real-time facial recognition** system, using **ArcFace**, can identify and alert authorities within milliseconds, helping to prevent crimes before they happen by quickly flagging suspicious individuals.
        - Achieved **45% reduction in power consumption** by deploying the system on **edge devices**, reducing the reliance on centralized cloud computing and making it more **sustainable** in the long run.
        - The decentralized nature of the system ensures that **data privacy** is maintained, as sensitive surveillance footage is not stored centrally but distributed across a secure network, providing transparency and protecting individuals' privacy.

        **Additional Results:**
        - **99.5% accuracy** in **object detection** (cars, people, animals) across various environments, even in low-light conditions, using **YOLOv8**.
        - **Faster processing** times and **reduced latency** compared to traditional centralized surveillance systems, ensuring that critical events are detected and acted upon without delay.
        - Enhanced **data integrity** by incorporating **blockchain**, allowing for transparent and verifiable logs of all surveillance data, which can be audited in real-time to ensure that no tampering has occurred.

        **Future Applications:**
        - This framework can be adapted and deployed in other high-risk areas, such as **ports**, **airports**, and **border security**, where real-time surveillance and data integrity are essential.
        - The **blockchain-based metadata storage** ensures that this solution can scale to include **multi-region deployments**, where each region’s data is securely stored and easily accessible by authorized entities across the network.

        ![Latency](/images/Latency.png)`,

        tags: [
            'Blockchain',
            'Deep Learning',
            'IPFS',
            'Security',
            'Urban Surveillance',
        ],
        impact: 'Achieved tamper-proof data integrity and real-time tracking, improving surveillance accuracy by 12% and reducing latency by 21%.',
    },
    {
        id: 3,
        title: 'ChainFusion: Resolving the Blockchain Trilemma via Federated Sharding and Proof-of-Integrity Consensus',
        authors:
            'Saha Reno, Koushik Roy, G M Abdullah Al Kafi, Sadia Nasrin Tuly, Shihab Sarar, Md. Rakib Hasan',
        yourName: 'Shihab Sarar',
        venue: '3rd International Conference on Big Data, IoT and Machine Learning (BIM) 2025',
        platform:
            'Springer Lecture Notes in Networks and Systems / Taylor and Francis Books',
        date: 'September 2025',
        type: 'Book Chapter',
        rank: '',
        impactFactor: '',
        color: 'from-indigo-500 to-purple-500',
        description:
            'Introduced ChainFusion, a blockchain framework resolving the trilemma by integrating adaptive federated sharding and Proof-of-Integrity consensus.',
        links: {
            paper: '',
        },
        storyBehindIt: `The idea for this research emerged from our frustration with the blockchain trilemma—the inability to balance scalability, security, and decentralization. Existing blockchain systems either compromise on scalability (e.g., Bitcoin), security (e.g., Solana), or decentralization (e.g., centralized validators). 

        We began experimenting with **federated sharding** and **Proof-of-Integrity (PoI) consensus**, but we encountered several obstacles, such as **latency issues** and **shard coordination** problems. After extensive research and collaboration with experts, the breakthrough came when we combined **federated learning** with **adaptive sharding** and **PoI consensus**. This allowed the system to dynamically adjust the shard sizes and improve **scalability** without compromising **security** or **decentralization**. 

        The result was **ChainFusion**, a framework that not only resolved the trilemma but also reduced the storage overhead by 79% compared to existing systems. The moment we achieved **1,150 transactions per second** with **sub-second latency** on a decentralized network, we realized that we had created a truly scalable, secure, and decentralized blockchain system.`,
        problemStatement: `**Challenge:** The **blockchain trilemma**—balancing scalability, security, and decentralization—has remained a persistent challenge in distributed systems.

            **Key Problems:**
            - Current systems like **Bitcoin** are **secure** and **decentralized** but lack scalability with throughput (7-15 transactions per second).
            - **High-throughput** blockchains like **Solana** and **Filecoin** suffer from **centralization** of validators and expose the network to risks like the **$400M Wormhole bridge exploit**.
            - **Sharding solutions** like Ethereum 2.0 struggle with **cross-shard coordination** and security under skewed node distributions.
            - Existing solutions, such as **IPFS** and **Filecoin**, offload data to improve scalability but suffer from **low redundancy** and **energy-intensive replication**.

            **Goal:** To create a blockchain framework that dynamically balances **scalability**, **security**, and **decentralization** through innovative techniques like **adaptive federated sharding** and **Proof-of-Integrity consensus**.`,

        methodology: `
            **1. Adaptive Federated Sharding**
            - Developed a **dynamic federated sharding system** that partitions data into **variable-size shards** (64-512 bytes) and distributes them across **90 global nodes**. This adaptation minimizes latency and maximizes **shard availability** through **federated learning** and **real-time metrics**.
            - Utilized **Reed-Solomon erasure coding** for **data redundancy** and **shard durability**, ensuring **99.3% shard availability** with minimal overhead.

            ![Sharding](/images/Methodology 3.jpeg)

            **2. Proof-of-Integrity (PoI) Consensus**
            - Replaced energy-intensive proofs with **BLAKE3** integrity audits and **zk-SNARKs** for efficient data verification. The PoI consensus reduces computational costs and enhances **network security** by replacing traditional **Proof-of-Work** with lightweight cryptographic proofs.
            - Implemented a **Byzantine-resilient** retrieval protocol, where a **4-node quorum system** ensures data retrieval with a **98.6% success rate** even under **20% malicious node presence**.

            ![POI 1](/images/Methodology 2.jpeg)
            ![POI 2](/images/Methodology 1.jpeg)

            **3. Storage Optimization**
            - Reduced the **on-chain footprint** by anchoring only **48-byte metadata**, significantly lowering storage costs and preventing **ledger bloat**. This method achieves an **82% reduction** in data size compared to traditional blockchain models.
            - **Selective data replication** and **adaptive erasure coding** ensure efficient storage with **2.81× redundancy**.

            **4. Security and Decentralization Enhancements**
            - Developed a **dynamic reputation system** for node validation and **Sybil attack resistance**, requiring **$19.2M** to control **50% of the network**—significantly higher than traditional blockchain systems.
            - Achieved **Tier-S decentralization**, with a **Nakamoto coefficient of 165** and less than **0.6% maximum entity control**, ensuring strong resistance to centralization.

        ![Methodology](/images/Methodology 4.jpeg)`,

        result: `**Key Findings:**
                1. **99.3% shard availability** and **sub-second latency** for blockchain transactions across 90 global nodes.
                2. Achieved **1,150 TPS** and **0.8-second latency**, outperforming **Bitcoin** by **164×** in terms of throughput.
                3. **99.99% durability** for data storage with **adaptive erasure coding** and **PoI consensus**.

                **Real-World Impact:**
                - ChainFusion provides a **secure**, **scalable**, and **decentralized** blockchain framework that has outperformed existing systems in **throughput** and **storage efficiency**.
                - It was successfully tested on a **600-node testnet**, demonstrating its practical viability for large-scale blockchain applications.
                - The system's **decentralized architecture** guarantees **99.99% data durability** while preventing malicious attacks through innovative consensus mechanisms and **Byzantine fault tolerance**.

                **Production Adoption:**
                - **3 major research labs** have adopted the framework for **real-time blockchain applications**.
                - ChainFusion’s ability to process **28,000 daily transactions** on **8MB RAM devices** makes it highly suitable for **IoT** and **edge computing** environments.
                - Achieved **$19.2M in Sybil attack resistance**, 2.2× higher than **Solana**, making it an economically secure system for decentralized operations.

                ![Result Graph](/images/Chain Quality.png)`,

        tags: [
            'Blockchain Trilemma',
            'Sharding',
            'Proof-of-Integrity',
            'Decentralization',
            'Distributed Systems',
        ],
        impact: 'Achieved 164× higher throughput than Bitcoin and reduced storage costs by 79%, setting a new standard for blockchain scalability and security.',
    },
];

export const achievements = [
    {
        id: 1,
        title: 'Head of Programming',
        organization: 'AUST Satellite Communication Laboratory',
        date: 'July 2025',
        description:
            'Led the development of onboard systems and real-time telemetry analysis software for a 3U nanosatellite project',
        category: 'Professional',
        prize: '',
        details: `After undergoing a rigorous interview process at the **AUST Satellite Communication Laboratory**, I was selected and joined as an **Assistant Researcher** for a groundbreaking **3U nanosatellite project**. The project was designed to develop onboard systems and ground software for telemetry analysis and data interpretation, crucial for the satellite's functionality. 

        ![Interview](/images/Proof.jpeg)

        A year later, I was honored to be promoted to **Head of Programming**, leading a dedicated team of 4 engineers in the software development and **data visualization** efforts for the satellite project. In this leadership role, I was responsible for overseeing the development of **critical software systems** and ensuring smooth data transmission from the satellite to the ground station. Our work also focused on **real-time data interpretation**, allowing for precise telemetry analysis to monitor the satellite’s performance and mission success.

        ![Head Of Programming](/images/Head of Programming.jpeg)

        **Impact:**
        - The work significantly contributed to **advancing nanosatellite technology** and established a scalable model for future satellite missions. It also helped improve the communication protocols and **data analysis efficiency** for space missions, providing valuable insights that can be applied to larger space missions in the future.
        - The project’s success highlighted the potential of **small satellites** for space-based data collection and communication, opening doors for future satellite-based services and applications in **global communication**, **weather monitoring**, and **earth observation**.

        This experience not only enhanced my skills in **programming** and **data visualization** but also provided me with the opportunity to lead a team in delivering a **high-impact** technological solution that is poised to contribute to the growing field of **satellite communication and space exploration**.`,
    },
    {
        id: 2,
        title: 'Champion',
        organization: 'Capture The Flag (CTF)',
        date: 'September 2025',
        description:
            'Won the Champion title in the CTF competition at AUST CSE CARNIVAL 6.0, in my first participation.',
        category: 'Competition',
        prize: '5000TK + Certificates',
        stipend: '',
        image: '',
        details: `Won the **Champion** title in the **Capture The Flag (CTF)** competition at the **AUST CSE CARNIVAL 6.0**, powered by **Cyber Bangla**. The competition featured challenging categories including **Cryptography**, **Steganography**, **OSINT**, **Web Penetration Testing**, and **Reverse Engineering**. 

            This was my first time participating, and it required an intense level of **focus** and **in-depth knowledge** of various **Cyber Security concepts** and **practical applications**. Through problem-solving and applying advanced security techniques, I was able to navigate the challenges presented in each category, demonstrating proficiency in multiple domains of **cybersecurity**.

            The competition not only tested my technical skills but also honed my ability to work under pressure, reinforcing the importance of **analytical thinking** and **critical problem-solving** in the field of cybersecurity.

            ![Team](/images/Trio.jpeg)

        **Key Achievements:**
        - **Champion of the CTF competition** at AUST CSE CARNIVAL 6.0.
        - Successfully solved challenges across multiple cybersecurity domains.
        - Gained hands-on experience in **cryptography**, **web security**, **penetration testing**, and **reverse engineering**.

        **Recognition:**
        - Awarded **best performer** for completing the most complex security challenges.
        - Gained recognition for quick thinking and efficient problem-solving in a **high-pressure environment**.

        ![Certificate](/images/CTF Certificate.jpg)

        **Impact:**
        - This achievement deepened my expertise in **cybersecurity** and further fueled my passion for ethical hacking and security research.
        - It provided valuable experience in solving real-world security problems, preparing me for advanced challenges in **ethical hacking** and **security research**.
        `,
    },
    {
        id: 3,
        title: 'Champion',
        organization: 'Software Exhibition',
        date: 'July 2024',
        description:
            'Won Champion at AUST CSE Carnival 4.0 for developing an innovative software solution for a defense academy, impacting 500 trainees.',
        category: 'Competition',
        details: `Won the **Champion** title at the **Software Exhibition** during **AUST CSE Carnival 4.0** for developing an innovative software solution designed for a **defense training academy**. The software solution impacted approximately **500 trainees**, streamlining training processes and providing more effective learning tools. 

            ![Software Exhibition Team](/images/SE Team.jpeg)

            The project demonstrated **technical depth** and **creativity** by combining advanced **simulation techniques** and real-time **data visualization** to enhance the learning experience for military personnel. The system integrated various training modules that catered to **tactical simulations**, **performance analysis**, and **real-time feedback**, ensuring trainees received immediate, actionable insights during their training exercises.

        **Key Achievements:**
        - Developed a **cutting-edge software solution** for a **defense training academy** that served over 500 trainees.
        - Integrated **real-time performance analysis** and **tactical simulation** to enhance training effectiveness.
        - Delivered a solution that demonstrated **technical creativity** and practical impact in a critical training environment.

        ![Software Exhibition Certificate](/images/SE Certificate.jpg)
        
        **Recognition:**
        - Awarded **Champion** for outstanding technical innovation and contribution.
        - Acknowledged for creating a **scalable solution** that improved training efficiency.

        **Impact:**
        - The solution **revolutionized** training methods for defense personnel, improving both **individual performance** and **group coordination** during simulations.
        - It set a precedent for **innovative software solutions** in military training, combining **technology** with **real-world applications** for critical sectors.
        `,
    },
    {
        id: 4,
        title: 'Participant',
        organization: 'Programming Contests & Hackathons',
        date: 'All thoughout university',
        description:
            'I have participated in multiple programming contests and hackathons, honing my problem-solving, collaboration, and innovation skills under time constraints.',
        category: 'Competition',
        prize: '',
        image: '',
        details: `
        I have participated in multiple programming contests and hackathons, honing my problem-solving, collaboration, and innovation skills under time constraints.

        ![Contest 1](/images/Contest 4.jpeg)

        ![Contest 6](/images/Contest 6.jpeg)

        ![Contest 5](/images/Contest 5.jpeg)

        ![Contest 2](/images/Contest 2.jpeg)`,
    },
    {
        id: 5,
        title: 'UI/UX',
        organization: 'AUST CSE Carnival 4.0',
        date: 'July 2024',
        description:
            'Received an honorable mention at AUST CSE Carnival 4.0 UI/UX contest.',
        details: `Participated in the **UI/UX contest** at **AUST CSE Carnival 4.0**, where my team received an **honorable mention** for designing an intuitive and user-friendly interface for a **healthcare mobile application**. The project focused on creating an **accessible and engaging user experience** for patients managing chronic illnesses, integrating features like **personalized health tracking**, **reminder notifications**, and **interactive data visualizations**.
        ![UI](/images/UI_UX.png)
        Our design emphasized **usability** and **simplicity**, ensuring that users, regardless of their tech-savviness, could easily navigate and benefit from the app's features. The process involved extensive **user research**, **wireframing**, and **prototyping** to ensure our design met the needs of the target audience while adhering to best practices in **UI/UX design**.

        This recognition was a great opportunity to apply my design skills and collaborate with a talented team, refining my abilities in **user-centered design** and enhancing my understanding of the impact **UI/UX** can have on improving user experience and engagement.`,
        category: 'Competition',
    },
    {
        id: 6,
        title: 'Judge & Organizer',
        organization: 'AUST CSE CARNIVAL 5.0',
        date: 'February 2024',
        description:
            'Served as judge and head organizer for the Software Exhibition and organizer for the Programming Contest at AUST CSE Carnival 5.0',
        details: `Served as the **judge** and **head organizer** for the **Software Exhibition** and an **organizer** for the **Programming Contest** at **AUST CSE Carnival 5.0**. In my role as head organizer, I was responsible for overseeing the entire event, from planning and logistics to coordinating with participants and ensuring the smooth execution of the exhibition.

        As a judge, I evaluated a wide range of software projects, assessing them on criteria such as **innovation**, **technical complexity**, and **user experience**. I provided feedback to participants, helping them refine their ideas and understand how they could improve their solutions for real-world applications. 

        ![Judge](/images/Judge 1.jpeg)

        As an organizer for the programming contest, I assisted in setting up the competition structure, curating challenging problems, and managing the event to ensure fair play and timely completion. The contest was a success, attracting top talent from across the university, and it provided a platform for students to demonstrate their problem-solving skills and technical expertise in a high-pressure environment.

        ![Judge 2](/images/Judge 2.jpeg)

        This experience helped me develop my **leadership**, **event management**, and **team coordination** skills while fostering a collaborative environment for participants to showcase their talent.`,
        category: 'Academic',
    },
];

export const skills = {
    categories: [
        {
            name: 'Programming Languages',
            items: [
                'Python',
                'JavaScript',
                'TypeScript',
                'Java',
                'C++',
                'SQL',
                'C#',
                'C',
                'PHP',
            ],
        },
        {
            name: 'Web Technologies',
            items: [
                'React',
                'Node.js',
                'Express',
                'HTML',
                'CSS',
                'REST APIs',
                'Tailwind',
                'Three.js',
                'Reach Three Fiber',
            ],
        },
        {
            name: 'AI/ML',
            items: [
                'PyTorch',
                'NumPy',
                'Scikit-learn',
                'Matplotlib',
                'OpenCV',
                'Matlab',
                'Pandas',
                'Data Analytics',
                'Forecasting',
            ],
        },
        {
            name: 'Cloud, DevOps & Tools',
            items: [
                'AWS',
                'Docker',
                'Github',
                'CI/CD',
                'Linux',
                'Agile',
                'System Design',
                'Microservices',
                'Performance Optimization',
            ],
        },
        {
            name: 'Databases',
            items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Mongoose'],
        },
        {
            name: 'Blockchain & Cyber Security',
            items: [
                'Solidity',
                'Ethereum',
                'Web3.js',
                'IPFS',
                'Cryptography',
                'OSINT',
                'Steganography',
                'Web Security',
            ],
        },
    ],
};

export const projects = [
    {
        id: 1,
        name: 'Link and Level UP',
        description:
            'The project is a training platform that allows users to access training modules, track their progress, and interact with mentors in real-time.',
        longDescription:
            'The project is a training platform that allows users to access training modules, track their progress, and interact with mentors in real-time. It was successfully delivered within 6 months',
        technologies: [
            'Express',
            'AWS EC2',
            'AWS RDS MySQL',
            'AWS S3',
            'Socket.IO',
            'Stripe',
        ],
        github: 'https://github.com/Synex-Digital/LLU-Backend',
        demo: 'https://linkandlevelup.com/',
        image: 'code-assistant',
        color: 'from-orange-500 to-red-500',
        stats: {
            stars: 0,
            users: '1K+',
            downloads: '5K+',
        },
        features: [
            'Connects **trainers**, **players**, and **parents** for seamless communication and coordination',
            'Sends **email notifications** for updates and reminders to users',
            'Integrates **AWS S3** for scalable file storage and **AWS EC2** for dynamic cloud computing',
            'Uses **AWS RDS MySQL** for secure and scalable database management',
            'Supports **file uploads** for training materials and resources',
            'Handles **authentication** and **authorization** with **JWT** and **OAuth2** for secure user access',
            'Provides **real-time communication** between mentors and learners using **Socket.IO** and **Redis scaling**',
            'Auto-scaling based on user demand, ensuring **reliable performance** for growing user base',
        ],
        storyBehindIt: `CEO of my company was approached by **Md. Jubaer Riyad** (https://www.fiverr.com/jubaerdr), a senior **UI/UX designer** in the freelance field, who had received a project for **Link and LevelUp**, a Canadian enterprise training platform. **Tammy Gauthier**, the CEO of Link and LevelUp, had initially approached Jubaer to handle the **UI/UX** part of the application. However, Jubaer, knowing the technical depth of our company, **Synex Digital**, suggested that we handle the **backend development** for the platform.

                The project began with an in-depth **planning phase**, as we were tasked with building the backend architecture to support **Android**, **iOS**, and **web clients** for the platform, serving nearly **1000 active users**. As the **lead backend developer**, I played a critical role in designing a **stateless microservice API** with **JWT/OAuth2** authentication and integrating **AWS S3** for secure, scalable media handling.

                Over the course of **6 months**, we developed the backend, tackling **complex database relationships**, designing security protocols, and ensuring the system was robust enough for high-volume use. This experience was invaluable as I learned about **complex architectures**, handled the implementation of various **AWS services**, and worked through intricate security logic to keep the system safe and efficient.

                ![Link and Level UP](/images/LLU.png)`,
        howIGotTheWork: `I was working at **Synex Digital**(https://www.synexdigital.com/) when I got this opportunity. **Md. Jubaer Riyad** introduced me to the project, which was initially discussed with **Tammy Gauthier**, the CEO of **Link and LevelUp**. The project was meant to handle the **backend development** of the platform, and after discussing the project’s scope, Jubaer suggested us for the task due to our expertise in developing scalable backend solutions. 

        My team and I worked closely with Jubaer’s design team to ensure seamless integration of the UI/UX design with the backend systems. The project was challenging, as it involved **complex database management**, **user authentication** systems, and **AWS integrations**. Working with **AWS S3**, **EC2**, and **RDS** for data management and storage made me delve deeper into cloud services and **data security**.

        ![Team Collaboration](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80)`,
        whatItDoes: `The project is a **training platform** that allows users to access training modules, track their progress, and interact with mentors in real-time. Here’s what it offers:

                **Core Features:**
                - **Real-time chat system** between mentors and learners, powered by **Socket.IO** and Redis-based scaling.
                - **Secure media handling** for training content using **AWS S3** with presigned URLs for faster uploads and downloads.
                - **Authentication and authorization** using **JWT** and **OAuth2** for secure access control.
                - **Scalable microservices architecture** for handling growing user demands.
                - **Payemnt** integration using **Stripe**.
        
                **Technical Implementation:**
                - **Backend API** built with **Node.js** and **Express**.
                - Integrated **AWS S3** for scalable media handling and file storage.
                - Developed a **stateless microservice architecture** for flexible and scalable deployment.

                **Security Features:**
                - Implemented **Rate Limiting** for handling DDoS Attack.
                - Designed a multi-layered security system for **user authentication** and **data protection**.

                **Impact:**
                - The backend infrastructure we built supports over **1000 active users** and ensures **seamless user experience** for training delivery.
                - The **AWS S3 integration** improved the speed of media handling by **40%**, allowing users to access content faster.
                - The **scalable architecture** ensures that the platform can handle future growth, supporting an increasing number of users without performance degradation.

                ![Feature Demo](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80)

                **Results:**
                - Successfully delivered the backend within **6 months**.
                - Ensured secure, **fast data access** and **real-time communication** capabilities.
                - Built a **robust system** for future scalability and efficiency, laying a foundation for future features like **AI-driven learning** and **personalized content recommendations**.

                **Future Developments:**
                - The project is now poised for future **expansion**, including adding **advanced AI features** and **more interactive learning modules**.`,
    },
    {
        id: 2,
        name: 'My Portfolio',
        description:
            'Interactive, 3D-enabled personal portfolio built with React, React Three Fiber, and Framer Motion, showcasing real-time 3D scenes and seamless UI integration.',
        longDescription:
            'A fully interactive portfolio website combining 3D scenes and UI elements using React, React Three Fiber, and Framer Motion. Features include smooth page transitions, scroll-linked animations, and responsive design with Tailwind CSS.',
        technologies: [
            'React',
            'React Three Fiber',
            'React Three Drei',
            'Tailwind CSS',
            'Framer Motion',
        ],
        github: 'https://github.com/ShihabSarar12/myportfolio',
        image: 'task-queue',
        color: 'from-purple-500 to-pink-500',
        stats: {
            stars: 5,
        },
        features: [
            'Interactive 3D scene with React Three Fiber',
            'Smooth page transitions using Framer Motion',
            'Responsive UI with Tailwind CSS',
            'Scroll-linked animations syncing UI and 3D scene',
            'Optimized for mobile responsiveness',
            'Realistic wave shaders for dynamic water effects',
            'Custom scroll-based navigation with 3D scene updates',
            'Imported and rendered 3D models (fish, sharks, divers)',
            'UI design created with Figma AI and human refinement',
        ],
        storyBehindIt: `This portfolio project began as a personal challenge. I wanted to build a website that didn’t just display my work but felt alive — something that blended **3D experiences** with clean, modern UI. I chose **React**, **React Three Fiber**, **Framer Motion**, and **Tailwind CSS** as my core stack, hoping to merge smooth animations with interactive 3D scenes.

        But the moment I started integrating UI elements with 3D objects, the real struggle began. Simple things like making the **navbar scroll to a specific section** while keeping the 3D scene responsive turned into multi-day debugging marathons. Handling **scroll-position mapping**, **canvas responsiveness**, and the **synced motion** between UI and 3D models was far more challenging than I initially expected.

        The project evolved through countless iterations. Framer Motion animations had to be rewritten multiple times to sync properly with R3F, and handling mobile responsiveness—especially on iPhones—tested every ounce of patience. One of the biggest challenges was balancing performance with visual quality, ensuring the site ran smoothly even with heavy 3D elements.

        The UI layout was refined with the help of my friend **Tanim Bin Aziz**, whose sense of design helped polish the final look. However, the **core UI wireframe** was generated using **Figma AI**, which gave me a solid foundation to build on. What started as a simple idea grew into a deeply technical, creatively challenging project that pushed me to my limits.`,

        howIGotTheWork: `This wasn’t a client project—it was something I created to represent everything I’ve learned over the past few years. But the inspiration to build such a complex portfolio came from my experiences working on React, 3D projects, and backend systems, where I constantly needed a platform to showcase my skills.

        To bring this site to life, I relied heavily on:
        - **React Three Fiber** for the 3D canvas
        - **Framer Motion** for synchronized animations
        - **Tailwind CSS** for fast styling
        - **Figma AI** for generating the base UI structure
        - Feedback & design improvements from **Tanim Bin Aziz**

        ![Programming](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80)

        Throughout the process, I researched 3D integration techniques, canvas optimization tricks, and scroll-based interactions used by modern design studios. The hardest task was getting **UI events (like navbar clicks)** to drive **3D scene transitions** smoothly. Achieving perfect synchronization between scroll, motion values, and canvas state pushed me to deeply understand how R3F and Framer Motion communicate.

        In the end, this project became a personal milestone—proof that I could architect a fully interactive, immersive portfolio from scratch.`,

        whatItDoes: `This portfolio website is a fully interactive, **3D-enabled personal showcase** that blends **UI** and **3D scenes** into a seamless and dynamic experience. The project pushes the boundaries of typical web portfolios by integrating **real-time 3D interactions** with **UI elements**, providing an immersive and engaging experience for users.

                **Core Features:**
                - **3D Interactive Scene** powered by **React Three Fiber**, where users can interact with the environment and see real-time changes in the 3D world.
                - **Smooth page transitions** powered by **Framer Motion**, adding fluid animations to UI elements when navigating between sections.
                - **Responsive UI** built with **Tailwind CSS**, ensuring a consistent, clean design across all devices, from mobile to desktop.
                - **Scroll-linked animations** that synchronize UI sections with 3D elements, such as objects moving or changing position in the scene based on scroll events.
                - **Navbar jump-to-section** feature that allows users to scroll to different sections, while simultaneously updating the 3D scene to reflect the corresponding content.
                - **Optimized mobile behavior** with conditional rendering for unsupported browsers, ensuring users on mobile devices have a smooth experience, even if certain 3D features are limited.

                **Wave Shaders & 3D Scene Interaction:**
                - The **wave shaders** process dynamic water effects, adding **real-time ocean waves** with complex physics. By leveraging **GLSL shaders**, waves are rendered with both large and small-scale movements, creating **realistic water surfaces** that change over time with user interaction.
                - The shaders use a **noise function** to simulate natural wave motion and adjust based on the time and scene position, adding depth and immersion to the 3D scene. This process uses multiple wave parameters such as **elevation**, **frequency**, and **speed** to control wave movement.
                - The shader effect is **optimized** for performance, making sure that the **3D water effect** does not compromise the overall experience, even with multiple animations running concurrently.


                ![Wave](/images/Wave.png)

                **Scroll Control Logic:**
                - The project implements advanced **scroll-based interactions**, where the user scrolls to navigate through the page, triggering corresponding **animations** and updates in the 3D scene. This is made possible through **custom hooks** that map **UI sections** to specific 3D scene positions.
                - As the user scrolls, the UI updates based on the corresponding section, while the **3D scene** adapts by adjusting the position of models, such as **fish schools**, **sharks**, and **divers** in real-time. This creates a fluid and interactive experience where both UI and 3D elements work in harmony.

                **Models and 3D Content:**
                - Various **3D models** were imported and optimized for performance, including:
                    - **Underwater Background** that provides a visually rich and dynamic backdrop for the scene.
                    - **Fish and Shark models**, which move and interact with the scene as users scroll through the page, adding realism and life to the underwater world.
                    - **Diver model**, which is animated to simulate realistic movements within the 3D environment.
                    - **Bubbles** and **sand models** that add subtle effects to enhance the overall visual quality of the 3D experience.
                - The models were **imported and optimized** for real-time performance, ensuring that the scene runs smoothly even with complex interactions.

                **Technical Implementation:**
                - Built entirely with **React + TypeScript**, ensuring a scalable, type-safe codebase that can easily be extended and maintained.
                - **3D models** are rendered via **React Three Fiber**, with **Drei helpers** for easy handling of scenes, lights, and camera controls.
                - Animation logic is powered by **Framer Motion's motion values**, creating smooth, synchronized animations between UI and 3D components.
                - **Custom hooks** are used for **UI-to-3D scroll mapping**, linking user scroll events to the 3D scene positions and creating a dynamic, interactive experience.
                - **Tailwind CSS** is utilized for a clean and scalable design system that is highly responsive and easily customizable.
                - **Figma AI** was used in conjunction with human refinement for the **UI layout**, ensuring an intuitive and visually appealing interface.

                ![Feature Demo]()

                **Impact:**
                - Demonstrates mastery of **complex UI–3D integration**, combining cutting-edge web technologies to create an engaging user experience.
                - Showcases both **full-stack** and **frontend technical depth**, highlighting expertise in **3D rendering**, **animation**, and **interactive web design**.
                - Serves as a professional, interactive **resume** for recruiters and clients, effectively demonstrating **problem-solving**, **design**, and **development** skills.
                - Pushes the boundary of typical developer portfolios by using **modern web graphics** and **interactive storytelling** to showcase personal work and expertise.
                - Represents over **100+ hours** of experimentation, debugging, optimization, and refinement, making this portfolio a true reflection of both technical proficiency and creativity.
        `,
    },
    {
        id: 3,
        name: '3U Nano Satelite',
        description:
            'Real-time telemetry analysis and data visualization system for 3U nanosatellite, ensuring mission success and satellite health monitoring.',
        longDescription:
            'Developed onboard and ground software for a 3U nanosatellite, focusing on real-time **telemetry analysis** and **data visualization**. The system ensured efficient performance tracking and early anomaly detection for mission success.',
        technologies: ['React', 'WebSocket', 'Node.js'],
        image: 'dashboard',
        color: 'from-blue-500 to-cyan-500',
        stats: {},
        features: [
            'Sub-second data updates',
            '30+ chart types',
            'Collaborative dashboards',
            'Custom data connectors',
            'Export and sharing features',
        ],
        storyBehindIt: `The opportunity to work on the **3U Nanosatellite project** at **AUST Satellite Communication Laboratory** came as a major milestone in my academic and professional journey. As a student with a keen interest in **satellite communication systems**, I was excited to join the lab as the **Head of Programming**. My primary responsibility was to lead the **software development** and **data visualization** team of **4 engineers**, where we focused on building the onboard systems and ground software necessary for real-time **data interpretation** and **telemetry analysis** for the satellite.

                This project was unique in that it not only involved deep technical challenges but also required close collaboration between **hardware** and **software teams** to ensure seamless integration. The onboard systems we developed allowed for continuous monitoring of the satellite’s performance, while the ground software ensured accurate telemetry analysis, crucial for the success of the satellite mission.

                One of the most rewarding moments of the project was when our work was **featured in The Daily Star**, a reputable news source, which recognized the impact of our research on satellite communication in Bangladesh. Our team had also the privilege of attending **meetings with Bangladesh Satellite Company Limited**, where we discussed potential partnerships and applications for our work. Additionally, I had a one-on-one meeting with the **Vice Chancellor** of the university, where I was able to present the progress of the project and discuss its future potential.

                ![Meeting with VC](/images/Meeting with VC.jpeg)`,

        howIGotTheWork: `This research project began under the mentorship of **Dr. Omar Farrok**, a top 2% scientist from **Stanford University**, who guided the team through the technical and operational aspects of building the **3U nanosatellite**. I was selected to lead the software team after showing my capabilities in backend systems and data visualization during earlier lab projects. Our work received significant attention from both the university and external organizations, leading to collaboration with **Bangladesh Satellite Company Limited** and recognition by major news outlets.

                The lab’s work on satellite communication systems also opened doors for further research in space technology, and I was thrilled to be part of the team that contributed to this pioneering project. My role expanded over time, where I not only led the software team but also became involved in **system integration** and **communication protocols**. 

                ![NanoSatellite 1](/images/NanoSat 4.jpeg)
                
                ![NanoSatellite 2](/images/NanoSat 8.jpeg)

                ![NanoSatellite 1](/images/NanoSat 6.jpeg)
                
                `,

        whatItDoes: `As **Head of Programming** for the 3U Nanosatellite project, I led the development of **onboard systems** and **ground software** for real-time **telemetry analysis**. This is what the project achieved:

                **Core Features:**
                - **Onboard telemetry software** for real-time data collection and analysis, ensuring the satellite’s health and mission success.
                - Developed **data visualization tools** that enabled mission control to interpret telemetry data, track satellite performance, and detect issues early.
                - Created a **cloud-based dashboard** that provided live telemetry data and historical performance trends.
                - Designed **automated failure detection systems** that alerted mission control when satellite performance deviated from expected parameters.

                **Technical Implementation:**
                - **Data visualization** tools built using **Python** and **Matplotlib** for graphical analysis of satellite data.
                - **Telemetry data** processed in real-time using **Node.js** for communication with onboard systems and ground control.
                - **Database integration** with **MySQL** (via **AWS RDS**) to store large datasets from the satellite’s telemetry systems.
                - **Security protocols** for ensuring the integrity of data being transmitted between the satellite and ground station.

                ![Bangladesh Satellite Company Limited](/images/NanoSat news.jpeg)

                **Impact:**
                - Our software system played a crucial role in ensuring **real-time monitoring** and decision-making during the satellite’s mission.
                - Successfully **visualized satellite data** and enabled engineers to **detect anomalies** early, contributing to the project’s overall success.
                - The system was adopted as a model for future satellite missions, showcasing **real-time data analysis** and **telemetry** in **satellite communication**.


                **Real-World Impact:**
                - Featured in **The Daily Star**, our work was recognized as a significant advancement in **satellite communication** in Bangladesh.

                ![Daily Star News](/images/Daily Star.png)

                - **Collaborated with Bangladesh Satellite Company Limited**, discussing potential applications for the satellite's communication system.
                - Successfully presented the project to the **Vice Chancellor** of the university, gaining recognition for the lab’s contributions to satellite technology.

                This experience was invaluable, as I developed **leadership skills**, **advanced software engineering techniques**, and gained exposure to real-world satellite systems and their applications in communication and data interpretation.`,
    },
];
