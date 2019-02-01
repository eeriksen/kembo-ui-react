import React from 'react';

import StoryRouter from 'storybook-router'
import { storiesOf } from '@storybook/react'
import { withReadme }  from 'storybook-readme'
import { withState } from '@dump247/storybook-state'
import { action } from '@storybook/addon-actions'

import Page from "../../src/components/page/Page"
import Card from "../../src/components/card/Card"
import CardContent from "../../src/components/card/CardContent"
import Paragraph from "../../src/components/typography/Paragraph"
import Badge from "../../src/components/notify/Badge"
import toast from "../../src/components/notify/Toast"
import Button from "../../src/components/button/Button"
import ButtonGroup from "../../src/components/button/ButtonGroup"
import Row from "../../src/components/grid/Row"
import Col from "../../src/components/grid/Col"
import { Popup, PopupTitle, PopupContent, PopupButtons, PopupTabs } from "../../src/components/notify/Popup"
import PopupYesNo from "../../src/components/notify/PopupYesNo"
import PopupMessage from "../../src/components/notify/PopupMessage"
import Text from "../../src/components/typography/Text"
import Form from "../../src/components/form/Form"
import FormItem from "../../src/components/form/FormItem"
import { Tabs, TabPane } from "../../src/components/nav/Tabs"
import Input from "../../src/components/form/Input"
import Callout from "../../src/components/notify/Callout"
import Tooltip from "../../src/components/notify/Tooltip"

import BadgeReadme from "../../src/components/notify/Badge/README.md"
import PopupReadme from "../../src/components/notify/Popup/README.md"
import PopupYesNoReadme from "../../src/components/notify/PopupYesNo/README.md"
import PopupMessageReadme from "../../src/components/notify/PopupMessage/README.md"
import CalloutReadme from "../../src/components/notify/Callout/README.md"
import TooltipReadme from "../../src/components/notify/Tooltip/README.md"



// Decorator
const pageDecorator = (story) => (
    <Page>
        <Card>
            <CardContent>
                {story()}
            </CardContent>
        </Card>
    </Page>
);


// Section title
const SECTION_TITLE = "10 - Notify";



/**
 * BADGE
 */
storiesOf(`${SECTION_TITLE}/Badge`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(BadgeReadme))
    .add('types', () => (
        <React.Fragment>
            <Paragraph>
                <Badge>Default badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge color="primary">Primary badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge color="info">Info badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge color="success">Success badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge color="warning">Warning badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge color="error">Error badge</Badge>
            </Paragraph>
        </React.Fragment>
    ))
    .add('filled', () => (
        <React.Fragment>
            <Paragraph>
                <Badge fill>Default badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill color="primary">Primary badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill color="info">Info badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill color="success">Success badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill color="warning">Warning badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill color="error">Error badge</Badge>
            </Paragraph>
        </React.Fragment>
    ))
    .add('small', () => (
        <React.Fragment>
            <Paragraph>
                <Badge fill small>Default badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill small color="primary">Primary badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill small color="info">Info badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill small color="success">Success badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill small color="warning">Warning badge</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill small color="error">Error badge</Badge>
            </Paragraph>
        </React.Fragment>
    ))
    .add('round', () => (
        <React.Fragment>
            <Paragraph>
                <Badge fill round>1</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill round color="primary">99</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill round color="info">365</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill round color="success">7253</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill round color="warning">98321</Badge>
            </Paragraph>
            <Paragraph>
                <Badge fill round color="error">14.58</Badge>
            </Paragraph>
        </React.Fragment>
    ));



/**
 * TOAST
 */
storiesOf(`${SECTION_TITLE}/Toast`, module)
    .addDecorator(pageDecorator)
    // .addDecorator(withReadme(ToastReadme))
    .add('default', () => (
        <Row>
            <Col span={8}>
                <Button block color="primary" onClick={() => toast.info("This is a info toast")}>
                    Info toast
                </Button>
            </Col>
            <Col span={8}>
                <Button block color="success" onClick={() => toast.success("This is a success toast")}>
                    Success toast
                </Button>
            </Col>
            <Col span={8}>
                <Button block color="error" onClick={() => toast.error("This is an error toast")}>
                    Error toast
                </Button>
            </Col>
        </Row>
    ));



