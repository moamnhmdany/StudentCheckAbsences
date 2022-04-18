import { View, Text ,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
import React from 'react'
import Header from '../components/header'
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
let widthD = Dimensions.get('screen').width;
let hightD = Dimensions.get('screen').height;
const Lectures = props => {

  const stateData = {
    tableHead: ['اليوم', 'المحاضرة الاولى', 'المحاضرة الثانية', 'المحاضرة الثالثة'],
      tableTitle: ['الاحد', 'الاثنين', 'الثلاثاء', 'الاربعاء','الخميس'],
      tableData: [
        ['برمجة هيكلية', 'معالجة بيانات', 'احتسابية'],
        ['رياضيات', 'تنظيم حاسوب', 'لغة جافا'],
        ['مشاريع', 'هندسة البرمجيات', 'قواعد البيانات'],
        ['معالجات', 'ذكاء', 'شبكات'],
        ['تشفير', 'معالجة صور', 'ماتلاب'],

      ]
  }

  const Row = ({data}) => (
    
      <View style={{borderColor:'#d2d5d9',borderLeftWidth:1,padding:5,width:widthD/4.44,height:hightD/15,alignItems:'center',justifyContent:'center'}}>
        <Text style={styles.btnText}>{data}</Text>
      </View>
       
  );

  const Col = ({data}) => (
    
    <View style={styles.colData}>
      <Text style={styles.btnText}>{data}</Text>
    </View>
   
);
const Cell = ({data,onPress}) => (
  <TouchableOpacity
  onPress={onPress}
  style={styles.cellStyle}
  >
  <View >
    <Text >{data}</Text>
  </View>
  </TouchableOpacity>
);

  return (
    <View style={styles.LectureContainer}>
      <Header
      navigation55={props.navigation}
      />
      <View style={styles.tableStyle} >
      <View style={styles.rowDay}>
       {stateData.tableHead.map((e,i)=>{
         return(
           <Row
           key={e}
           data={e} />
          )
           })}   
        </View> 
      <View style={styles.colStyle}>
      {stateData.tableTitle.map((e,i)=>{
         return(
           <Col data={e} />
          )
           })}   
      </View>
      <View style={styles.cellData}>
     {stateData.tableData.map((elment)=>{
      return <View style={styles.cellItems}>
         {elment.map((e)=>{
          return (<Cell
             onPress={()=>props.navigation.navigate('check')}
            data={e}/>)
         })}
         </View>
     })}  
      </View>
     </View>        
 </View>
  )
}

const styles = StyleSheet.create({
  LectureContainer:{
    flex:1,
    
  },
  tableStyle:{
    margin:15,
    marginTop:50,
    borderWidth:3,
    borderRadius:9,
    alignContent:'space-between',
    width : widthD/1.1,
    height:hightD/2,
    borderColor:'#d2d5d9'
  },
  rowDay:{
    flexDirection:'row',

  },
  colStyle:{
    height:hightD/2.33,
   
    
  },
  colData:{
    
          borderTopWidth:1,
          borderRightWidth:1,
           padding:5,
           alignItems:'center',
           justifyContent:'center',
           width:widthD/4.40,
           height:hightD/11.6,
           borderColor:'#d2d5d9'

          },
  cellStyle:{
      borderRightWidth:1,
    borderTopWidth:1,
      width:widthD/4.5,
      alignItems:'center',
      justifyContent:'center',
      borderColor:'#d2d5d9'

          } ,      
  cellData:{
          
        //  borderWidth:3,
         // marginTop:-332,
          position:'absolute',
          bottom:-4,
          left:83,
         

          }  ,
 cellItems:{
         width:widthD/1.5,
         height:hightD/11.6,
        // borderWidth:2,
         flexDirection:'row',
        }  
 
})
Lectures.navigationOptions = {
  headerShown: false,
}
export default Lectures;