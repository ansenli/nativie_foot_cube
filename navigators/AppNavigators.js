// 此页面配置app的整体导航
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createDrawerNavigator,
  DrawerItems,
  createSwitchNavigator
} from 'react-navigation'
import React from 'react' // 切记只要我们用到react-native中的组件都需要导入React
import { Button,Platform,ScrollView,SafeAreaView } from 'react-native'
import HomePage from '../page/HomePage'
import Page1 from '../page/Page1'
import Page2 from '../page/Page2'
import Page3 from '../page/Page3'
import Page4 from '../page/Page4'
import Page5 from '../page/Page5'
import Login from '../page/Login'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



const DrawerNav = createDrawerNavigator({
  Page4:{
    screen:Page4,
    navigationOptions:{
      drawerLabel:'Page4',
      drawerIcon:({tintColor})=>{
        return <MaterialIcons 
          name={'drafts'}
          size= {24}
          style={{color:tintColor}}
        />
      }
    }
  },
  Page5:{
    screen:Page5,
    navigationOptions:{
      drawerLabel:'Page5',
      drawerIcon:({tintColor})=>{
        return <MaterialIcons 
          name={'move-to-inbox'}
          size= {24}
          style={{color:tintColor}}
        />
      }
    }
  }
},{
  initialRouteName:'Page4',
  contentOptions:{
    activeTintColor:'#e91e63'
  },
  contentComponent:(props)=>(
    <ScrollView
      style={{backgroundColor: '#789',flex:1}}
    >
      <SafeAreaView
        forceInset={{top:'always',horizontal:'never'}}
      >
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  )
})

const AppTopNavigator = createMaterialTopTabNavigator({
  Page1:{
    screen:Page1,
    navigationOptions:{
      tabBarLabel:'All'
    }
  },
  Page2:{
    screen:Page2,
    navigationOptions:{
      tabBarLabel:'IOS'
    }
  },
  Page3:{
    screen:Page3,
    navigationOptions:{
      tabBarLabel:'React'
    }
  },
  Page4:{
    screen:Page4,
    navigationOptions:{
      tabBarLabel:'React Native'
    }
  },
  Page5:{
    screen:Page5,
    navigationOptions:{
      tabBarLabel:'Devio'
    }
  }
},{
  tabBarOptions:{
    tabStyle:{mindWidth:50,},
    upperCaseLabel:false, // 是否是标签大写默认是true
    scrollEnabled:true,// 是否支持，选项卡滚动 默认是 false
    style:{
      backgroundColor: '#678',// tabbar 背景色
    },
    indicatorStyle:{
      height: 2,
      backgroundColor:'white'
    }, // 标签指示器样式
    labelStyle:{
      fontSize:13,
      marginTop:6,
      marginBottom:6
    } // 文字的样式
  }
})
const AppBottomNavigator = createBottomTabNavigator({
  Page1:{
    screen:Page1,
    navigationOptions:{
      tabBarLabel:'最热',
      tabBarIcon:({tintColor,focused})=>(
        <Ionicons 
          name={'ios-home'}
          size={26}
          style={{color:tintColor}}
        />
      )

    }
  },
  Page2:{
    screen:Page2,
    navigationOptions:{
      tabBarLabel:'趋势',
      tabBarIcon:({tintColor,focused})=>(
        <Ionicons 
          name={'ios-people'}
          size={26}
          style={{color:tintColor}}
        />
      )
    }
  },
  Page3:{
    screen:Page3,
    navigationOptions:{
      tabBarLabel:'收藏',
      tabBarIcon:({tintColor,focused})=>(
        <Ionicons 
          name={'ios-chatboxes'}
          size={26}
          style={{color:tintColor}}
        />
      )
    }
  },
  Page4:{
    screen:Page4,
    navigationOptions:{
      tabBarLabel:'我的',
      tabBarIcon:({tintColor,focused})=>(
        <Ionicons 
          name={'ios-aperture'}
          size={26}
          style={{color:tintColor}}
        />
      )
    }
  }
},{
  tabBarOptions:{
    activeTintColor:Platform.OS === 'ios'? '#e91e63':'#fff',
  }
})

const AppStack = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions:{
      title:'Home',
      headerBackTitle:'返回' // 设置返回此页面的返回按钮文案
    }
  },
  Page1:{
    screen:Page1,
    navigationOptions:({navigation})=>({ //在这里定义每个页面的导航数据 动态配置
      title:`${navigation.state.params.name}页面名`
    })
  },
  Page2:{
    screen:Page2,
    navigationOptions:{ // 在这里定义每个页面的导航数据 静态配置
      title:'this is page2',
    }
  },
  Page3:{
    screen:Page3,
    navigationOptions:(props)=>{
      const {navigation} = props;
      const {state,setParams} = navigation;
      const {params}= state;
      return {
        title:params.title ? params.title:'this is default Page3',
        headerRight:(
          <Button
            title = {params.mode === 'edit'?'保存':'编辑'}
            onPress = {()=>setParams({mode:params.mode ==='edit'?'':'edit'})}
          />
        )
      }

    }
  },
  Page4:{
    screen:Page4,
    navigationOptions:{ // 在这里定义每个页面的导航数据 静态配置
      title:'this is page4'
    }
  },
  Bottom:{
    screen:AppBottomNavigator,
    navigationOptions:{
      title:'bottomNavigator'
    }
  },
  Top:{
    screen:AppTopNavigator,
    navigationOptions:{
      title:'topNavigator'
    }
  },
  DrawerNav:{
    screen:DrawerNav,
    navigationOptions:{
      title:'This is DrawerNavigator'
    }
  }

})

const AuthStack = createStackNavigator({
  Login:{
    screen:Login,
  }
},{
  navigationOptions:{
    // header:null ,// 可以将header 设为null，来禁用StackNavigator 的 Navigation Bar
  }
});

export const AppNavigators = createSwitchNavigator(
  {
    Auth:AuthStack,
    App:AppStack
  },{
    initialRouteName:'Auth'
  }
)