import React, { useState } from 'react';
//import Popup from "../components/Modal";
import { useSelector, useDispatch } from 'react-redux';
//import { showModal, hideModal } from "../store/tickers";
import {
    ActivityIndicator,
    Text,
    View,
    FlatList,
    StyleSheet,
} from 'react-native';

type DataItemValueType = {
    baseVolume: string;
    high24hr: string;
    highestBid: string;
    id: number;
    isFrozen: string;
    last: string;
    low24hr: string;
    lowestAsk: string;
    marginTradingEnabled: string;
    percentChange: string;
    postOnly: string;
    quoteVolume: string;
};

export type DataItemType = [string, DataItemValueType];

export default function Quotes() {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    // @ts-ignore
    const { quotes, error, isLoading } = state;
    const [info, setInfo] = useState<DataItemType | undefined>();

    const handleShowPopup = (item: any) => {
        //@ts-ignore
        dispatch(showModal());
        setInfo(item);
    };

    const arrQuotes: DataItemType[] | undefined =
        quotes && Object.entries(quotes);

    return (
        <View style={styles.wrapper}>
            <Text>Quotes</Text>
            {error && (
                <View style={styles.errorBox}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}
            {isLoading && <ActivityIndicator size="large" />}
            {!isLoading && (
                <View>
                    <FlatList
                        data={arrQuotes}
                        renderItem={({ item }) => {
                            const key = item[0];
                            const value = item[1];
                            const { id, last, highestBid, percentChange } =
                                value;

                            return (
                                <View key={id} style={styles.listWrapper}>
                                    <Text style={styles.row}>{key}</Text>
                                    <Text style={styles.row}>{last}</Text>
                                    <Text style={styles.row}>{highestBid}</Text>
                                    <Text style={styles.row}>
                                        {percentChange}
                                    </Text>
                                </View>
                            );
                        }}
                    />
                </View>
            )}
            {/*{info && (*/}
            {/*    <Popup*/}
            {/*        show={modal}*/}
            {/*        data={info}*/}
            {/*        // @ts-ignore*/}
            {/*        hidePopup={() => dispatch(hideModal())}*/}
            {/*    />*/}
            {/*)}*/}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    errorBox: {
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginBottom: 16,
        backgroundColor: '#E41919',
    },
    errorText: {
        color: '#ffffff',
        fontSize: 18,
    },
    listWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 0.5,
    },
    row: {
        flex: 1,
        fontSize: 14,
        paddingHorizontal: 4,
        paddingVertical: 4,
    },
});
