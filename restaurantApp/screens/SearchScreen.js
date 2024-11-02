import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultList from '../components/ResultList'

export default function SearchScreen() {
    const [searchApi, results, errorMessage] = useResult();
    const [term, setTerm] = useState('')

    const filterResultByPrice = (price) => {
      return results.filter((results)=> {
        return results.price === price;
      })
    }
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {
        errorMessage ? <Text>{errorMessage}</Text> : null
      }
      {
        results.length == 0 ? <></> : 
      <> 
        <ResultList title = {'Ucuz Restoranlar'} results = {filterResultByPrice('₺')}/>
        <ResultList title = {'Uygun Restoranlar'} results = {filterResultByPrice('₺₺')}/>
        <ResultList title = {'Pahalı Restoranlar'} results = {filterResultByPrice('₺₺₺')}/>
        </>
      }
    </View>
  )
}

const styles = StyleSheet.create({})