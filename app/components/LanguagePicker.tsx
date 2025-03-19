import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { styles } from '../styles/LoginStyle';
import { RootState } from '../store';
import { setLanguage } from '../reducers/settingsSlice';
import { LOCALIZATION_LANGUAGES } from '../constants';
import { handleLanguageChange } from '../helpers/LocalizationHelper';

const LanguagePicker: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { language } = useSelector((state: RootState) => state.rootReducer.settings);

    const onLanguageChange = (lan: 'ar' | 'en') => {
        dispatch(setLanguage(lan));
        handleLanguageChange(lan);
    };

    return (
        <View style={styles.pickerContainer}>
            <Picker
                selectedValue={language}
                onValueChange={onLanguageChange}
                style={styles.picker}
            >
                {Object.entries(LOCALIZATION_LANGUAGES).map(entry => (
                    <Picker.Item key={entry[0]} label={t(entry[1])} value={entry[0]} />
                ))}
            </Picker>
        </View>
    );
};

export default LanguagePicker;