/**
 * POPUP
 */
storiesOf(`${SECTION_TITLE}/Popup`, module)
    .addDecorator(pageDecorator)
    .addDecorator(StoryRouter())
    .addDecorator(withReadme(PopupReadme))
    .add('default', withState({
        title: "Default popup",
        visible: true,
        type: null
    }, (store) => (
        <React.Fragment>
            <ButtonGroup>
                <Button iconColor="primary" icon="arrow-right" onClick={() => store.set({visible: true, type: null, title: "Default popup"})}>Show default popup</Button>
                <Button iconColor="success" icon="arrow-right" onClick={() => store.set({visible: true, type: "success", title: "Success popup"})}>Show success popup</Button>
                <Button iconColor="error" icon="arrow-right" onClick={() => store.set({visible: true, type: "error", title: "Error popup"})}>Show error popup</Button>
            </ButtonGroup>

            <Popup type={store.state.type} visible={store.state.visible} onClose={() => store.set({visible: false})}>
                <PopupTitle subtitle="This here is the subtitle">
                    {store.state.title}
                </PopupTitle>
                <PopupContent>
                    <Paragraph>
                        <Text base60>
                            Filet mignon rump strip steak short loin burgdoggen venison beef jowl pork loin shoulder pork
                            pig biltong ham hock. Sirloin short ribs pork loin corned beef meatloaf pig,
                            ham cupim. Turkey beef pastrami filet mignon,
                            pork loin venison beef ribs ribeye short loin. Landjaeger sirloin chicken doner short ribs.
                            Bacon ipsum dolor amet bresaola pork hamburger cupim meatball beef ribs.
                            Bacon pork loin sirloin ball tip, landjaeger picanha ground round tenderloin porchetta bresaola cupim pork.
                            Biltong tongue porchetta, pork loin bacon filet mignon shankle cow andouille
                            ground round cupim turducken alcatra strip steak. Tenderloin kevin tri-tip buffalo
                            short loin bacon strip steak shoulder brisket. Tail ribeye sausage, short loin pastrami
                            jerky shank biltong turducken shoulder beef hamburger pig. Porchetta filet mignon boudin corned beef.
                            Ham rump meatloaf, corned beef jowl landjaeger cow hamburger.<br /><br />
                            Shoulder hamburger salami pancetta filet mignon, brisket prosciutto tri-tip ham chuck chicken doner.
                            Buffalo capicola boudin kevin cupim ribeye. Bacon drumstick burgdoggen, ribeye t-bone beef jowl tenderloin.
                            @Andouille beef pork ball tip. Buffalo brisket tri-tip hamburger. Filet mignon pig leberkas,
                            tenderloin short loin tri-tip tail bacon pancetta biltong shank beef.<br /><br />
                            Brisket sausage drumstick, pork bacon shoulder leberkas ribeye turkey shankle porchetta kielbasa.
                            Capicola bresaola swine, hamburger short loin turkey shankle sausage salami frankfurter.
                            Shankle beef ribs pork loin, cow strip steak ground round turkey. Burgdoggen porchetta
                            swine short ribs pancetta landjaeger alcatra buffalo. Shankle pancetta short ribs
                            porchetta kielbasa.
                        </Text>
                    </Paragraph>
                    <Form>
                        <FormItem label="Type your name">
                            <Input />
                        </FormItem>
                    </Form>
                </PopupContent>
                <PopupButtons>
                    <Button color={store.state.type || "primary"} onClick={() => store.set({visible: false})}>
                        Save changes
                    </Button>
                </PopupButtons>
            </Popup>
        </React.Fragment>
    )))
    .add('with tabs', withState({
        activeKey: 1
    }, (store) => (
        <Popup>
            <PopupTitle>
                Tabbed content
            </PopupTitle>
            <PopupTabs>
                <Tabs activeKey={store.state.activeKey} onChange={(val) => store.set({activeKey: val})}>
                    <TabPane key={1} label="First tab">
                        <PopupContent>
                            First tab pane content
                        </PopupContent>
                    </TabPane>
                    <TabPane key={2} label="Second tab">
                        <PopupContent>
                            Second tab pane content
                        </PopupContent>
                    </TabPane>
                    <TabPane key={3} label="Third tab">
                        <PopupContent>
                            Third tab pane content
                        </PopupContent>
                    </TabPane>
                    <TabPane key={4} label="Fourth tab">
                        <PopupContent>
                            Fourth tab pane content
                        </PopupContent>
                    </TabPane>
                </Tabs>
            </PopupTabs>
            <PopupButtons>
                <Button color="primary">
                    Save changes
                </Button>
                <Button>
                    Close
                </Button>
            </PopupButtons>
        </Popup>
    )));


