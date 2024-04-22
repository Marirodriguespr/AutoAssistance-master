import {React, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const NewMaintencePage = ({ navigation }) => {
  const [type, setType] = useState('');
  const [isRepeat, setIsRepeat] = useState(false);
  const [isKilometersEnabled, setIsKilometersEnabled] = useState(false);
  const [isMonthsEnabled, setIsMonthsEnabled] = useState(false);
  const [kilometers, setKilometers] = useState('');
  const [months, setMonths] = useState('');
  const [description, setDescription] = useState('');

{/* Salvar */}
  const handleAddReminder = () => {
{/* Alerta ao Tentar Salvar sem Preencher os Campos Necessários */}
    if (!type) {
      Alert.alert(
        'Campos não preenchidos',
        'Por favor, preencha todos os campos obrigatórios.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
            style: 'cancel',
          },
        ],
        { cancelable: false }
      );
      return;
    }

{/* Mensagem no Console */}
    console.log(
      'Novo lembrete adicionado:',
      'Tipo de manutenção:', type,
      ', Repetição:', isRepeat ? 'Ligada' : 'Desligada',
      ', Quilometros:', isKilometersEnabled ? kilometers : 'Não habilitado',
      ', Meses:', isMonthsEnabled ? months : 'Não habilitado',
      ', Descrição:', description
    );
    navigation.goBack();

{/* Alerta de Sucesso ao Salvar */}
    Alert.alert(
      'Novo Lembrete Salvo com Sucesso!'
    ); 
  };

{/* Cancelar */}
  const handleCancelReminder = () => {
    navigation.goBack();
  };


  return (
    <View style={styles.container}>
    
{/* Tipo do Lembrete */}
      <Text style={styles.label}>Tipo:</Text>
      <Picker
        selectedValue={type}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setType(itemValue)}
        mode={'dropdown'}
      >
        <Picker.Item label="Tipo de Manutenção" />
        <Picker.Item label="_____________________________________" />
        <Picker.Item label="Ar Condicionado" value="ar condicionado" />
        <Picker.Item label="Bateria" value="bateria" />
        <Picker.Item label="Correia" value="correia" />
        <Picker.Item label="Filtro de Ar" value="filtro de ar" />
        <Picker.Item label="Filtro de Combustível" value="Filtro de Combustível" />
        <Picker.Item label="Filtro de Óleo" value="Filtro de Óleo" />
        <Picker.Item label="Fluído de Freio" value="Fluído de Freio" />
        <Picker.Item label="Luzes" value="Luzes" />
        <Picker.Item label="Pastilha de Freio" value="Pastilha de Freio" />
        <Picker.Item label="Pneus" value="Pneus" />
        <Picker.Item label="Revisão" value="Revisão" />
        <Picker.Item label="Suspensão" value="Suspensão" />
        <Picker.Item label="Amortecedores" value="Amortecedores" />
        <Picker.Item label="Troca de Óleo" value="Troca de Óleo" />
      </Picker>

{/* Frequência de Repetição */}
      <Text style={styles.label}>Frequência:</Text> 
      <View style={styles.linha}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.repeatCheckbox, isRepeat && styles.checkedCheckbox]}
            onPress={() => setIsRepeat(!isRepeat)}
          >
            <Text style={[styles.checkboxLabel, isRepeat && styles.checkedCheckboxLabel]}>Repetir</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.repeatCheckbox, !isRepeat && styles.checkedCheckbox]}
            onPress={() => setIsRepeat(!isRepeat)}
          >
            <Text style={[styles.checkboxLabel, !isRepeat && styles.checkedCheckboxLabel]}>Não Repetir</Text>
          </TouchableOpacity>
        </View>
      </View>
      

      <Text style={styles.label}>Notificar a cada:</Text>

{/* Quilometros para Notificar */}
      <View style={styles.linha}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, isKilometersEnabled && styles.checkedCheckbox]}
            onPress={() => setIsKilometersEnabled(!isKilometersEnabled)}
          />
          <Text style={styles.checkboxLabel}>Quilometros:</Text>
        </View>
        {isKilometersEnabled && (
          <TextInput
            style={styles.checkboxInput}
            value={kilometers}
            onChangeText={setKilometers}
            placeholder="Km"
            keyboardType="numeric"
          />
        )}
      </View>

{/* Meses para notificar */}
      <View style={styles.linha}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[styles.checkbox, isMonthsEnabled && styles.checkedCheckbox]}
            onPress={() => setIsMonthsEnabled(!isMonthsEnabled)}
          />
          <Text style={styles.checkboxLabel}>Meses:</Text>
        </View>
        {isMonthsEnabled && (
          <TextInput
            style={styles.checkboxInput}
            value={months}
            onChangeText={setMonths}
            placeholder="M"
            keyboardType="numeric"
            scrollEnabled={true}
          />
        )}
      </View>

{/* Descrição do Lembrete */}
      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.descriptionInput}
        value={description}
        multiline={true}
        rows={6}
        onChangeText={setDescription}
        placeholder="Descrição da manutenção"
      />

{/* Botão Salvar */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddReminder}>
        <Text style={styles.addButtonText}>Salvar</Text>
      </TouchableOpacity>

{/* Botão Cancelar */}
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancelReminder}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#FFFFFF',
  },

  label: {
    color: '#6A6A6A',
    fontSize: 20,
    fontWeight: 'bold',
  },

  picker: {
    color: '#6A6A6A',
    borderBottomColor: '#6A6A6A99',
    borderBottomWidth: 2,
    fontSize: 18,
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    color: '#6A6A6A',
    borderBottomColor: '#6A6A6A99',
    borderBottomWidth: 2,
    fontSize: 18,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#6A6A6A99',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: '#009F4D',
  },
  checkboxLabel: {
    color: '#6A6A6A',
    fontSize: 20,
  },
  checkedCheckboxLabel: {
    color: '#FFFFFF',
  },
  checkboxInput: {
    color: '#6A6A6A',
    borderBottomColor: '#6A6A6A99',
    fontSize: 18,
    borderBottomWidth: 2,
    marginBottom: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
  },

  descriptionInput: {
    color: '#6A6A6A',
    borderColor: '#6A6A6A99',
    borderWidth: 2,
    height: 160,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
    paddingHorizontal: 10,
    paddingTop: 10,
    textAlignVertical: 'top',
  },

  repeatCheckbox: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#6A6A6A99',
    marginRight: 10,
    marginTop: 10,
  },

  linha: {
    flexDirection: 'row',
  },

  addButton: {
    backgroundColor: '#009F4D',
    borderColor: '#009F4D',
    borderWidth: 4,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  cancelButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#009F4D',
    borderWidth: 4,
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#009F4D',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NewMaintencePage;
