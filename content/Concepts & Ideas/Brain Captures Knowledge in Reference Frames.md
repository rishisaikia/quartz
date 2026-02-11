>Similar to how regions in our old brain makes reference frames of our environment, sensory regions of our neocortex makes reference frames to learn *what* and *where* of physical objects, and non-sensory regions make reference frames for conceptual knowledge. 

### Traditional Model of the Neocortex:
The traditional model of the neocortex suggests that the neocortex operates like a flowchart where input is detected in terms of features at each level, and passed on to the next level for assembling, till eventually a full model is recreated.  As an example for vision: Each cell in the retina detecs light in a small part of the image, and then project to the neocortex. Each neuron in the first region of the neocortex (V1) only gets input from a small part of the retina. Thus, the columns in V1 can't recognise complete objects - they can only detect small visual features such as lines or edges in a small part of the image. V1 then passes these features to V2, which combines these simple features into more complex features such as corners or arcs. This process is repeated till until neurons can recognise complete objects. This same process - i.e. moving from simple features to complex features to complete objects - also occurs with touch and hearning. 

The above treats vision as if the goal is to take one picture at a time and label it. But vision is not like that. Every second, our eyes make quick movements, called *saccades*. WIth each saccade, the inputs to the brain completely changes. The traditional theory ignores this interactive aspect of vision, and the role of movement to perceive objects. ^06dbc1

We also know that input into the neocortex is not like a photograph, but a highly distorted and incomplete quite of image patches - this is because photoreceptors are not evenly distributed in our retina; there are also parts of the retina that have no photoreceptors, leading to blind spots. Yet, we are unaware of these distortions and gaps. This is called the *binding problem* or *sensor-fusing problem*.  ^ce74dc

### New Model of the Neocortex
The new model of the neocortex suggests that a single cortical region can recognise complete objects, as evidenced by the mouse's visual. We use hierarchy to pass on complete objects (instead of features), and assemble these objects into more complex objects. We learn about the entire world as a complex hierarchy of objects located relative to other objects. 

#### The brain models the world by associating sensory input with locations in reference frames. 

^52b6e2

Imagine running your finger over your phone. Your brain predicts what the phone will feel like as your finger moves. In order to do this, it has to know the relative position of your finger in reference to the phone. Now, different parts of your body (lips, fingertips, palm) could touch the phone, and the brain would still be able to predict. So the brain also needs to predict all of these basis their relative position on the phone. Essentially, the brain needs to know the location of every part of your body relative to the phone.  ^31bae8

Vision works in a similar way. Patches of the retina are like patches of skin. Each patch sees only a small part of an entire object. The brain starts with a full picture on the back of the eye, and then breaks it up into hundreds of pieces, assigning each piece to a location relative to the object being observed.

To be able to navigate the world, mammals have an internal navigation system inside the hippocampus and the entorhinal cortex. Rats have neurons in the hippocampus called *place cells* that light up when they return to a place they've been to before; the same place cells light up for the same places. They also have *grid cells* in the entorhinal cortex that fire to form a grid pattern. If the rat moves in a straight line, the same grid cell becomes active again and again at equally spaced intervals. Grid cells are like the rows and columns of a map, and place cells are like the details printed in the square on the map.

![[Entorhinal Region.png]]

##### Models of Physical Objects: 
Similarly, the neocortex perhaps has grid and place cells that help capture knowledge about objects and concepts. Every cortical column, measuring 1 square mm, has its own set of reference frames for varied objects. While a column is tiny, each of its layers can have thousands of neurons. The upper layer is like place cells, while lower layer is like grid cells. Any object is learnt by associating the observed features (place cells, upper layer) with their location (grid cells, lower layer). When a sensory input arrives, it activates neurons in the upper layer, which in turn invokes the location associated with the input in the lower layer. When we move, the lower layer changes to the expected location, which causes a prediction of the next input in the upper layer. 

![[Cortical Column.jpeg]]

If the original input is ambiguous, then multiple locations in the lower layer are activated. For e.g., if you run your finger over the edge of your phone, multiple locations in the lower layer will be activated since multiple things could have edges. When we move, the lower layer changes all the possible locations, which then make multiple predictions in the upper layer. The next input will then eliminate any locations that don't match.

