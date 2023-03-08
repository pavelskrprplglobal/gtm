declare abstract class AnalyticsAbstract<InitOptionsType extends object = {}, EventOptionsType extends object = {}, SendOptions extends object = {}> {
    abstract provider: string;
    abstract init(options: InitOptionsType): void;
    abstract event(options: EventOptionsType): void;
    abstract send(options: SendOptions): void;
}
export default AnalyticsAbstract;