/**
 * POPUP YES/NO
 */
storiesOf(`${SECTION_TITLE}/PopupYesNo`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(PopupYesNoReadme))
    .add('default', () => (
        <PopupYesNo
            title="Are you sure?"
            onYes={action('yes')}
            onNo={action('no')}>
            Are you absolutely positively sure you want to perform the following action?
        </PopupYesNo>
    ));



/**
 * POPUP MESSAGE
 */
storiesOf(`${SECTION_TITLE}/PopupMessage`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(PopupMessageReadme))
    .add('types', withState({
        visible: true,
        type: null
    }, (store) => (
        <div>
            <ButtonGroup>
                <Button color="primary" onClick={() => store.set({visible: true, type: null})}>Show default alert</Button><br />
                <Button color="success" onClick={() => store.set({visible: true, type: "success"})}>Show success alert</Button><br />
                <Button color="error" onClick={() => store.set({visible: true, type: "error"})}>Show error alert</Button><br />
            </ButtonGroup>

            <PopupMessage
                visible={store.state.visible && !store.state.type}
                type={store.state.type}
                title="Info!"
                message="We just want to show the user a little harmless info message right here."
                onOk={() => store.set({visible: false})}
            />
            <PopupMessage
                visible={store.state.visible && store.state.type === "success"}
                type={store.state.type}
                title="Success!"
                message="Something happened successfully which is worth noting with a popup."
                onOk={() => store.set({visible: false})}
            />
            <PopupMessage
                visible={store.state.visible && store.state.type === "error"}
                type={store.state.type}
                title="Error!"
                message="There was an error performing some kind of operation. Please try again."
                onOk={() => store.set({visible: false})}
            />
        </div>
    )));



/**
 * CALLOUT
 */
storiesOf(`${SECTION_TITLE}/Callout`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(CalloutReadme))
    .add('types', () => (
        <React.Fragment>
            <Callout title="Default">
                This is a default callout where you can write something.
            </Callout><br />
            <Callout title="Info!" type="info">
                This is an info callout where you can write something.
            </Callout><br />
            <Callout title="Success!" type="success">
                This is a success callout where you can write something.
            </Callout><br />
            <Callout title="Warning!" type="warning">
                This is a warning callout where you can write something.
            </Callout><br />
            <Callout title="Error!" type="error">
                This is an error callout where you can write something.
            </Callout>
        </React.Fragment>
    ));



/**
 * TOOLTIP
 */
storiesOf(`${SECTION_TITLE}/Tooltip`, module)
    .addDecorator(pageDecorator)
    .addDecorator(withReadme(TooltipReadme))
    .add('default', () => (
        <Row>
            <Col span={12}>
                <Tooltip title="This is a regular tooltip">
                    Hover to show tooltip
                </Tooltip>
            </Col>
            <Col span={12}>
                <Tooltip title="This is a regular tooltip" trigger="click">
                    Click to show another tooltip
                </Tooltip>
            </Col>
        </Row>
    ));