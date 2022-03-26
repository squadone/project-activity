import Text from './components/Text/Text'
import AppPage from './components/Page/AppPage'
import Custom from './components/ButtonVue/Button.vue'
import CheckBox from './components/CheckboxVue/CheckBox'
import Input from './components/InputVue/Input'
import Select from './components/SelectVue/Select'
import TextVue from './components/CustonText/TextVue'
import { withComponentMappingContext, MapTo } from '@mavice/aem-vue-editable-components'

// Components Mapping
MapTo('vue/components/text')(Text)
MapTo('vue/components/page')(withComponentMappingContext(AppPage))
MapTo('vue/components/custom-vue')(Custom)
MapTo('vue/components/checkbox-vue')(CheckBox)
MapTo('vue/components/input-vue')(Input)
MapTo('vue/components/select-vue')(Select)
MapTo('vue/components/text-vue')(TextVue)
