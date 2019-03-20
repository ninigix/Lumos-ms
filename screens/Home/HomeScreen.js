import React from 'react';
import {
    ScrollView,
    Text,
    View,
} from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';

import Card from './Card/Card';
import TestContainer from '../../components/Test/TestContainer';
import styles from './HomeScreenStyles';
import {messages} from './HomeScreenConstants';


export default class HomeScreen extends React.Component {
    mapCards = () => cardsImages.map((currentImage, index) => (
        <Card
            title={messages.cards[index].title}
            text={messages.cards[index].text}
            image={currentImage.source}
            key={`${index}__${currentImage.source}`}
        />
    ));

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.fullScreen}>
                    <FullWidthImage source={require('../../assets/images/bulb-wire.jpg')} width={1000} height={1200}/>
                    <Text style={styles.title}>{messages.title}</Text>
                    <TestContainer/>
                </View>
                {this.mapCards()}
            </ScrollView>
        )
    }
}

const cardsImages = [
    {source: 'https://lh3.googleusercontent.com/C1w7p5JBu7mv16OEaId7ZQv0tPmCccbXr1gnidkSWw5zH4U7mR2bftZqdYZZNk2GE-9Jn_48U0nmJLDGa-FbTriFDDG3adxBeUGYsFQ-z1wk_4Os__EBd3sUeyxXOLePUrCZPn0yIab8SDvqEFqCckhox0LzrdvlY06QodtecY7B6kmidoXyEY39HaN8AIJOTchLICJ-V1LWE2zu-TLbhloxhayQ53ZiNr4opitvq4zhEdYTjsuwFv1l1DDdcuN-MpPx2szc5bPUdY7WDbXs7jjj0j_Wyui0ZrD9xau-VkP4ZeVLsfoJsTKtJxeKiokMyj872XcHxJQbT-eXvSpdd5q_twe_FGKaiJxBlVjN-s282A3jN2ZHsBXHGLxLRw2GgKvGz2DLuYSjMD7tY60bJaUcZwQlU_9qug7euLIjiSdL82S3kKgv8zrBM2bEx6c877dd-acsrLUSiPZRwOArZAh1YQ5SlolIWE0b34j9DZoQH0gerDLB946QGivSUlAcusFKvUXq_rW55natM2L01fRXmCGwkvYLN8JyU5S59RhzSqrumbMrTfUOVyGDGoP4GAE0jQNaeApr7B99Zg7kxsE8J7c25d_XuT26-I3tv2RWLISH0Ou6mTcY-8wJ2Rw4QVbROqu78asTTWHsq3HuVK61FD7tiLE=w999-h643-no'},
    {source: 'https://lh3.googleusercontent.com/WCQQO2xa8ND6HN4m8v-iz0pbiRR9Qieme4HV2YJdWdTgcJX_NkARQMJHySCQE4dSuoMGsCQFN2WFvnRqtbcdSSIpXhq47WrlScPosj5gpSwuAx2Ici16CCqrQPkDhme1s_lgPVarVRzX7k9Yj0MXQTXAlaroK1i9Vh6rBnjraFVysH59O4R7CbU95zLan6TSnRdiD5-3DuSwnWAeJY487cIYeKlyq8mFLR42ONB-gFtm2Ts4f8J5UpYmKWyrwXasMWbAxIsiTunrznd-Cc7IZHf4PjzxNxe6XggX5oDUib3EEC7gRAAHHbJMd_ddSLXYLfaT0qF_ewqWkllMaNKm2Q-UrS98rMLDUGU3uklxuqdWfjD7FAdOcREUJF1bA_DnjDCEGmK9DcBynzOPXf2JE3T5em0mJ4UBaO2AvGl2BD3b_pDeEEkY8T73roReuOecPiPVFn8UxwHUxWVsQ5zbvn-W2Uv4Ln5xfTrD3bSAREBiGAOZkYJpQYSd-plz7bFO-xbiJq8R1a2tW4V0JaMUoNWTqcCC19xc-GgASP0CybYkiiKi931RDeYXdj6JIYvxc8Lh0NXhi_urBE1aMV-KydUjMlxvA73sKOL4SYwLO19kYrIk8kr6oKetf6tlWjv7Jjz55y8AYCg1s49eAbDsZRVTiqnb09k=w339-h338-no'},
    {source: 'https://lh3.googleusercontent.com/vmNoh0rTl3k6olSJxoYixzaR11WoRKQLtZ5tVB1CWeBffYRPX2ojNOptKDntiaO9eIE35ynITXu0EqSVH7lorZAZzCevcIhuP11slfd8SS19mNAQR6b1tOpNrEd2vXGCGuQMZrvlCTlmRiZDJquTHQDoU7PZqSdobMBt7JA8Igs7EZ67RC0K9hCASxBhD8pVjUfYbbsT_a7ZonsJpfIdWduzhxnwOei5hHAsaUakuVA0Ok1i_raCcWE6EGKwSPjPDljQe702EbA0v99BUHVrQpgmS1jPPlTW2Nz7wRk8B8ChQJbycFQMBDOh5-PeQaLhKy94BMCnlPz3NLjkMHvHc650QGMzXoyJHbmqHZo6mkNd0SldVfMI3jaGBOh6ytb0TDLctmzVT4G0mskqhDJnrkH_sSDEKm4gzBRzYVOlGrRpbkShDG9kW7F8LXTW7yoCF33EFRJ6UC203Qn-9yoA03AUzTmZfkS1-69xKRPxYvwFjKEeEieDZo7A6DcXA5i0HQ7i4hmB2sgcM4jr0YWUcIWCU6wB3knyp5gvk4XChjlpm7h2r8zDJN5Lw69EGPabgbD2C-SB5VEmOLJsdVZDSLv6L3n6Kh4HsaknZMuZKm-vPdhQD8ThWLaDvfjVd8idPVWb5KJvbGm8aCL0UQyUfcrmxV3VYKw=w1000-h650-no'}
];