To learn a full-fledged model of objects, we also need a sense of orientation to be able to predict. There are neurons in the old brain called direction cells that represent the direction an animal's head is facing. Cortical columns possibly have similar orientation cells. When touching the side button of your phone with your index finger, the actual impression on the finger depends on the orientation of the finger; if you rotate the finger in the same location, the sensation of the finger changes; to predict its input, therefore, a cortical column must have a representation of orientation. 

##### Models of Conceptual Knowledge
The brain also uses reference frames to preserve conceptual knowledge. While the reference frames for physical objects require a fixed number of dimensions, conceptual knowledge may require n number of dimensions. Gaining expertise in a topic requires discovering a good reference frame to represent the associated data and facts. Once a reference frame is built, thinking is essentially moving around on this reference frame, much like we physically move around in the world. 

It is this same ability that allows us to learn and use language. Language has a nested and recursive strucuture, i.e. you can make phrases containing phrases containing phrases. Similarly, we can also make reference frames that contain reference frames containing reference frames. Like hyperlinks in an HTML document, the reference frame for a specific concept can be built with links to other reference frames. 

This model of neocortex operation is supported by two ideas: ^8017e4
1. Method of Loci: By associating knowledge to specific parts of a known map, we are able to learn and retrieve them easily. This is because we're leveraging an existing reference frame. ^2241ad
2. fMRI data also suggests that the brain has where and what cells in the neocortex, similar to what we know exists in the old braIn. 

#### Knowledge is distributed in the Neocortex
No single column can learn a full model of an object - a cortical column can learn hundreds of different models, but it's limited by the type of input it receives. So to arrive at a full model, different columns can learn different models about the same object. All of these have to arrive at a consensus to identify an object.

For e.g., when you are looking at your phone, every cortical column in the visual regions receives input from the retina. Each column thus sees a part of the phone, and learns a partial model of the phone. What we know about the phone exists in thousands of models in thousands of columns. Same is the case when you touch the phone. When you touch it with a single finger, the information isn't enough for you to identify the object; you will need to run your finger across the body of the phone to figure out what it is. Alternatively, when you are touching it with five fingers, the models that are distributed across the different columns linked to the five fingers have to arrive at a consensus on the identity of the object. 

>Traditional model of the neocortex talks about a hierarchical method of functioning. 

##### Binding Problem
So we know that our sensory inputs don't converge at any point in our brains to create a unified perception. Instead, the sensory inputs help to create thousands of fragmented models of an object scattered across thousands of cortical column - each model critical for the full picture, yet not the full picture in itself. Yet, we perceive objects as one single entity instead of thousands of objects. This is because of *binding*.

To arrive at a consensus on what a particular input is requires the different cortical columns to vote. Basis the models within a cortical column and the inputs being received, each column *votes* broadcasts what it thinks it is observing. While most of the connections in a column run up and down the column and stay within, there are some axons that cover long distances to other columns. This is how each column advertises its vote for the best guess explanation of the received input. Often a column will be unsure, in which case its neurons will send multiple possibilities at the same time. Simultaneously, the column receives projections from other columns representing the guesses. The most common guesses will suppress the least common guesses until the entire network settles on an answer.

When an object is recognised, it means that the columns voted and have agreed on what the object that they are sensing is. The voting neurons in each column form a stable pattern that represents the object and where it is relative to us. The activity of the voting neurons does not change as we move our eyes and gingers, as long as we are sensing the same object. The other neurons in each column changes with movement, but the boting neurons, the ones that represent the object, do not. If we could look down on the neocortex, we would see a stable pattern of activity in one layer of cells. This satablitly would span large areas, convering thousands of columns. These are the voting neurons. 

>This also means that what we think we are perceiving is actually a simulation that is maintained by the voting neurons despite the specific inputs changing over time? 

![[Optical Illusion - Face vs. Vase.png]]

The brain wants to reach a consensus. In the above optical illusion, since the voting neurons have two maps that match the incoming inputs, it picks one possibility over the other.

**Voting allows our brain to fill up the blanks**
Once the brain reaches a consensus about a particular input, even if the object is partially covered, the brain *fills up the gaps*. For example, as you hold your phone, your finger(s) might be blocking some part of the device. But since the voting neurons, once they reach a consensus, project to the columns whose input is obscured, every column knows there is a phone. Even the columns that are blocked can now predict what they'll see if if you remove your finger.

**Hierarchy in Thousand Brains**
Unlike in traditional theory where features are passed between hierarchical levels of the neocortex to assemble them into recognisable objects, new theory suggests 





#neurology