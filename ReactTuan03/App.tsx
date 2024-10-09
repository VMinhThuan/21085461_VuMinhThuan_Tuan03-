import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [result, setResult] = useState('');w

  const solveQuadraticEquation = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    const discriminant = bNum * bNum - 4 * aNum * cNum;

    if (discriminant > 0) {
      const x1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      setResult(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    } else if (discriminant === 0) {
      const x = -bNum / (2 * aNum);
      setResult(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      setResult('Phương trình vô nghiệm');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải Phương Trình Bậc 2</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số a"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số b"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập hệ số c"
        keyboardType="numeric"
        value={c}
        onChangeText={setC}
      />
      <Button title="Giải Phương Trình" onPress={solveQuadraticEquation} />
      {result !== '' && <Text style={styles.result}>{result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
