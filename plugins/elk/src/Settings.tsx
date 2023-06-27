import { ReactNative as RN } from "@vendetta/metro/common";
import { Forms } from "@vendetta/ui/components";
import { useProxy } from "@vendetta/storage";
import { storage } from "@vendetta/plugin";

const { FormInput } = Forms;

export default () => {
    useProxy(storage);

    return (
        <RN.ScrollView>
            <FormInput
                title="Length for filenames"
                keyboardType="numeric"
                placeholder="8"
                value={storage.nameLength.toString()}
                onChange={(v: string) => storage.nameLength = v.replace(/[^0-9]/g, "")}
            />
            <FormInput
                title="Characters to use for filenames"
                keyboardType="default"
                placeholder="9"
                value={storage.nameChars.toString()}
                onChange={(v: string) => storage.nameChars = v.replace(/^[a-zA-Z0-9]+/$, "")}
                />
        </RN.ScrollView>
    )
}